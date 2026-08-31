import { useEffect, useState } from 'react';

const announceItems = [
  '⭐ New Client Offer: Get 15% Off on Your First Visit',
  '◆ Free Consultation for Orthotics',
  '◆ Wellness Packages Starting at $99',
  '◆ Gift Cards Available'
];

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#salon', label: 'Salon & Wellness' },
  { href: '#orthotics', label: 'Orthotics' },
  { href: '#about', label: 'About AVS' },
  { href: '#packages', label: 'Packages' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' }
];

const heroSlides = [
  {
    label: 'AURA VITAL STAR',
    image: '/hero_brand_bg.jpg',
    alt: 'Aura Vital Star Rejuvenation Centre',
    brand: true,
    className: 'slide-brand'
  },
  {
    label: 'FACIAL TREATMENTS',
    image: '/hero_facial.jpg',
    alt: 'Facial Treatments at Aura Vital Star',
    title: 'FACIAL\nTREATMENTS',
    subtitle: 'Revealing brighter,\nhealthier, glowing skin.'
  },
  {
    label: 'MASSAGE THERAPY',
    image: '/hero_massage.jpg',
    alt: 'Massage Therapy at Aura Vital Star',
    title: 'MASSAGE\nTHERAPY',
    subtitle: 'Relax. Rejuvenate.\nRestore your natural balance and inner peace.'
  },
  {
    label: 'ORTHOTICS & COMPRESSION',
    image: '/hero_orthotics2.jpg',
    alt: 'Orthotics and Compression at Aura Vital Star',
    title: 'ORTHOTICS &\nCOMPRESSION',
    subtitle: 'Support. Comfort.\nMove with confidence.\n<small>Custom orthotics solutions for pain relief and better movement.</small>'
  },
  {
    label: 'WELLNESS RITUALS',
    image: '/hero_wellness.jpg',
    alt: 'Wellness Rituals at Aura Vital Star',
    title: 'WELLNESS\nRITUALS',
    subtitle: 'Mind. Body. Soul.\nBalanced beautifully.\n<small>Experience rituals designed to restore your inner harmony.</small>'
  },
  {
    label: 'RELAXATION PACKAGES',
    image: '/hero_relaxation.jpg',
    alt: 'Relaxation Packages at Aura Vital Star',
    title: 'RELAXATION\nPACKAGES',
    subtitle: 'Curated packages for\ncomplete relaxation.'
  }
];

const whyPillars = [
  { title: 'RMP Certified', desc: 'Registered Massage Professionals you can trust.', icon: 'check' },
  { title: 'Expert Team', desc: 'Skilled professionals dedicated to your care.', icon: 'person' },
  { title: 'Personalized Care', desc: 'Solutions designed around your needs.', icon: 'heart' },
  { title: 'Safe & Hygienic', desc: 'Top standards of cleanliness and safety always.', icon: 'shield' },
  { title: 'Premium Experience', desc: 'Luxury, comfort and results you deserve.', icon: 'star' }
];

const services = [
  { title: 'Massage Therapy', desc: 'Relax. Rejuvenate. Professionals you can trust.', image: '/salon_bg.jpg', icon: 'massage' },
  { title: 'Facial Treatments', desc: 'Revealing brighter, healthier, glowing skin.', image: '/brand_editorial.jpg', icon: 'facial' },
  { title: 'Body Treatments', desc: 'Detox. Nourish. Revive your natural glow.', image: '/hero_bg.jpg', icon: 'body' },
  { title: 'Hair Removal', desc: 'Smooth. Confident. Long-lasting results.', image: '/hero_facial.jpg', icon: 'hair' },
  { title: 'Relaxation Packages', desc: 'Curated packages for complete relaxation.', image: '/hero_relaxation.jpg', icon: 'relax' },
  { title: 'Wellness Rituals', desc: 'Mind. Body. Soul. Balanced beautifully.', image: '/hero_wellness.jpg', icon: 'wellness' },
  { title: 'Orthotics & Compression Socks', desc: 'Custom support. Better movement.', image: '/hero_orthotics2.jpg', icon: 'orthotics' }
];

