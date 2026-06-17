'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

const PRODUCTS = [
  { label: 'APFC Panels', href: '/products/apfc-panels' },
  { label: 'Distribution Panels', href: '/products/distribution-panels' },
  { label: 'Drive Panels', href: '/products/Drive-panels' },
  { label: 'PLC Panels', href: '/products/plc-panels' },
  { label: 'PLC & SCADA', href: '/products/plc-&-scada' },
  
];

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
//   { label: 'Services', href: '/services' },
//   { label: 'Projects', href: '/projects' },
  { label: 'Clients', href: '/clients' },
  { label: 'Gallery', href: '/gallery' },
//   { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
];

const CERTIFICATIONS = [
  'ISO 9001:2015 Certified',
  'BIS Approved',
  'MSME Registered',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ── Orange top accent bar ── */}
      <div className={styles.accentBar} />

      {/* ── CTA strip ── */}
      <div className={styles.ctaStrip}>
        <div className={styles.ctaStripInner} data-aos="fade-up">
          <div className={styles.ctaStripText}>
            <h2 className={styles.ctaHeading}>
              Ready to power your project?
            </h2>
            <p className={styles.ctaSubtext}>
              Get a customised quote for your electrical control panel requirements — delivered pan-India.
            </p>
          </div>
          <div className={styles.ctaStripActions}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Get a Free Quote
            </Link>
            <a href="tel:+919991298974" className={styles.ctaSecondary}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              +91 9991298974
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className={styles.main}>
        <div className={styles.mainInner}>

          {/* Col 1 — Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>              
                <Image src="/images/matrix-logo.png" width={190} height={90} alt='Matrix logo'/>
            </Link>
            <p className={styles.brandDesc}>
Established in the year 2011 at Sonipat, Haryana.We “Matrix Power & Automation " engaged as the foremost Manufacturer and Service Provider of Control Panel, Drive Panel, Chiller Panel and many more.
            </p>
            <div className={styles.certifications}>
              {CERTIFICATIONS.map((c) => (
                <span key={c} className={styles.cert}>{c}</span>
              ))}
            </div>
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Products */}
          <div className={styles.linkCol}>
            <h3 className={styles.colHeading}>
              <span className={styles.colHeadingAccent} />
              Our Products
            </h3>
            <ul className={styles.linkList}>
              {PRODUCTS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.footerLink}>
                    <svg className={styles.linkArrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick links */}
          <div className={styles.linkCol}>
            <h3 className={styles.colHeading}>
              <span className={styles.colHeadingAccent} />
              Quick Links
            </h3>
            <ul className={styles.linkList}>
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.footerLink}>
                    <svg className={styles.linkArrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className={styles.contactCol}>
            <h3 className={styles.colHeading}>
              <span className={styles.colHeadingAccent} />
              Get in Touch
            </h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIconWrap} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className={styles.contactText}>
                  Plot No. 84, HSIIDC. Rai, Sonepat - 131029
                </span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIconWrap} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                  </svg>
                </span>
                <div>
                  <a href="tel:+919991298974" className={styles.contactLink}>+91 9991298974</a>
                  
                </div>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIconWrap} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:info@matrixpower.com" className={styles.contactLink}>
                  info@matrixpower.com
                </a>
              </li>
              {/* <li className={styles.contactItem}>
                <span className={styles.contactIconWrap} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className={styles.contactText}>
                  Mon – Sat: 9:00 AM – 6:30 PM
                </span>
              </li> */}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Matrix Power. All rights reserved.
          </p>
          {/* <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
            <span className={styles.bottomDivider} aria-hidden="true">·</span>
            <Link href="/terms" className={styles.bottomLink}>Terms of Use</Link>
            <span className={styles.bottomDivider} aria-hidden="true">·</span>
            <Link href="/sitemap" className={styles.bottomLink}>Sitemap</Link>
          </div> */}
          <p className={styles.madeWith}>
            Designed &amp; Developed By <Link href='https://www.keywordindia.com/' target="_blank" className={styles.bottomLink}>Keyword India Network Pvt. Ltd.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}