/* ========================================
   AVS — Aura Vital Star | Interactive Scripts
   ======================================== */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  /* ---- LOADER ---- */
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 700);
  }

  /* ---- ANNOUNCEMENT BAR TICKER ---- */
  const annTrack = document.getElementById('announce-track');
  const annPrev = document.getElementById('ann-prev');
  const annNext = document.getElementById('ann-next');
  
  if (annTrack && annPrev && annNext) {
    const items = annTrack.querySelectorAll('.announce-item');
    let currentIndex = 0;
    
    const updateAnnounce = () => {
      items.forEach((item, idx) => {
        item.style.display = idx === currentIndex ? 'inline-flex' : 'none';
      });
    };

    // Initial state: show first or all if wide screen
    if (window.innerWidth < 768) {
      updateAnnounce();
      annNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateAnnounce();
      });
      annPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateAnnounce();
      });
      setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateAnnounce();
      }, 5000);
    }
  }

  /* ---- HERO SLIDER ---- */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    if (slides.length === 0) return;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startSlideShow() {
    stopSlideShow();
    slideInterval = setInterval(nextSlide, 4500);
  }

  function stopSlideShow() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (slides.length > 0) {
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-idx'), 10);
        goToSlide(idx);
        startSlideShow(); // restart timer
      });
    });

    const heroRight = document.querySelector('.hero-right');
    if (heroRight) {
      heroRight.addEventListener('mouseenter', stopSlideShow);
      heroRight.addEventListener('mouseleave', startSlideShow);
    }

    startSlideShow();
  }

  /* ---- SERVICES CAROUSEL NAVIGATION ---- */
  const carousel = document.getElementById('services-carousel');
  const svcPrev = document.getElementById('svc-prev');
  const svcNext = document.getElementById('svc-next');

  if (carousel && svcPrev && svcNext) {
    const cardWidth = 260; // card + gap

    svcPrev.addEventListener('click', () => {
      carousel.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
    });

    svcNext.addEventListener('click', () => {
      carousel.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
    });
  }

  /* ---- NAVBAR SCROLL EFFECT & ACTIVE LINKS ---- */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }

    // ScrollSpy
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { passive: true });

  /* ---- MOBILE MENU ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-book');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeMobile = () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (mobileClose) mobileClose.addEventListener('click', closeMobile);
    mobileLinks.forEach(link => link.addEventListener('click', closeMobile));
  }

  /* ---- TESTIMONIAL DOTS INTERACTION ---- */
  const tDots = document.querySelectorAll('.t-dot-sm');
  if (tDots.length > 0) {
    tDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        tDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      });
    });
  }

  /* ---- FORM SUBMISSION PREVIEW ---- */
  const ctaForm = document.getElementById('cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cta-name')?.value;
      const phone = document.getElementById('cta-phone')?.value;
      if (name || phone) {
        alert(`Thank you, ${name || 'valued client'}! We will contact you at ${phone || 'your number'} to confirm your appointment.`);
        ctaForm.reset();
      } else {
        alert('Please enter your name and phone number to book an appointment.');
      }
    });
  }
});
