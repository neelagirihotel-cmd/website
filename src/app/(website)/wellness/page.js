import styles from '../shared.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'Ayurveda Wellness',
  description: 'Discover authentic Ayurveda and premium wellness experiences at Hotel Neelagiri Heritage, featuring AVVVS Ayur Speciality Clinic and Gloveda.',
  alternates: { canonical: '/wellness' },
};
import Link from 'next/link';

export default function Wellness() {
  return (
    <main>
      <header className={styles.pageHeader}>
        <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop" alt="Wellness" fill style={{ objectFit: 'cover' }} priority />
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Wellness Beyond Your Stay</h1>
          <p className={`${styles.pageSubtitle} fade-in delay-2`}>Discover a world of authentic Ayurveda, premium wellness, and luxury Ayur-Medi experiences—available just steps from your room.</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>A Wellness Ecosystem</h2>
          <p className={styles.blockText}>
            Guests of Hotel Neelagiri Heritage enjoy convenient access to a distinguished wellness ecosystem located within the same premises. Operated independently by sister concerns under the same ownership, these trusted brands offer everything from traditional Ayurvedic therapies to premium herbal products and advanced Ayur-Medi cosmetology.
          </p>
          <p className={styles.blockText}>
            Rather than offering a conventional hotel spa, Hotel Neelagiri Heritage places guests at the doorstep of three established wellness brands, each with its own expertise, philosophy, and destination.
          </p>
        </div>

        <div className={styles.grid} style={{ marginBottom: '80px' }}>
          <div className={styles.brandCard}>
            <div className={styles.brandLogoWrapper}>
              <img src="/images/avvvs.svg" alt="AVVVS Logo" style={{ maxWidth: '100%', maxHeight: '100px', objectFit: 'contain' }} />
            </div>
            <h3 className={styles.brandTitle}>Ayur Speciality Clinic</h3>
            <p className={styles.brandDesc}>Over a Century of Trusted Ayurvedic Care. Founded in 1921, AVVVS provides authentic Kerala Ayurveda backed by generations of expertise.</p>
            <a href="https://avvvs.com" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '12px', textAlign: 'center', display: 'block' }}>Visit AVVVS</a>
          </div>

          <div className={styles.brandCard}>
            <div className={styles.brandLogoWrapper}>
              <img src="/images/gloveda.avif" alt="Gloveda Herbals Logo" style={{ maxWidth: '100%', maxHeight: '100px', objectFit: 'contain' }} />
            </div>
            <h3 className={styles.brandTitle}>Ayurveda You Can Take Home</h3>
            <p className={styles.brandDesc}>A thoughtfully curated collection of herbal wellness, skin care, and hair care products developed using authentic Ayurvedic formulations.</p>
            <a href="https://glovedaherbals.com" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '12px', textAlign: 'center', display: 'block' }}>Visit Gloveda Herbals</a>
          </div>

          <div className={styles.brandCard}>
            <div className={styles.brandLogoWrapper}>
              <img src="/images/glovedaexp.webp" alt="Gloveda Experience Logo" style={{ maxWidth: '100%', maxHeight: '100px', objectFit: 'contain' }} />
            </div>
            <h3 className={styles.brandTitle}>B2B Wellness & Cosmetology</h3>
            <p className={styles.brandDesc}>Partnering with premium hospitality and luxury spas to deliver refined Ayur-Medi concepts, doctor-developed formulations, and world-class wellness solutions.</p>
            <a href="https://glovedaexperience.com" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '12px', textAlign: 'center', display: 'block' }}>Discover Gloveda Experience</a>
          </div>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Featured Wellness Experiences</h2>
          <p className={styles.blockText}>
            Every wellness journey begins with a consultation, allowing experienced Ayurvedic physicians to recommend treatments tailored to your individual constitution and health goals. Popular therapies include:
          </p>
          <ul className={styles.listGroup}>
            <li>
              <div>
                <strong style={{ color: 'var(--primary-violet)' }}>Abhyanga:</strong> A full-body medicated oil massage designed to improve circulation, reduce fatigue, promote relaxation, and support natural detoxification.
              </div>
            </li>
            <li>
              <div>
                <strong style={{ color: 'var(--primary-violet)' }}>Shirodhara:</strong> A deeply calming Ayurvedic therapy where warm medicated oil is gently poured over the forehead to ease stress, improve sleep, and restore mental balance.
              </div>
            </li>
            <li>
              <div>
                <strong style={{ color: 'var(--primary-violet)' }}>Pizhichil:</strong> Often described as one of Kerala's signature rejuvenation therapies, combining warm medicated oils with rhythmic therapeutic massage.
              </div>
            </li>
            <li>
              <div>
                <strong style={{ color: 'var(--primary-violet)' }}>Herbal Kizhi Treatments:</strong> Traditional poultice therapies using medicinal herbs, leaves, powders, or medicated rice to support mobility, reduce pain, and encourage healing.
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>A Thoughtful Addition to Your Stay</h2>
          <p className={styles.blockText}>
            Hotel Neelagiri Heritage is proud to share its premises with these distinguished wellness brands, offering guests the convenience of exploring authentic Ayurveda, premium herbal care, and luxury wellness experiences—all within the same destination.
          </p>
          <p className={styles.blockText}>
            Whether you're visiting Kozhikode for business, leisure, or simply passing through, your stay can be complemented with carefully selected wellness experiences. Our front office team will be pleased to assist you in connecting with the appropriate wellness provider.
          </p>

        </div>
      </section>
    </main>
  );
}
