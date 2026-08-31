import React, { useEffect, useState, useRef } from 'react';

// Counter component for Section 5 stats
function StatCounter({ target, suffix = '', duration = 2000, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const isFloat = target.toString().includes('.');
    const numericTarget = parseFloat(target);
    const steps = 60;
    const increment = numericTarget / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutPage({ onBookClick }) {
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* ===================================================
          SECTION 1 — ABOUT HERO
          =================================================== */}
      <section className="about-hero" id="about-hero" aria-label="About Aura Vital Star">
        <div className="about-hero-bg-accent" aria-hidden="true">
          <div className="about-glow-orb"></div>
        </div>

        <div className="about-container">
          <div className="about-hero-grid">
            {/* Left Content */}
            <div className="about-hero-content">
              <div className="about-eyebrow-row">
                <span className="about-eyebrow-star" aria-hidden="true">&#10022;</span>
                <span className="about-eyebrow">ABOUT AURA VITAL STAR</span>
              </div>

              <h1 className="about-hero-headline">
                Rooted in Care.<br />
                <span className="gold-text">Driven by Wellness.</span>
              </h1>

              <div className="about-hero-divider" aria-hidden="true"></div>

              <p className="about-hero-desc">
                At Aura Vital Star, we believe true beauty and wellness come from balance &mdash; of body, mind, and soul. Our mission is to provide a sanctuary where advanced care meets personal attention, helping you look good, feel great, and live well.
              </p>

              <div className="about-hero-features">
                <div className="about-feature-item">
                  <span className="about-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                      <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" stroke="#B9975B" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="about-feature-text">EXPERT PROFESSIONALS</span>
                </div>

                <div className="about-feature-sep" aria-hidden="true">&bull;</div>

                <div className="about-feature-item">
                  <span className="about-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#B9975B" strokeWidth="1.5"/>
                      <path d="M12 7v5l3 3" stroke="#B9975B" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="about-feature-text">PREMIUM PRODUCTS</span>
                </div>

                <div className="about-feature-sep" aria-hidden="true">&bull;</div>

                <div className="about-feature-item">
                  <span className="about-feature-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#B9975B" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </span>
                  <span className="about-feature-text">PERSONALIZED CARE</span>
                </div>
              </div>
            </div>

            {/* Right Cinematic Hero Image */}
            <div className="about-hero-media">
              <div className="about-hero-image-frame">
                <img
                  src="/hero_brand_bg.jpg"
                  alt="Aura Vital Star luxury wellness sanctuary interior"
                  className="about-hero-img"
                />
                <div className="about-hero-overlay" aria-hidden="true"></div>
                <div className="about-hero-border-accent" aria-hidden="true"></div>

                {/* Corner Botanical Line-art */}
                <div className="about-botanical-corner" aria-hidden="true">
                  <svg viewBox="0 0 100 100" width="85" height="85" fill="none">
                    <path d="M10 90 Q30 50 85 15" stroke="#B9975B" strokeWidth="1.2" opacity="0.65"/>
                    <path d="M45 40 Q60 30 75 35 Q65 50 45 40" stroke="#B9975B" strokeWidth="1" opacity="0.6"/>
                    <path d="M28 60 Q42 52 55 58 Q46 72 28 60" stroke="#B9975B" strokeWidth="1" opacity="0.6"/>
                    <path d="M18 78 Q30 72 38 80 Q28 90 18 78" stroke="#B9975B" strokeWidth="1" opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 2 — OUR STORY
          =================================================== */}
      <section className="about-story" id="our-story" aria-label="Our Story">
        <div className="about-container">
          <div className="about-story-grid">
            {/* Left Image */}
            <div className="about-story-media">
              <div className="about-story-image-wrap">
                <img
                  src="/hero_wellness.jpg"
                  alt="Aura Vital Star wellness story"
                  className="about-story-img"
                />
                <div className="about-story-img-border" aria-hidden="true"></div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="about-story-content">
              <div className="about-eyebrow-row">
                <span className="about-eyebrow-dash" aria-hidden="true"></span>
                <span className="about-eyebrow">OUR STORY</span>
              </div>

              <h2 className="about-story-headline">
                A Sanctuary for<br />
                Beauty, Wellness &amp; You
              </h2>

              <div className="about-gold-line" aria-hidden="true"></div>

              <p className="about-story-text">
                Aura Vital Star was created with a simple vision &mdash; to bring together the finest beauty, relaxation, and therapeutic services under one roof.
              </p>
              <p className="about-story-text">
                From premium salon treatments to registered massage therapy, every service is designed to rejuvenate your body, refresh your mind, and elevate your natural radiance.
              </p>

              {/* Handwritten Signature */}
              <div className="about-story-signature">
                <span className="about-sig-script">Aura Vital Star</span>
              </div>

              {/* Three Refined Highlights */}
              <div className="about-story-highlights">
                <div className="about-highlight-card">
                  <div className="highlight-icon-wrap" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#B9975B"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#B9975B" opacity="0.3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="highlight-title">A Holistic Approach</h3>
                    <p className="highlight-desc">Care for beauty and wellness</p>
                  </div>
                </div>

                <div className="highlight-gold-divider" aria-hidden="true"></div>

                <div className="about-highlight-card">
                  <div className="highlight-icon-wrap" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                      <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5l5 4.5v6H7v-6l5-4.5z" fill="#B9975B"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="highlight-title">Advanced Techniques</h3>
                    <p className="highlight-desc">For lasting results</p>
                  </div>
                </div>

                <div className="highlight-gold-divider" aria-hidden="true"></div>

                <div className="about-highlight-card">
                  <div className="highlight-icon-wrap" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7L12 16.8 5.7 21l2.3-7-6-4.6h7.6z" stroke="#B9975B" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="highlight-title">A Luxurious Experience</h3>
                    <p className="highlight-desc">The quality you deserve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 3 — OUR PHILOSOPHY
          =================================================== */}
      <section className="about-philosophy" id="philosophy" aria-label="Our Philosophy">
        <div className="about-container">
          <div className="philosophy-header">
            <div className="about-eyebrow-row justify-center">
              <span className="about-eyebrow-star" aria-hidden="true">&#10022;</span>
              <span className="about-eyebrow">OUR PHILOSOPHY</span>
              <span className="about-eyebrow-star" aria-hidden="true">&#10022;</span>
            </div>

            <h2 className="philosophy-headline">
              Care that goes beyond<br />the treatment.
            </h2>

            <p className="philosophy-subtext">
              Every experience at Aura Vital Star is thoughtfully designed around you &mdash; combining professional expertise, premium products and genuine personal care.
            </p>
          </div>

          <div className="philosophy-pillars-grid">
            {/* Pillar 01 */}
            <div className="philosophy-pillar-card">
              <div className="pillar-top-row">
                <span className="pillar-big-num">01</span>
                <span className="pillar-line" aria-hidden="true"></span>
              </div>
              <h3 className="pillar-heading">PERSONALIZED CARE</h3>
              <p className="pillar-body">
                Care thoughtfully tailored to every individual.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="philosophy-pillar-card">
              <div className="pillar-top-row">
                <span className="pillar-big-num">02</span>
                <span className="pillar-line" aria-hidden="true"></span>
              </div>
              <h3 className="pillar-heading">PROFESSIONAL EXCELLENCE</h3>
              <p className="pillar-body">
                Experienced professionals who care about every detail.
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="philosophy-pillar-card">
              <div className="pillar-top-row">
                <span className="pillar-big-num">03</span>
                <span className="pillar-line" aria-hidden="true"></span>
              </div>
              <h3 className="pillar-heading">WELLNESS FROM WITHIN</h3>
              <p className="pillar-body">
                A balanced approach to beauty, relaxation and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 4 — OUR MISSION + CORE VALUES + WHY CHOOSE US
          =================================================== */}
      <section className="about-mission-values" id="mission-values" aria-label="Our Mission and Values">
        <div className="about-container">
          <div className="mission-values-grid">
            {/* Column 1: OUR MISSION */}
            <div className="mv-column mv-mission">
              <span className="mv-col-eyebrow">OUR MISSION</span>
              <div className="mv-gold-line" aria-hidden="true"></div>
              <blockquote className="mv-mission-quote">
                &ldquo;To deliver premium salon and registered massage therapy services in a welcoming and luxurious environment where every client feels valued, refreshed and renewed.&rdquo;
              </blockquote>
            </div>

            {/* Column 2: OUR CORE VALUES */}
            <div className="mv-column mv-values">
              <span className="mv-col-eyebrow">OUR CORE VALUES</span>
              <div className="mv-gold-line" aria-hidden="true"></div>
              <div className="mv-values-list">
                <div className="mv-value-item">
                  <h4 className="value-name">COMPASSION</h4>
                  <p className="value-desc">We care deeply for every individual.</p>
                </div>
                <div className="mv-value-item">
                  <h4 className="value-name">INTEGRITY</h4>
                  <p className="value-desc">Honest. Transparent. Always.</p>
                </div>
                <div className="mv-value-item">
                  <h4 className="value-name">EXCELLENCE</h4>
                  <p className="value-desc">Highest standards in everything we do.</p>
                </div>
                <div className="mv-value-item">
                  <h4 className="value-name">WELLNESS</h4>
                  <p className="value-desc">Mind, Body &amp; Soul in perfect harmony.</p>
                </div>
              </div>
            </div>

            {/* Column 3: WHY CHOOSE US? */}
            <div className="mv-column mv-why">
              <span className="mv-col-eyebrow">WHY CHOOSE US?</span>
              <div className="mv-gold-line" aria-hidden="true"></div>
              <ul className="mv-checklist" role="list">
                <li>
                  <span className="check-mark" aria-hidden="true">&#10003;</span>
                  <span>Licensed &amp; Experienced Professionals</span>
                </li>
                <li>
                  <span className="check-mark" aria-hidden="true">&#10003;</span>
                  <span>Personalized Care, Every Time</span>
                </li>
                <li>
                  <span className="check-mark" aria-hidden="true">&#10003;</span>
                  <span>Premium Products &amp; Advanced Techniques</span>
                </li>
                <li>
                  <span className="check-mark" aria-hidden="true">&#10003;</span>
                  <span>Clean, Safe &amp; Relaxing Environment</span>
                </li>
                <li>
                  <span className="check-mark" aria-hidden="true">&#10003;</span>
                  <span>Focus on Your Total Well-Being</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 5 — EXPERIENCE / OUR NUMBERS
          =================================================== */}
      <section className="about-experience-stats" ref={statsRef} id="experience" aria-label="The Aura Vital Star Experience">
        <div className="about-container">
          <h2 className="stats-main-heading">THE AURA VITAL STAR EXPERIENCE</h2>
          <div className="stats-gold-bar" aria-hidden="true"></div>

          <div className="stats-horizontal-strip">
            <div className="stat-box">
              <div className="stat-num">
                <StatCounter target="1000" suffix="+" inView={statsInView} />
              </div>
              <div className="stat-label">Happy Clients</div>
            </div>

            <div className="stat-vertical-sep" aria-hidden="true"></div>

            <div className="stat-box">
              <div className="stat-num">
                <StatCounter target="5000" suffix="+" inView={statsInView} />
              </div>
              <div className="stat-label">Services Delivered</div>
            </div>

            <div className="stat-vertical-sep" aria-hidden="true"></div>

            <div className="stat-box">
              <div className="stat-num">
                <StatCounter target="4.9" suffix="/5" inView={statsInView} />
              </div>
              <div className="stat-label">Client Satisfaction</div>
            </div>

            <div className="stat-vertical-sep" aria-hidden="true"></div>

            <div className="stat-box">
              <div className="stat-num">
                <StatCounter target="10" suffix="+" inView={statsInView} />
              </div>
              <div className="stat-label">Expert Therapists</div>
            </div>

            <div className="stat-vertical-sep" aria-hidden="true"></div>

            <div className="stat-box">
              <div className="stat-num stat-gold-word">
                <span>Premium</span>
              </div>
              <div className="stat-label">Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 6 — OUR SERVICES / COMPLETE CARE
          =================================================== */}
      <section className="about-complete-care" id="complete-care" aria-label="Complete Care Under One Roof">
        <div className="about-container">
          <div className="care-header">
            <div className="about-eyebrow-row justify-center">
              <span className="about-eyebrow-dash" aria-hidden="true"></span>
              <span className="about-eyebrow">COMPLETE CARE UNDER ONE ROOF</span>
              <span className="about-eyebrow-dash" aria-hidden="true"></span>
            </div>

            <h2 className="care-headline">
              Beauty. Relaxation.<br />Therapy. All for You.
            </h2>

            <p className="care-subtext">
              Whether it&rsquo;s a new look, deep relaxation, or therapeutic healing &mdash; we have the perfect service for you.
            </p>
          </div>

          <div className="care-grid-cards">
            {/* Card 1: Salon & Beauty */}
            <div className="care-card">
              <img src="/salon_bg.jpg" alt="Salon & Beauty" className="care-card-img" />
              <div className="care-card-overlay"></div>
              <div className="care-card-content">
                <h3 className="care-card-title">Salon &amp; Beauty</h3>
                <p className="care-card-desc">Elevate your hair and aesthetic glow</p>
                <span className="care-card-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>

            {/* Card 2: RMT & Massage */}
            <div className="care-card">
              <img src="/hero_massage.jpg" alt="RMT & Massage" className="care-card-img" />
              <div className="care-card-overlay"></div>
              <div className="care-card-content">
                <h3 className="care-card-title">RMT &amp; Massage</h3>
                <p className="care-card-desc">Registered therapy for deep pain relief and recovery</p>
                <span className="care-card-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>

            {/* Card 3: Skin & Facials */}
            <div className="care-card">
              <img src="/hero_facial.jpg" alt="Skin & Facials" className="care-card-img" />
              <div className="care-card-overlay"></div>
              <div className="care-card-content">
                <h3 className="care-card-title">Skin &amp; Facials</h3>
                <p className="care-card-desc">Customized facials for radiant, healthy skin</p>
                <span className="care-card-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>

            {/* Card 4: Nail Care */}
            <div className="care-card">
              <img src="/brand_editorial.jpg" alt="Nail Care" className="care-card-img" />
              <div className="care-card-overlay"></div>
              <div className="care-card-content">
                <h3 className="care-card-title">Nail Care</h3>
                <p className="care-card-desc">Pampering manicures, pedicures, and nail art</p>
                <span className="care-card-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>

            {/* Card 5: Waxing & Laser */}
            <div className="care-card">
              <img src="/hero_bg.jpg" alt="Waxing & Laser" className="care-card-img" />
              <div className="care-card-overlay"></div>
              <div className="care-card-content">
                <h3 className="care-card-title">Waxing &amp; Laser</h3>
                <p className="care-card-desc">Smooth, confident, lasting hair removal</p>
                <span className="care-card-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>

            {/* Card 6: Wellness Therapies */}
            <div className="care-card">
              <img src="/hero_wellness.jpg" alt="Wellness Therapies" className="care-card-img" />
              <div className="care-card-overlay"></div>
              <div className="care-card-content">
                <h3 className="care-card-title">Wellness Therapies</h3>
                <p className="care-card-desc">Holistic rituals that balance mind and body</p>
                <span className="care-card-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 7 — OUR EXPERT TEAM
          =================================================== */}
      <section className="about-team-section" id="expert-team" aria-label="Our Expert Team">
        <div className="about-container">
          <div className="team-header">
            <div className="about-eyebrow-row justify-center">
              <span className="about-eyebrow-star" aria-hidden="true">&#10022;</span>
              <span className="about-eyebrow">OUR EXPERT TEAM</span>
              <span className="about-eyebrow-star" aria-hidden="true">&#10022;</span>
            </div>

            <h2 className="team-headline">
              Passionate Professionals,<br />Dedicated to You
            </h2>

            <p className="team-subtext">
              Our team of licensed and experienced professionals is committed to providing you with the highest level of care and exceptional results.
            </p>
          </div>

          <div className="team-cards-grid">
            {/* Member 1 */}
            <div className="team-card">
              <div className="team-img-wrap">
                <img src="/brand_editorial.jpg" alt="Senior Stylist portrait" className="team-img" />
                <div className="team-img-gradient"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Elena Vance</h3>
                <span className="team-role">Senior Stylist</span>
                <p className="team-specialty">Hair Specialist &bull; Creative Color Master</p>
              </div>
            </div>

            {/* Member 2 */}
            <div className="team-card">
              <div className="team-img-wrap">
                <img src="/hero_massage.jpg" alt="RMT Therapist portrait" className="team-img" />
                <div className="team-img-gradient"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Marcus Reed</h3>
                <span className="team-role">RMT Therapist</span>
                <p className="team-specialty">Registered Massage &bull; Deep Tissue &amp; Recovery</p>
              </div>
            </div>

            {/* Member 3 */}
            <div className="team-card">
              <div className="team-img-wrap">
                <img src="/hero_facial.jpg" alt="Skin Expert portrait" className="team-img" />
                <div className="team-img-gradient"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Sophia Lin</h3>
                <span className="team-role">Skin Expert</span>
                <p className="team-specialty">Facial &amp; Skin Specialist &bull; Anti-Aging Expert</p>
              </div>
            </div>

            {/* Member 4 */}
            <div className="team-card">
              <div className="team-img-wrap">
                <img src="/hero_wellness.jpg" alt="Wellness Coach portrait" className="team-img" />
                <div className="team-img-gradient"></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">Aria Bennett</h3>
                <span className="team-role">Wellness Coach</span>
                <p className="team-specialty">Holistic Wellness &bull; Stress Reduction Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 8 — OUR AMBIENCE
          =================================================== */}
      <section className="about-ambience-section" id="ambience" aria-label="Our Ambience">
        <div className="about-container">
          <div className="ambience-header">
            <div className="about-eyebrow-row justify-center">
              <span className="about-eyebrow-dash" aria-hidden="true"></span>
              <span className="about-eyebrow">OUR AMBIENCE</span>
              <span className="about-eyebrow-dash" aria-hidden="true"></span>
            </div>

            <h2 className="ambience-headline">
              A Space Designed<br />for Your Escape
            </h2>

            <p className="ambience-subtext">
              Step into a world of calm, elegance and comfort. Every detail is curated to help you relax, unwind and feel your best.
            </p>
          </div>

          <div className="ambience-gallery-row">
            <div className="ambience-item">
              <img src="/promise_bg.jpg" alt="Reception lounge" className="ambience-img" />
              <div className="ambience-caption">
                <span className="amb-title">Reception Sanctuary</span>
              </div>
            </div>

            <div className="ambience-item">
              <img src="/salon_bg.jpg" alt="Luxury salon suite" className="ambience-img" />
              <div className="ambience-caption">
                <span className="amb-title">Salon Suite</span>
              </div>
            </div>

            <div className="ambience-item">
              <img src="/hero_massage.jpg" alt="Quiet massage room" className="ambience-img" />
              <div className="ambience-caption">
                <span className="amb-title">Massage Room</span>
              </div>
            </div>

            <div className="ambience-item">
              <img src="/hero_facial.jpg" alt="Facial treatment room" className="ambience-img" />
              <div className="ambience-caption">
                <span className="amb-title">Facial Room</span>
              </div>
            </div>

            <div className="ambience-item">
              <img src="/brand_editorial.jpg" alt="Apothecary and product area" className="ambience-img" />
              <div className="ambience-caption">
                <span className="amb-title">Product Sanctuary</span>
              </div>
            </div>
          </div>

          <div className="ambience-cta-wrap">
            <a href="#contact" onClick={onBookClick} className="ambience-tour-btn" id="ambience-tour-cta">
              <span>TAKE A TOUR</span>
              <span className="tour-arrow" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 9 — FINAL CINEMATIC CTA
          =================================================== */}
      <section className="about-final-cta" id="final-cta" aria-label="Book Your Appointment">
        <div className="final-cta-bg" style={{ backgroundImage: "url('/promise_bg.jpg')" }}></div>
        <div className="final-cta-overlay"></div>

        <div className="about-container">
          <div className="final-cta-content">
            <span className="final-cta-eyebrow">YOUR WELLNESS JOURNEY STARTS HERE</span>
            <h2 className="final-cta-headline">Book Your Appointment Today</h2>
            <p className="final-cta-supporting">
              Take a moment for yourself.<br />You deserve exceptional care.
            </p>
            <a
              href="#contact"
              onClick={onBookClick}
              className="final-cta-btn"
              id="about-book-appointment-btn"
            >
              <span>BOOK APPOINTMENT</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
