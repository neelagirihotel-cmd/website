import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Hotel Neelagiri Heritage | A Smart Business Hotel in Kozhikode',
  description: 'Experience the ultimate luxury, heritage, and authentic Ayurveda wellness at Hotel Neelagiri Heritage. A Smart Business Hotel located in Kozhikode.',
  alternates: { canonical: '/' },
};

import { MapPin, BedDouble, Briefcase, Leaf, HeartHandshake, Compass } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import BookingWidget from '@/components/BookingWidget';

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image src="/images/hero.webp" alt="Hotel Neelagiri Heritage" fill style={{ objectFit: 'cover', transform: 'scale(1.3)' }} priority />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <FadeIn delay={0.2} direction="up">
            <h3 className={styles.heroSubtitle}>Hotel Neelagiri Heritage</h3>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <h2 className={styles.heroSub2}>A Smart Business Hotel</h2>
          </FadeIn>
          <FadeIn delay={0.6} direction="up">
            <h1 className={styles.heroTitle}>Where Heritage Meets Contemporary Comfort</h1>
          </FadeIn>
          <FadeIn delay={0.8} direction="up">
            <p className={styles.heroText}>
              Thoughtfully designed accommodation, warm hospitality, and effortless connectivity in the heart of Kozhikode.
            </p>
          </FadeIn>
          <FadeIn delay={1.0} direction="up">
            <div className={styles.heroActions}>
              <a href="https://letsbook.me/booking/022577">
                <button className="btn-primary">Book Your Stay</button>
              </a>
              <Link href="/heritage"><button className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>Explore Our Heritage</button></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Booking Widget */}
      <BookingWidget />

      {/* Welcome Section */}
      <section className={`section container ${styles.welcomeSection}`}>
        <FadeIn direction="up">
          <div className={styles.textCenter}>
            <span className={styles.sectionOverline}>Welcome</span>
            <h2 className={styles.sectionTitle}>A Stay Designed Around You</h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionLead}>
              At Hotel Neelagiri Heritage, every detail reflects our commitment to making travel effortless. Combining modern comforts with gracious hospitality, our hotel offers an ideal retreat for business executives, families, and travellers seeking a refined stay in the heart of Kozhikode.
            </p>
            <p className={styles.sectionText}>
              Just moments from the city&apos;s railway station and within easy reach of its commercial, cultural, and culinary landmarks, Hotel Neelagiri Heritage serves as the perfect address for work, relaxation, and onward journeys.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.whyChooseSection}`}>
        <div className="container">
          <FadeIn direction="up">
            <div className={styles.textCenter}>
              <span className={styles.sectionOverline}>Our Promise</span>
              <h2 className={styles.sectionTitle}>The Hallmark of Hospitality</h2>
              <div className={styles.sectionDivider}></div>
            </div>
          </FadeIn>
          <StaggerContainer className={styles.grid3}>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><MapPin size={32} strokeWidth={1.5} /></div>
                <h3>Prime City Location</h3>
                <p>Situated directly opposite Kozhikode Railway Station for unmatched convenience.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><BedDouble size={32} strokeWidth={1.5} /></div>
                <h3>Refined Accommodation</h3>
                <p>Comfortable rooms and spacious suites designed for productivity and relaxation.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><Briefcase size={32} strokeWidth={1.5} /></div>
                <h3>Corporate Friendly</h3>
                <p>Dedicated boardroom facilities for executive meetings and business discussions.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><Leaf size={32} strokeWidth={1.5} /></div>
                <h3>Wellness Experiences</h3>
                <p>Complement your stay with authentic Ayurvedic therapies at AVVVS Wellness.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><HeartHandshake size={32} strokeWidth={1.5} /></div>
                <h3>Personalised Hospitality</h3>
                <p>Thoughtful service tailored to every guest&apos;s needs.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><Compass size={32} strokeWidth={1.5} /></div>
                <h3>Seamless Connectivity</h3>
                <p>Easy access to Kozhikode&apos;s business districts, shopping streets, beaches, and the gateway to Wayanad.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Accommodation Preview */}
      <section className={`section container`}>
        <FadeIn direction="up">
          <div className={styles.textCenter}>
            <span className={styles.sectionOverline}>Our Spaces</span>
            <h2 className={styles.sectionTitle}>Sanctuaries of Serenity</h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionLead}>Choose from thoughtfully curated spaces that balance functionality with elegance.</p>
          </div>
        </FadeIn>
        <StaggerContainer className={styles.grid3}>
          <StaggerItem>
            <div className={styles.roomCard}>
              <div className={styles.roomImage} style={{ position: 'relative' }}>
                <Image src="/images/gallery/rooms/smart-room-1.webp" alt="Smart Rooms" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className={styles.roomContent}>
                <h3>Smart Rooms</h3>
                <p>Contemporary comfort for short business stays and solo travellers.</p>
                <Link href="/accommodation/smart-rooms" className="btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '10px', textAlign: 'center' }}>View More</Link>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className={styles.roomCard}>
              <div className={styles.roomImage} style={{ position: 'relative' }}>
                <Image src="/images/business-suite.webp" alt="Business Suites" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className={styles.roomContent}>
                <h3>Business Suites</h3>
                <p>Spacious accommodation designed for executives and extended stays.</p>
                <Link href="/accommodation/business-suites" className="btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '10px', textAlign: 'center' }}>View More</Link>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className={styles.roomCard}>
              <div className={styles.roomImage} style={{ position: 'relative' }}>
                <Image src="/images/gallery/rooms/premium-suite-pm24.webp" alt="Premium Suite" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className={styles.roomContent}>
                <h3>Premium Suite</h3>
                <p>An elevated experience featuring generous living spaces and refined interiors.</p>
                <Link href="/accommodation/premium-suite" className="btn-outline" style={{ marginTop: 'auto', width: '100%', padding: '10px', textAlign: 'center' }}>View More</Link>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Wellness Preview */}
      <section className={`section ${styles.wellnessSection}`}>
        <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop" alt="Wellness Ecosystem" fill style={{ objectFit: 'cover' }} />
        <div className={styles.wellnessOverlay}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <FadeIn direction="up">
            <div className={styles.textCenter}>
              <span className={styles.sectionOverlineLight}>Wellness Ecosystem</span>
              <h2 className={styles.sectionTitleLight}>Wellness Beyond Your Stay</h2>
              <div className={styles.sectionDividerLight}></div>
              <p className={styles.sectionLeadLight}>
                Discover a world of authentic Ayurveda, premium wellness, and luxury Ayur-Medi experiences just steps from your room. Three independent wellness brands offer traditional therapies, premium herbal products, and advanced cosmetology.
              </p>
              <Link href="/wellness"><button className="btn-primary" style={{marginTop: '30px'}}>Discover Wellness</button></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Discover Kozhikode Preview */}
      <section className={`section container`}>
        <div className={styles.kozhikodePreview}>
          <FadeIn direction="right" className={styles.textLeft}>
            <div>
              <span className={styles.sectionOverline}>Destination</span>
              <h2 className={styles.sectionTitle}>The Soul of Malabar</h2>
              <div className={styles.sectionDividerLeft}></div>
              <p className={styles.sectionLead}>
                From heritage landmarks and bustling shopping streets to serene beaches and authentic Malabar cuisine, Kozhikode offers experiences that leave a lasting impression.
              </p>
              <Link href="/kozhikode"><button className="btn-outline" style={{marginTop: '20px'}}>Explore the City</button></Link>
            </div>
          </FadeIn>
          <FadeIn direction="left" className={styles.kozhikodeImageWrapper}>
            <div>
              <div className={styles.kozhikodeImageDecoration}></div>
              <div className={styles.kozhikodeImage} style={{ position: 'relative' }}>
                <Image src="/images/clt.webp" alt="Kozhikode City" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <FadeIn direction="up">
            <div className={styles.textCenter}>
              <span className={styles.sectionOverline}>Visit Us</span>
              <h2 className={styles.sectionTitle}>Your Journey Begins Here</h2>
              <div className={styles.sectionDivider}></div>
              <p className={styles.sectionLead} style={{maxWidth: '800px', margin: '0 auto 40px auto'}}>
                Whether your journey brings you to Kozhikode for business, leisure, or a brief stop before continuing onward, Hotel Neelagiri Heritage welcomes you with warmth, comfort, and impeccable service.
              </p>
              <a href="https://letsbook.me/booking/022577">
                <button className="btn-primary">Book your stay today</button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
