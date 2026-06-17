'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Herocarousel.module.css';

const SLIDES = [
  {
    id: 1,
    eyebrow: 'Engineered for Industry',
    title: 'Powering Industries with Reliable Electrical Control Panels',
    desc: 'From APFC Panels and Distribution Panels to Drive Panels, PLC Panels, and PLC & SCADA Automation Systems, Matrix Power designs and manufactures robust electrical solutions that ensure efficiency, safety, and uninterrupted operations across diverse industries.',
    ctaLabel: 'Explore Products',
    ctaHref: '/products',
    secondaryLabel: 'Get a Quote',
    secondaryHref: '/contact',
    image: '/images/slide-1.png',
  },
  {
    id: 2,
    eyebrow: 'Since 2015',
    title: 'Delivering Quality Electrical Panel Solutions Since 2015',
    desc: 'With years of expertise in panel manufacturing and automation, Matrix Power provides APFC, Distribution, Drive, PLC, and PLC & SCADA Panels engineered to meet stringent industry standards for performance, reliability, and safety.',
    ctaLabel: 'Our Facility',
    ctaHref: '/about',
    secondaryLabel: 'View Gallery',
    secondaryHref: '/gallery',
    image: '/images/slide-2.png',
  },
  {
    id: 3,
    eyebrow: 'Pan-India Service',
    title: 'Complete Support from Design to Commissioning',
    desc: 'Our experienced engineering team offers end-to-end services including system design, panel fabrication, programming, testing, installation, commissioning, and after-sales support, delivering dependable solutions to customers across India.',
    ctaLabel: 'Our Services',
    ctaHref: '/services',
    secondaryLabel: 'Contact Us',
    secondaryHref: '/contact',
    image: '/images/Slide-3.png',
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setActive(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [active, paused]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // touch swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
  };

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slideStack}>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${i === active ? styles.slideActive : ''}`}
            aria-hidden={i !== active}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
          >
            <div className={styles.slideBg}>
              <Image
                src={slide.image}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className={styles.slideImg}
              />
              <div className={styles.slideOverlay} aria-hidden="true" />
            </div>

            <div className={styles.slideContent}>
              <span className={styles.eyebrow}>{slide.eyebrow}</span>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.desc}>{slide.desc}</p>
              <div className={styles.actions}>
                <Link href={slide.ctaHref} className={styles.ctaPrimary}>
                  {slide.ctaLabel}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <Link href={slide.secondaryHref} className={styles.ctaSecondary}>
                  {slide.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className={styles.arrow} style={{ left: '1.25rem' }} onClick={prev} aria-label="Previous slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className={styles.arrow} style={{ right: '1.25rem' }} onClick={next} aria-label="Next slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Dots + progress */}
      <div className={styles.controls}>
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
          >
            {i === active && (
              <span
                key={`${active}-${paused}`}
                className={styles.dotProgress}
                style={{
                  animationPlayState: paused ? 'paused' : 'running',
                  animationDuration: `${AUTOPLAY_MS}ms`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className={styles.counter}>
        <span className={styles.counterActive}>{String(active + 1).padStart(2, '0')}</span>
        <span className={styles.counterDivider}>/</span>
        <span>{String(SLIDES.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}