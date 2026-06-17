'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

const STATS = [
  { value: '15+', label: 'Years of experience' },
  { value: '500+', label: 'Panels delivered' },
  { value: '150+', label: 'Happy clients' },
  { value: '99%', label: 'On-time delivery' },
];

const HIGHLIGHTS = [
  {
    icon: 'shield-check',
    title: 'ISO 9001:2015 certified',
    desc: 'Every panel is built under internationally recognised quality standards, tested before it leaves our facility.',
  },
  {
    icon: 'tools',
    title: 'In-house design & fabrication',
    desc: 'From schematic design to busbar fabrication and wiring, the entire process happens under one roof.',
  },
  {
    icon: 'truck-delivery',
    title: 'Pan-India delivery',
    desc: 'Our logistics network ensures panels reach project sites across India, on schedule and intact.',
  },
  {
    icon: 'headset',
    title: 'Dedicated after-sales support',
    desc: 'Our engineering team stays involved post-installation, with rapid response for service and troubleshooting.',
  },
];

export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-heading">
      <div className={styles.inner}>
        {/* ── Left: image collage ── */}
        <div className={styles.visual}>
          <div className={styles.imageMain}>
            <Image
              src="/images/factory-main.png"
              alt="Matrix Power manufacturing facility floor"
              fill
              sizes="(max-width: 900px) 90vw, 480px"
              className={styles.img}
            />
          </div>
          <div className={styles.imageSecondary}>
            <Image
              src="/images/about2.png"
              alt="Close-up of an assembled electrical control panel"
              fill
              sizes="(max-width: 900px) 60vw, 260px"
              className={styles.img}
            />
          </div>
          <div className={styles.experienceBadge}>
            <span className={styles.badgeNumber}>20+</span>
            <span className={styles.badgeLabel}>
              Years of<br />excellence
            </span>
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>About Matrix Power</span>
          <h2 id="about-heading" className={styles.heading}>
            Engineering reliable power control, panel by panel
          </h2>
          <p className={styles.lead}>
            Matrix Power & Automation is specialized in Industrial Automation & Electrical Solutions. Founded in the year 2011, we, are counted amongst the most trusted companies of Haryana, India. Since our inception, we have been working as a credible Manufacturer and Supplier of electrical goods.

          </p>
          <p className={styles.body}>
            We offer wide range of Cost Effective Services (Repairing, AMC, and Testing) in the field of Electrical Engineering, Plant Intelligence and Industrial Automation. The Material used in the manufacturing of LT panel is of ortimum quality that ensures high durability and resistivity to various factors supporting corrosion. Morever, the use of advanced techniques in the manufacturing of the LT panel makes them a perfect match to the national as well as international standards.
          </p>

          {/* Highlights grid */}
          <div className={styles.highlights}>
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className={styles.highlightItem}>
                <span className={styles.highlightIcon} aria-hidden="true">
                  <HighlightIcon name={item.icon} />
                </span>
                <div>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/about" className={styles.ctaPrimary}>
              Learn More About Us
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className={styles.statsStrip}>
        <div className={styles.statsInner}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
              {i < STATS.length - 1 && <span className={styles.statDivider} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightIcon({ name }) {
  const icons = {
    'shield-check': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5-4.5-1-8-4.5-8-9.5V7l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    'truck-delivery': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="6" width="13" height="11" rx="1" />
        <path d="M14 9h4l3 3v5h-7z" />
        <circle cx="5.5" cy="18.5" r="1.8" />
        <circle cx="16.5" cy="18.5" r="1.8" />
      </svg>
    ),
    headset: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 13a9 9 0 0118 0" />
        <path d="M21 13v4a2 2 0 01-2 2h-1" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" />
      </svg>
    ),
  };
  return icons[name] || null;
}