'use client';

import Image from 'next/image';
import styles from './clients.module.css';

const CLIENTS = [
  { name: 'Tata Steel', logo: '/images/clients/1.png' },
  { name: 'Larsen & Toubro', logo: '/images/clients/2.png' },
  { name: 'Reliance Industries', logo: '/images/clients/3.png' },
  { name: 'Adani Power', logo: '/images/clients/4.png' },
  { name: 'Bajaj Electricals', logo: '/images/clients/5.png' },
  { name: 'JSW Steel', logo: '/images/clients/6.png' },
  { name: 'Siemens', logo: '/images/clients/7.png' },
  { name: 'Thermax', logo: '/images/clients/8.png' },
  { name: 'Godrej', logo: '/images/clients/9.png' },
  { name: 'Mahindra', logo: '/images/clients/10.png' },
  { name: 'Mahindra', logo: '/images/clients/11.png' },
];

export default function Clients() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className={styles.clients} aria-labelledby="clients-heading">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Trusted nationwide</span>
        <h2 id="clients-heading" className={styles.heading}>
          Trusted by industry leaders across India
        </h2>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        <div className={styles.track}>
          {track.map((client, i) => (
            <div className={styles.logoSlot} key={`${client.name}-${i}`}>
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={56}
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}