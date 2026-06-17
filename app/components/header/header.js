'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    // children: [
    //   { label: 'Our Story', href: '/about/story' },
    //   { label: 'Team', href: '/about/team' },
    //   { label: 'Vision & Mission', href: '/about/vision' },
    // ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'APFC Panels', href: '/products/apfc-panels' },
  { label: 'Distribution Panels', href: '/products/distribution-panels' },
  { label: 'Drive Panels', href: '/products/Drive-panels' },
  { label: 'PLC Panels', href: '/products/plc-panels' },
  { label: 'PLC & SCADA', href: '/products/plc-&-scada' },
    ],
  },
//   { label: 'Services', href: '/services' },
//   { label: 'Projects', href: '/projects' },
  { label: 'Clients', href: '/clients' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleMobileExpand = (label) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* ── Top utility bar ── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarLeft}>
            <a href="tel:+919991298974" className={styles.topBarLink}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              +91 9991298974
            </a>
            <a href="mailto:info@matrixpower.com" className={styles.topBarLink}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@matrixpower.com
            </a>
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.topBarTag}>ISO 9001:2015 Certified</span>
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
            </div>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className={styles.mainBar}>
        <div className={styles.mainBarInner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <Image src="/images/Matrix-logo.png" width={210} height={110} alt='Matrix logo'/>
            </div>
            
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className={`${styles.navItemWrap} ${activeDropdown === link.label ? styles.navItemActive : ''}`}
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={styles.navLink}
                    aria-expanded={activeDropdown === link.label}
                    aria-haspopup="true"
                    onClick={() => handleDropdown(link.label)}
                  >
                    {link.label}
                    <svg className={styles.chevron} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>
                  <div className={styles.dropdown} role="menu">
                    {link.children.map((child) => (
                      <Link key={child.label} href={child.href} className={styles.dropdownItem} role="menuitem">
                        <span className={styles.dropdownDot} aria-hidden="true" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className={styles.ctaWrap}>
            <a href="tel:+919876543210" className={styles.callChip}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18H5a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              Call Now
            </a>
            <Link href="/contact" className={styles.ctaBtn}>
              Get a Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className={styles.mobileGroup}>
                <button
                  className={styles.mobileLink}
                  onClick={() => handleMobileExpand(link.label)}
                  aria-expanded={mobileExpanded === link.label}
                >
                  {link.label}
                  <svg
                    className={`${styles.mobileChevron} ${mobileExpanded === link.label ? styles.mobileChevronOpen : ''}`}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </button>
                {mobileExpanded === link.label && (
                  <div className={styles.mobileSubMenu}>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={styles.mobileSubLink}
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className={styles.mobileCta}>
            <Link href="/contact" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}