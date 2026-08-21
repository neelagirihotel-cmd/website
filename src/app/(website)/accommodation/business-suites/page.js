import styles from '@/app/shared.module.css';
import Image from 'next/image';
import ImageSlider from '@/components/ImageSlider';

export const metadata = {
  title: 'Business Suites',
  description: 'Spacious luxury accommodation designed for executives and extended stays in Kozhikode.',
  alternates: { canonical: '/accommodation/business-suites' },
};
import Link from 'next/link';
import { Wifi, Wind, BedDouble, Briefcase, Sparkles, Users, Sofa, ArrowLeft } from 'lucide-react';

export default function BusinessSuites() {
  return (
    <main className="container">
      <Link href="/accommodation" className={styles.breadcrumb}>
        <ArrowLeft size={16} /> Back to Accommodation
      </Link>

      <section className={styles.luxuryHeroLayout}>
        <div className={styles.luxuryHeroImage}>
          <ImageSlider 
            images={[
              "/images/business-suite.webp"
            ]} 
            altPrefix="Business Suite" 
          />
        </div>
        
        <div className={styles.luxuryHeroContent}>
          <h1 className={styles.luxuryRoomTitle}>Business Suites</h1>
          
          <div className={styles.luxurySpecs}>
            <div className={styles.luxurySpecItem}>
              <span className={styles.luxurySpecLabel}>Occupancy</span>
              <span className={styles.luxurySpecValue}><Users size={18} color="var(--primary-violet)" /> 2 Adults + 1 Extra</span>
            </div>
            <div className={styles.luxurySpecItem}>
              <span className={styles.luxurySpecLabel}>Bed</span>
              <span className={styles.luxurySpecValue}><BedDouble size={18} color="var(--primary-violet)" /> King Size</span>
            </div>
          </div>
          
          <p className={styles.luxuryDescription}>
            Created for professionals requiring additional space, privacy, and productivity during extended stays. Our Business Suites feature a comfortable, built-in sofa space directly within the bedroom, offering the perfect spot to unwind after a long day of meetings.
          </p>
          
          <div className={styles.luxuryActions}>
            <a href="https://letsbook.me/booking/022577" className="btn-primary">Book Now</a>
            <Link href="/contact#enquiry" className="btn-outline">Enquire</Link>
          </div>
        </div>
      </section>

      <section className={styles.luxuryDetailsLayout}>
        <div>
          <h2 className={styles.luxurySectionTitle}>Overview</h2>
          <p style={{ color: '#555', lineHeight: '1.8' }}>
            Elevate your business travel with an environment designed for both work and relaxation. The Business Suite offers an expanded footprint that accommodates an executive work desk and an integrated lounging area. Perfect for those who appreciate room to breathe, prepare for meetings, and retreat in absolute comfort.
          </p>
        </div>
        
        <div>
          <h2 className={styles.luxurySectionTitle}>Key Amenities</h2>
          <ul className={styles.luxuryAmenitiesGrid}>
            <li className={styles.luxuryAmenityItem}>
              <Wifi size={20} color="var(--primary-violet)" /> Complimentary Wi-Fi
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Wind size={20} color="var(--primary-violet)" /> Air Conditioning
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Sofa size={20} color="var(--primary-violet)" /> In-Room Sofa Space
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Briefcase size={20} color="var(--primary-violet)" /> Executive Work Desk
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Sparkles size={20} color="var(--primary-violet)" /> Daily Housekeeping
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