const testimonials = [
  { quote: 'The massage was incredible! I felt relaxed and recharged.', author: 'Priya M.' },
  { quote: 'Amazing facial treatment. My skin has never felt this good.', author: 'Neha R.' },
  { quote: 'The orthotics have made a huge difference in my daily comfort.', author: 'Arjun S.' }
];

function Icon({ name, width = 28, height = 28 }) {
  const pillarProps = { width, height, viewBox: '0 0 56 56', fill: 'none' };
  const serviceProps = { width, height, viewBox: '0 0 32 32', fill: 'none' };

  switch (name) {
    case 'check':
      return (
        <svg {...pillarProps}>
          <rect x="4" y="4" width="48" height="48" rx="24" stroke="#c49a3c" strokeWidth="1.4" />
          <path d="M18 28l7 7 13-14" stroke="#c49a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'person':
      return (
        <svg {...pillarProps}>
          <rect x="4" y="4" width="48" height="48" rx="24" stroke="#c49a3c" strokeWidth="1.4" />
          <circle cx="28" cy="22" r="6" stroke="#c49a3c" strokeWidth="1.6" />
          <path d="M16 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#c49a3c" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...pillarProps}>
          <rect x="4" y="4" width="48" height="48" rx="24" stroke="#c49a3c" strokeWidth="1.4" />
          <path d="M28 16 C28 16 20 20 20 27 C20 31 23 34 28 35 C33 34 36 31 36 27 C36 20 28 16 28 16Z" stroke="#c49a3c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <path d="M24 27l3 3 6-6" stroke="#c49a3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...pillarProps}>
          <rect x="4" y="4" width="48" height="48" rx="24" stroke="#c49a3c" strokeWidth="1.4" />
          <path d="M28 14 C28 14 34 20 34 30 C34 36 31 39 28 40 C25 39 22 36 22 30 C22 20 28 14 28 14Z" stroke="#c49a3c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <path d="M28 26v8" stroke="#c49a3c" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'star':
      return (
        <svg {...pillarProps}>
          <rect x="4" y="4" width="48" height="48" rx="24" stroke="#c49a3c" strokeWidth="1.4" />
          <polygon points="28,16 31,23 39,23 33,28 35,36 28,31 21,36 23,28 17,23 25,23" stroke="#c49a3c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        </svg>
      );
    case 'massage':
      return (
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28"> 
          <path d="M16 4C10 4 6 9 6 14c0 4 2 7 5 9l1 5h8l1-5c3-2 5-5 5-9 0-5-4-10-10-10z" stroke="#c49a3c" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
        </svg>
      );
    case 'facial':
      return (
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
          <circle cx="16" cy="16" r="10" stroke="#c49a3c" strokeWidth="1.4"/>
          <path d="M12 14c1-3 7-3 8 0" stroke="#c49a3c" strokeWidth="1.4" strokeLinecap="round"/>
          <circle cx="12" cy="18" r="1" fill="#c49a3c"/>
          <circle cx="20" cy="18" r="1" fill="#c49a3c"/>
        </svg>
      );
    case 'body':
      return (
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
          <path d="M16 6c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#c49a3c" strokeWidth="1.4"/>
          <path d="M10 16c2 3 10 3 12 0" stroke="#c49a3c" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      );
    case 'hair':
      return (
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
          <path d="M10 6l3 20M16 6l3 20M22 6l3 20" stroke="#c49a3c" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M8 14h16" stroke="#c49a3c" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      );
    case 'relax':
      return (
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
          <circle cx="16" cy="12" r="5" stroke="#c49a3c" strokeWidth="1.4"/>
          <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#c49a3c" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      );
    case 'wellness':
      return (
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
          <path d="M16 4c0 0-8 6-8 13a8 8 0 0016 0C24 10 16 4 16 4z" stroke="#c49a3c" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
          <path d="M12 20c1.5 2 6.5 2 8 0" stroke="#c49a3c" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      );
    case 'orthotics':
      return (
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
          <path d="M6 22 C6 18 10 12 16 10 C22 8 26 12 26 16 C26 20 22 24 18 25 L8 25 Z" stroke="#c49a3c" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}

function App() {
  const [announceIndex, setAnnounceIndex] = useState(0);
  const [prevAnnounceIndex, setPrevAnnounceIndex] = useState(null);
  const overlapMs = 700; // crossfade overlap duration

  const handleBrandWave = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const shiftX = (x - 50) * 1.4;
    const shiftY = (y - 50) * 1.1;

    event.currentTarget.style.setProperty('--pointer-x', `${x}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${y}%`);
    event.currentTarget.style.setProperty('--wave-shift-x', `${shiftX}px`);
    event.currentTarget.style.setProperty('--wave-shift-y', `${shiftY}px`);
    event.currentTarget.style.setProperty('--wave-rotate', `${(x - 50) * 0.4}deg`);
  };

  const resetBrandWave = (event) => {
    event.currentTarget.style.setProperty('--pointer-x', '50%');
    event.currentTarget.style.setProperty('--pointer-y', '50%');
    event.currentTarget.style.setProperty('--wave-shift-x', '0px');
    event.currentTarget.style.setProperty('--wave-shift-y', '0px');
    event.currentTarget.style.setProperty('--wave-rotate', '0deg');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnounceIndex((prev) => (prev + 1) % announceItems.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  // When announceIndex changes, mark the previous index for overlap then clear it
  useEffect(() => {
    let timeoutId;
    setPrevAnnounceIndex((prev) => {
      // prev here is previous prevAnnounceIndex; we want to set it to the previously active index
      return prev; // keep existing until we set below
    });

    // Determine previous index from announceIndex
    const previous = (announceIndex - 1 + announceItems.length) % announceItems.length;
    setPrevAnnounceIndex(previous);
    timeoutId = setTimeout(() => setPrevAnnounceIndex(null), overlapMs);

    return () => clearTimeout(timeoutId);
  }, [announceIndex]);

  useEffect(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => loader.classList.add('hidden'), 700);
    }

    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
      if (slides.length === 0) return;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
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
          const idx = Number(dot.getAttribute('data-idx'));
          goToSlide(idx);
          startSlideShow();
        });
      });

      const heroRight = document.querySelector('.hero-right');
      if (heroRight) {
        heroRight.addEventListener('mouseenter', stopSlideShow);
        heroRight.addEventListener('mouseleave', startSlideShow);
      }

      startSlideShow();
    }

    const carousel = document.getElementById('services-carousel');
    const svcPrev = document.getElementById('svc-prev');
    const svcNext = document.getElementById('svc-next');

    if (carousel && svcPrev && svcNext) {
      const cardWidth = 260;
      svcPrev.addEventListener('click', () => {
        carousel.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
      });
      svcNext.addEventListener('click', () => {
        carousel.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
      });
    }

    const navbar = document.getElementById('navbar');
    const navLinksGroup = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
      const scrollPos = window.scrollY + 140;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          navLinksGroup.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-close');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-book');

    if (hamburger && mobileMenu) {
      const closeMobile = () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      };

      hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      });

      if (mobileClose) mobileClose.addEventListener('click', closeMobile);
      mobileLinks.forEach((link) => link.addEventListener('click', closeMobile));
    }

    const tDots = document.querySelectorAll('.t-dot-sm');
    if (tDots.length > 0) {
      tDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
          tDots.forEach((d) => d.classList.remove('active'));
          dot.classList.add('active');
        });
      });
    }

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="loader" aria-hidden="true">
        <div className="loader-logo">
          <img className="avs-logo-img" src="/logoavs.png" alt="Aura Vital Star logo" />
        </div>
      </div>

      <div className="announce-bar" id="announce-bar">
        <div className="announce-track-wrap">
          <div className="announce-track" id="announce-track" aria-live="polite" role="status">
            {announceItems.map((item, index) => (
                  <span
                    key={item}
                    className={`announce-item ${index === announceIndex ? 'active' : ''} ${index === prevAnnounceIndex ? 'prev' : ''}`}>
                    {item}
                  </span>
                ))}
          </div>
        </div>
      </div>

      <nav id="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#home" className="nav-logo" aria-label="AVS Home">
            <img className="nav-logo-img" src="/logoavs.png" alt="Aura Vital Star" />
          </a>
          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`nav-link ${link.href === '#home' ? 'active' : ''}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-book" id="nav-book-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Book Appointment
          </a>
          <button className="nav-hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className="mobile-menu" id="mobile-menu" aria-hidden="true">
        <button className="mobile-menu-close" id="mobile-close" aria-label="Close menu">&times;</button>
        <nav aria-label="Mobile navigation">
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.href + '-mobile'}>
                <a href={link.href} className="mobile-link">{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-book mobile-book">Book Appointment</a>
        </nav>
      </div>

      <section id="home" className="hero" aria-labelledby="hero-heading">
        <div className="hero-left">
          <p className="hero-eyebrow reveal-item">Where Wellness Meets Radiance</p>
          <h1 className="hero-heading reveal-item" id="hero-heading">
            <span className="hero-line">Feel Better.</span>
            <span className="hero-line">Move Better.</span>
          </h1>
          <p className="hero-script reveal-item">Live Better.</p>
          <p className="hero-desc reveal-item">A premium destination for beauty, relaxation,<br />wellness and personalized orthotic care.</p>
          <div className="hero-badges reveal-item">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.4C17.25 22.15 21 17.25 21 12V6L12 2z" stroke="#c49a3c" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#c49a3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div><strong>RMP</strong><span>Certified</span></div>
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><circle cx="12" cy="8" r="4" stroke="#c49a3c" strokeWidth="1.5"/><path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#c49a3c" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div><strong>Expert</strong><span>Care</span></div>
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="#c49a3c" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              <div><strong>Premium</strong><span>Experience</span></div>
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M12 22c0 0-8-4.5-8-11V5l8-3 8 3v6c0 6.5-8 11-8 11z" stroke="#c49a3c" strokeWidth="1.5" strokeLinejoin="round"/><path d="M7 12c1.5 2 3 3 5 3s3.5-1 5-3" stroke="#c49a3c" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div><strong>Safe &amp;</strong><span>Hygienic</span></div>
            </div>
          </div>
          <div className="hero-ctas reveal-item">
            <a href="#about" className="btn-primary" id="hero-explore-btn">
              <span>Explore AVS</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="btn-secondary" id="hero-book-btn">
              <span>Book an Appointment</span>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-slider" id="hero-slider">
            {heroSlides.map((slide, idx) => (
              <div
                key={slide.label}
                className={`hero-slide ${idx === 0 ? 'active' : ''} ${slide.className || ''}`}
                data-label={slide.label}
                onMouseMove={slide.brand ? handleBrandWave : undefined}
                onMouseLeave={slide.brand ? resetBrandWave : undefined}
              >
                <img src={slide.image} alt={slide.alt} />
                {slide.brand ? (
                  <div className="hero-brand-emblem-wrap">
                    <div className="hero-brand-glow"></div>
                    <img className="hero-brand-logo-img" src="/logoavs.png" alt="Aura Vital Star Logo" />
                  </div>
                ) : (
                  <div className="slide-info-panel">
                    <h2 className="slide-title" dangerouslySetInnerHTML={{__html: slide.title.replace(/\n/g, '<br>')}} />
                    <div className="slide-divider"></div>
                    <p className="slide-sub" dangerouslySetInnerHTML={{__html: slide.subtitle.replace(/\n/g, '<br>')}}></p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hero-dots" id="hero-dots">
            {heroSlides.map((slide, idx) => (
              <button key={slide.label + '-dot'} className={`hero-dot ${idx === 0 ? 'active' : ''}`} data-idx={idx} aria-label={slide.label}></button>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="why-avs" aria-labelledby="why-heading">
        <div className="container">
          <p className="section-eyebrow reveal-up">Experience the Difference</p>
          <h2 className="why-heading reveal-up" id="why-heading">Why Choose AVS?</h2>
          <div className="why-divider reveal-up">
            <svg viewBox="0 0 80 14" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="14">
              <line x1="0" y1="7" x2="30" y2="7" stroke="#c49a3c" strokeWidth="1"/>
              <circle cx="40" cy="7" r="4" stroke="#c49a3c" strokeWidth="1.2"/>
              <line x1="50" y1="7" x2="80" y2="7" stroke="#c49a3c" strokeWidth="1"/>
            </svg>
          </div>
          <div className="why-pillars">
            {whyPillars.map((pillar) => (
              <div className="why-pillar reveal-up" key={pillar.title}>
                <div className="why-icon"><Icon name={pillar.icon} width={48} height={48} /></div>
                <h3 className="why-title">{pillar.title}</h3>
                <p className="why-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="salon" className="services-section" aria-labelledby="services-heading">
        <div className="container">
          <h2 className="services-heading reveal-up" id="services-heading">Our Services</h2>
        </div>
        <div className="services-carousel-wrap">
          <button className="svc-arrow svc-prev" id="svc-prev" aria-label="Previous service">&#8249;</button>
          <div className="services-carousel" id="services-carousel">
            {services.map((service) => (
              <div className="svc-card" key={service.title} id={service.title === 'Orthotics & Compression Socks' ? 'orthotics' : undefined}>
                <div className="svc-card-img">
                  <img src={service.image} alt={service.title} />
                  <div className="svc-card-icon"><Icon name={service.icon} /></div>
                </div>
                <div className="svc-card-body">
                  <h3 className="svc-name">{service.title}</h3>
                  <p className="svc-desc">{service.desc}</p>
                  <a href="#contact" className="svc-learn-btn">Learn More <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></a>
                </div>
              </div>
            ))}
          </div>
          <button className="svc-arrow svc-next" id="svc-next" aria-label="Next service">&#8250;</button>
        </div>
      </section>

      <section className="locations-section" id="packages" aria-labelledby="locations-heading">
        <h2 className="locations-heading reveal-up" id="locations-heading">Two Locations. One Promise.</h2>
        <div className="locations-grid">
          <div className="location-card reveal-up">
            <div className="location-pin">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#c49a3c"/><circle cx="12" cy="9" r="2.5" fill="#fff"/></svg>
              Brampton
            </div>
            <address className="location-addr">157 Queen Street West,<br />Brampton, ON L6Y 1P9</address>
            <a href="https://maps.google.com/?q=157+Queen+Street+West+Brampton+ON" target="_blank" rel="noopener noreferrer" className="location-btn" id="loc-directions-btn">Directions</a>
          </div>

          <div className="location-center reveal-up">
            <div className="location-center-img">
              <img src="/promise_bg.jpg" alt="Aura Vital Star Rejuvenation Centre" />
              <div className="location-center-overlay"></div>
              <div className="location-lotus-badge">
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <circle cx="30" cy="30" r="28" stroke="#c49a3c" strokeWidth="1.2"/>
                  <path d="M30 16 C30 16 22 22 22 29 C22 33 25 36 30 37 C35 36 38 33 38 29 C38 22 30 16 30 16Z" fill="#c49a3c" opacity="0.8"/>
                  <path d="M22 22 C18 20 15 22 14 26 C15 30 18 32 22 32" stroke="#c49a3c" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                  <path d="M38 22 C42 20 45 22 46 26 C45 30 42 32 38 32" stroke="#c49a3c" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="location-card reveal-up">
            <div className="location-pin">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#c49a3c"/><circle cx="12" cy="9" r="2.5" fill="#fff"/></svg>
              Mississauga
            </div>
            <p className="location-coming">Coming Soon</p>
            <a href="#contact" className="location-btn location-btn-outline" id="loc-learn-btn">Learn More</a>
          </div>
        </div>
      </section>

      <section className="avs-promise" aria-labelledby="promise-heading">
        <div className="promise-bg" style={{ backgroundImage: "url('/promise_bg.jpg')" }}></div>
        <div className="promise-overlay-dark"></div>
        <div className="promise-content">
          <div className="promise-text">
            <p className="section-eyebrow section-eyebrow--light reveal-up">The AVS Promise</p>
            <h2 className="promise-heading reveal-up" id="promise-heading">Your Wellness Is Our Priority.</h2>
            <p className="promise-body reveal-up">Experience the perfect blend of luxury, care and personalized solutions designed to help you look, feel and move better every day.</p>
            <a href="#contact" className="btn-primary btn-gold reveal-up" id="promise-book-btn">
              <span>Book Your Appointment</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div className="promise-img-side">
            <img src="/brand_editorial.jpg" alt="Wellness at Aura Vital Star" />
          </div>
        </div>
      </section>

      <section className="testimonials" aria-labelledby="testimonials-heading">
        <div className="container">
          <h2 className="testimonials-heading reveal-up" id="testimonials-heading">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div className="t-card reveal-up" key={testimonial.author}>
                <div className="t-quote-mark">&ldquo;</div>
                <div className="t-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="t-quote">"{testimonial.quote}"</p>
                <p className="t-name">&ndash; {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="t-dots-row">
            <span className="t-dot-sm active"></span>
            <span className="t-dot-sm"></span>
            <span className="t-dot-sm"></span>
          </div>
        </div>
      </section>

      <section id="blog" className="footer-cta" aria-labelledby="cta-heading">
        <div className="footer-cta-inner">
          <div className="footer-cta-text">
            <h2 className="footer-cta-heading" id="cta-heading">Your Wellness Journey<br />Starts Here.</h2>
            <p className="footer-cta-sub">Discover a more personalized approach to wellness.</p>
          </div>
          <div className="footer-cta-form-wrap">
            <form className="cta-form" id="cta-form">
              <div className="cta-inputs-row">
                <input type="text" className="cta-input" id="cta-name" placeholder="Your Name" autoComplete="name" />
                <input type="tel" className="cta-input" id="cta-phone" placeholder="Phone Number" autoComplete="tel" />
              </div>
              <button type="submit" className="btn-book-cta" id="cta-submit-btn">
                <span>Book an Appointment</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </form>
            <p className="cta-phone-line">or call us at <a href="tel:+16479875451">+1 647-987-5451</a></p>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-inner container">
          <div className="footer-top">
            <div className="footer-brand">
              <img className="footer-logo" src="/logoavs.png" alt="Aura Vital Star logo" />
              <p className="footer-tagline">Where Wellness Meets Radiance</p>
              <a href="https://instagram.com/AuraVitalStar" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                @AuraVitalStar
              </a>
            </div>
            <div className="footer-nav-group">
              <h4>Navigate</h4>
              <ul role="list">
                <li><a href="#salon">Salon &amp; Wellness</a></li>
                <li><a href="#orthotics">Orthotics</a></li>
                <li><a href="#about">About AVS</a></li>
                <li><a href="#packages">Packages</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-contact-group">
              <h4>Contact</h4>
              <address>
                <p>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <a href="tel:+16479875451">+1 647-987-5451</a>
                </p>
                <p>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
                  157 Queen Street West,<br />Brampton, ON L6Y 1P9
                </p>
                <p>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <a href="mailto:info@auravitalstar.ca">info@auravitalstar.ca</a>
                </p>
                <p>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="1.5"/></svg>
                  <a href="http://www.auravitalstar.ca" target="_blank" rel="noopener noreferrer">www.auravitalstar.ca</a>
                </p>
              </address>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <p className="footer-copy">&#169; Aura Vital Star Rejuvenation Centre Inc. All Rights Reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span> &middot; </span>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
