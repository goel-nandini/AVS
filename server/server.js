import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllBookings, insertBooking, updateStatus } from './db.js';
import { sendBookingEmails } from './email.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health & diagnostics endpoint
app.get('/api/health', (req, res) => {
  const hasGmail = Boolean(
    process.env.GMAIL_USER &&
    process.env.GMAIL_APP_PASSWORD &&
    process.env.GMAIL_APP_PASSWORD !== 'your_16_char_app_password'
  );
  res.json({
    status: 'ok',
    service: 'Aura Vital Star Booking & Database API',
    database: 'active',
    gmailConfigured: hasGmail,
    configuredGmailUser: hasGmail ? process.env.GMAIL_USER : 'Not configured yet'
  });
});

// GET all stored bookings
app.get('/api/bookings', (req, res) => {
  try {
    const bookings = getAllBookings();
    res.json({ success: true, bookings });
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ success: false, error: 'Database read failure' });
  }
});

// POST a new booking appointment
app.post('/api/bookings', async (req, res) => {
  try {
    const bookingData = req.body;
    if (!bookingData.customerName && !bookingData.name) {
      return res.status(400).json({ success: false, error: 'Customer name is required' });
    }

    // 1. Store permanently in database
    const savedRecord = insertBooking(bookingData);
    console.log(`📝 Stored booking ${savedRecord.id} for ${savedRecord.customerName} in database.`);

    // 2. Dispatch real confirmation email via Gmail SMTP
    let emailResult = { success: false, reason: 'Pending' };
    try {
      emailResult = await sendBookingEmails(savedRecord);
    } catch (emailErr) {
      console.error('Non-blocking email error:', emailErr);
      emailResult = { success: false, error: emailErr.message };
    }

    res.status(201).json({
      success: true,
      booking: savedRecord,
      emailResult
    });
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({ success: false, error: 'Failed to process booking' });
  }
});

// PATCH update booking status
app.patch('/api/bookings/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ success: false, error: 'Status is required' });
    }
    const updated = updateStatus(id, status);
    if (!updated) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    res.json({ success: true, booking: updated });
  } catch (err) {
    console.error('Error updating status:', err);
    res.status(500).json({ success: false, error: 'Failed to update booking status' });
  }
});

app.listen(PORT, () => {
  console.log(`✨ AVS Booking Server & Database running on http://localhost:${PORT}`);
  console.log(`📧 Gmail notifications: ${process.env.GMAIL_USER || 'Add credentials to server/.env'}`);
});
