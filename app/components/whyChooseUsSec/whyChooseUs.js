'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './whyChooseUs.module.css';

const REASONS = [
  {
    icon: 'certificate',
    title: 'ISO 9001:2015 certified',
    desc: 'Every panel is manufactured under internationally recognised quality management standards.',
  },
  {
    icon: 'factory',
    title: 'In-house manufacturing',
    desc: 'Design, fabrication, wiring, and testing all happen under one roof, with no third-party handoffs.',
  },
  {
    icon: 'shield',
    title: 'Rigorous quality testing',
    desc: 'Every panel undergoes routine and type testing before dispatch, ensuring zero-defect delivery.',
  },
  {
    icon: 'clock',
    title: 'On-time project delivery',
    desc: 'Structured production planning means your panels arrive on schedule, every time.',
  },
  {
    icon: 'tools',
    title: 'Custom engineering',
    desc: 'Panels are designed around your exact load, space, and site requirements, not a generic template.',
  },
  {
    icon: 'headset',
    title: 'Lifetime technical support',
    desc: 'Our engineers remain on call for commissioning support, troubleshooting, and upgrades.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className={styles.inner}>
        <div className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/53023.jpg"
              alt="Engineer inspecting a Matrix Power control panel"
              fill
              sizes="(max-width: 1024px) 90vw, 460px"
              className={styles.img}
            />
          </div>

          <div className={styles.floatingCard}>
            <span className={styles.floatingIconWrap} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5-4.5-1-8-4.5-8-9.5V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <div>
              <span className={styles.floatingValue}>Zero-defect</span>
              <span className={styles.floatingLabel}>Quality assurance</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Why choose us</span>
          <h2 id="why-heading" className={styles.heading}>
            Built on precision, backed by experience
          </h2>
          <p className={styles.lead}>
            When your operations depend on reliable power control, you need a manufacturing partner who treats every panel as mission-critical. That&rsquo;s the standard we hold ourselves to.
          </p>

          <div className={styles.reasonsGrid}>
            {REASONS.map((reason) => (
              <div key={reason.title} className={styles.reasonCard}>
                <span className={styles.reasonIcon} aria-hidden="true">
                  <ReasonIcon name={reason.icon} />
                </span>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDesc}>{reason.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Start Your Project
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonIcon({ name }) {
  const icons = {
    certificate: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="5" />
        <path d="M9 12.5L7 21l5-3 5 3-2-8.5" />
      </svg>
    ),
    factory: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21V10l5 3v-3l5 3v-3l5 3v8H3z" />
        <path d="M3 21h18" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5-4.5-1-8-4.5-8-9.5V7l8-4z" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
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