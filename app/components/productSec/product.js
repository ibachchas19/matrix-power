'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product.module.css';

const PRODUCTS = [
  {
    name: 'APFC Panels',
    slug: '#',
    image: '/images/products/APFC.png',
    desc: 'Automatic power factor correction panels that optimise reactive power and reduce electricity costs.',
    icon: 'apfc',
  },
  {
    name: 'Distribution Panels',
    slug: '#',
    image: '/images/products/Distribution-Panel.png',
    desc: 'Reliable power distribution boards engineered for safe, efficient load management across facilities.',
    icon: 'distribution',
  },
  {
    name: 'Drive Panels',
    slug: '#',
    image: '/images/products/CG-Drives.png',
    desc: 'VFD-integrated drive panels delivering precise motor speed control for industrial applications.',
    icon: 'drive',
  },
  {
    name: 'PLC Panels',
    slug: '#',
    image: '/images/products/PLC-Panels.png',
    desc: 'Programmable logic control panels built for robust automation in process and manufacturing lines.',
    icon: 'plc',
  },
  {
    name: 'PLC & SCADA',
    slug: '#',
    image: '/images/products/SCADA1.png',
    desc: 'Integrated PLC and SCADA systems for real-time monitoring, control, and data visibility.',
    icon: 'scada',
  },
];

export default function Products() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollStart = useRef(0);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);

    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 24 : 1;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 24 : 300;
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 24 : 300;
    el.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
  };

  // Pointer drag-to-scroll
  const handlePointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragScrollStart.current = el.scrollLeft;
    el.classList.add(styles.dragging);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const el = trackRef.current;
    if (!el) return;
    const delta = e.clientX - dragStartX.current;
    el.scrollLeft = dragScrollStart.current - delta;
  };

  const stopDragging = () => {
    isDragging.current = false;
    trackRef.current?.classList.remove(styles.dragging);
  };

  return (
    <section className={styles.products} aria-labelledby="products-heading">
      <div className={styles.header} >
        <div className={styles.headerText} data-aos="fade-up">
          <span className={styles.eyebrow}>What we build</span>
          <h2 id="products-heading" className={styles.heading}>
            Electrical control panels engineered for every application
          </h2>
          <p className={styles.subtext}>
            From power factor correction to full SCADA integration, explore our complete panel range.
          </p>
        </div>

        <div className={styles.navButtons}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous product"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Next product"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={styles.track}
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        role="list"
        aria-label="Product catalogue"
      data-aos="fade-up">
        {PRODUCTS.map((product) => (
          <Link
            href={product.slug}
            key={product.name}
            className={styles.card}
            role="listitem"
            draggable={false}
          >
            <div className={styles.cardImageWrap}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 80vw, 320px"
                className={styles.cardImage}
                draggable={false}
              />
              <div className={styles.cardOverlay} aria-hidden="true" />
              <span className={styles.cardIcon} aria-hidden="true">
                <ProductIcon name={product.icon} />
              </span>
              <span className={styles.cardShine} aria-hidden="true" />
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{product.name}</h3>
              <p className={styles.cardDesc}>{product.desc}</p>
              <span className={styles.cardLink}>
                View Details
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </div>
          </Link>
        ))}

        <Link href="/products" className={styles.viewAllCard} draggable={false}>
          <span className={styles.viewAllIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </span>
          <span className={styles.viewAllText}>View All Products</span>
          <span className={styles.viewAllSub}>Browse our complete range</span>
          <span className={styles.viewAllArrow} aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </span>
        </Link>
      </div>

      <div className={styles.dots}>
        {PRODUCTS.map((product, i) => (
          <button
            key={product.name}
            type="button"
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${product.name}`}
          />
        ))}
      </div>
    </section>
  );
}

function ProductIcon({ name }) {
  const icons = {
    apfc: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
    distribution: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="5" cy="19" r="2.5" />
        <circle cx="19" cy="19" r="2.5" />
        <path d="M12 7.5V13M12 13L6.5 17M12 13l5.5 4" />
      </svg>
    ),
    drive: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20" />
      </svg>
    ),
    plc: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h2v2H9zM13 9h2v2h-2zM9 13h2v2H9zM13 13h2v2h-2z" />
      </svg>
    ),
    scada: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" />
        <path d="M7 9l3 3 2-2 4 4" />
      </svg>
    ),
  };
  return icons[name] || null;
}