import styles from '../../shared.module.css';
import Image from 'next/image';
import ImageSlider from '../../../components/ImageSlider';

export const metadata = {
  title: 'Premium Suite',
  description: 'An elevated experience featuring generous living spaces and refined luxury interiors in Kozhikode.',
  alternates: { canonical: '/accommodation/premium-suite' },
};
import Link from 'next/link';
import { Wifi, Wind, BedDouble, Briefcase, Sparkles, Users, Sofa, Presentation, ArrowLeft } from 'lucide-react';

export default function PremiumSuite() {
  return (
    <main className="container">
      <Link href="/accommodation" className={styles.breadcrumb}>
        <ArrowLeft size={16} /> Back to Accommodation
      </Link>

      <section className={styles.luxuryHeroLayout}>
        <div className={styles.luxuryHeroImage}>
          <ImageSlider 
            images={[
              "/images/gallery/rooms/premium-suite-premium-suite.webp",
              "/images/gallery/rooms/premium-suite-pm24.webp",
              "/images/gallery/rooms/premium-suite-pm26.webp",
              "/images/gallery/rooms/premium-suite-18dc13cc-fcf5-4422-af83-b1cfca101ae1---copy.webp"
            ]} 
            altPrefix="Premium Suite" 
          />
        </div>
        
        <div className={styles.luxuryHeroContent}>
          <h1 className={styles.luxuryRoomTitle}>Premium Suite</h1>
          
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
            Our finest accommodation offers generous living spaces and refined interiors for an elevated stay experience. The Premium Suite features a completely separate living room area, providing the ultimate privacy and space to entertain guests or conduct informal meetings in pure comfort.
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
            Discover the pinnacle of luxury at Hotel Neelagiri Heritage. The Premium Suite is masterfully curated to offer expansive spatial freedom, delineating the tranquil bedroom from a lavishly appointed living room. Whether you are hosting guests, convening a private meeting, or simply indulging in an extended retreat, this suite caters to your every desire with unparalleled elegance.
          </p>
        </div>
        
        <div>
          <h2 className={styles.luxurySectionTitle}>Key Amenities</h2>
          <ul className={styles.luxuryAmenitiesGrid}>
            <li className={styles.luxuryAmenityItem}>
              <Sofa size={20} color="var(--primary-violet)" /> Separate Living Room
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Wifi size={20} color="var(--primary-violet)" /> Complimentary Wi-Fi
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Wind size={20} color="var(--primary-violet)" /> Air Conditioning
            </li>
            <li className={styles.luxuryAmenityItem}>
              <Presentation size={20} color="var(--primary-violet)" /> Executive Work Desk
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
