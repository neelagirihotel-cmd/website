'use client';

import styles from '@/app/shared.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Wifi, Wind, BedDouble, Briefcase, Sparkles, Clock, Plane, Utensils, Presentation, Accessibility, Users } from 'lucide-react';

export default function Accommodation() {
  return (
    <main>
      <header className={styles.pageHeader}>
        <Image src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000&auto=format&fit=crop" alt="Accommodation" fill style={{ objectFit: 'cover' }} priority />
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Thoughtfully Designed Spaces</h1>
          <p className={`${styles.pageSubtitle} fade-in delay-2`}>Discover accommodation that blends comfort, functionality, and understated elegance.</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.grid} style={{ marginBottom: '80px' }}>
          <div className={styles.card}>
            <Image src="/images/gallery/rooms/smart-room-1.webp" alt="Smart Room" width={800} height={500} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className={styles.cardContent}>
              <h3>Smart Rooms</h3>
              <div className={styles.roomSpecs}>
                <span className={styles.roomSpecItem}><Users size={16} color="var(--primary-violet)" /> 2 Adults</span>
                <span className={styles.roomSpecItem}><BedDouble size={16} color="var(--primary-violet)" /> King Bed</span>
                <span className={styles.roomSpecItem}><Wifi size={16} color="var(--primary-violet)" /> Free Wi-Fi</span>
              </div>
              <p>Perfect for solo travellers and short business visits seeking efficiency without compromising comfort.</p>
              <div className={styles.cardActions}>
                <Link href="/accommodation/smart-rooms" className="btn-outline">View Details</Link>
                <a href="https://letsbook.me/booking/022577" className="btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image src="/images/business-suite.webp" alt="Business Suite" width={800} height={500} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className={styles.cardContent}>
              <h3>Business Suites</h3>
              <div className={styles.roomSpecs}>
                <span className={styles.roomSpecItem}><Users size={16} color="var(--primary-violet)" /> 2 Adults + 1</span>
                <span className={styles.roomSpecItem}><BedDouble size={16} color="var(--primary-violet)" /> King Bed</span>
                <span className={styles.roomSpecItem}><Briefcase size={16} color="var(--primary-violet)" /> Work Desk</span>
              </div>
              <p>Created for professionals requiring additional space, privacy, and productivity during extended stays.</p>
              <div className={styles.cardActions}>
                <Link href="/accommodation/business-suites" className="btn-outline">View Details</Link>
                <a href="https://letsbook.me/booking/022577" className="btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image src="/images/gallery/rooms/premium-suite-pm24.webp" alt="Premium Suite" width={800} height={500} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className={styles.cardContent}>
              <h3>Premium Suite</h3>
              <div className={styles.roomSpecs}>
                <span className={styles.roomSpecItem}><Users size={16} color="var(--primary-violet)" /> 2 Adults + 1</span>
                <span className={styles.roomSpecItem}><BedDouble size={16} color="var(--primary-violet)" /> King Bed</span>
                <span className={styles.roomSpecItem}><Presentation size={16} color="var(--primary-violet)" /> Living Room</span>
              </div>
              <p>Our finest accommodation offers spacious interiors, elegant furnishings, and an elevated stay experience.</p>
              <div className={styles.cardActions}>
                <Link href="/accommodation/premium-suite" className="btn-outline">View Details</Link>
                <a href="https://letsbook.me/booking/022577" className="btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Amenities & Guest Services</h2>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', listStyle: 'none', padding: 0, marginTop: '40px' }}>
            {[
              { name: 'Complimentary Wi-Fi', icon: <Wifi size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Air Conditioning', icon: <Wind size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Comfortable Bedding', icon: <BedDouble size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Work Desk', icon: <Briefcase size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Daily Housekeeping', icon: <Sparkles size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: '24-Hour Reception', icon: <Clock size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Airport Transfers', icon: <Plane size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Meal Arrangements', icon: <Utensils size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Boardroom Access', icon: <Presentation size={22} strokeWidth={1.5} color="var(--primary-violet)" /> },
              { name: 'Accessibility Options', icon: <Accessibility size={22} strokeWidth={1.5} color="var(--primary-violet)" /> }
            ].map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '18px 24px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '4px', fontSize: '0.95rem', color: 'var(--text-dark)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)'; }}>
                <div style={{ padding: '10px', backgroundColor: '#f8f8fa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <span style={{ fontWeight: '500' }}>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
