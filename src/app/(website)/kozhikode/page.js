import styles from '@/app/shared.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'Discover Kozhikode',
  description: 'Explore the soul of Malabar. Discover historic landmarks, vibrant markets, serene beaches, and authentic cuisine in Kozhikode.',
  alternates: { canonical: '/kozhikode' },
};

export default function Kozhikode() {
  return (
    <main>
      <header className={styles.pageHeader}>
        <Image src="/images/clt.webp" alt="Discover Kozhikode" fill style={{ objectFit: 'cover' }} priority />
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Discover the Soul of Kozhikode</h1>
          <p className={`${styles.pageSubtitle} fade-in delay-2`}>Experience a city rich in heritage, culture, cuisine, and coastal charm.</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.rowLayout} style={{ marginBottom: '80px' }}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Heritage</h3>
              <p>Explore the city's historic streets, iconic landmarks, and centuries-old traditions.</p>
              <ul className={styles.attractionList}>
                <li className={styles.attractionItem}>
                  <div className={styles.attractionImageWrapper}>
                    <Image src="/images/mananchira.webp" alt="Mananchira Square" fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.attractionText}>
                    <div className={styles.attractionName}>Mananchira Square</div>
                    <div className={styles.attractionDesc}>A beautiful park surrounding a historic man-made tank in the heart of the city.</div>
                  </div>
                  <span className={styles.attractionDistance}>2 km</span>
                </li>
                <li className={styles.attractionItem}>
                  <div className={styles.attractionImageWrapper}>
                    <Image src="/images/tali.webp" alt="Tali Shiva Temple" fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.attractionText}>
                    <div className={styles.attractionName}>Tali Shiva Temple</div>
                    <div className={styles.attractionDesc}>One of the oldest and most revered temples in Kozhikode, showcasing classic Kerala architecture.</div>
                  </div>
                  <span className={styles.attractionDistance}>900 m</span>
                </li>
                <li className={styles.attractionItem}>
                  <div className={styles.attractionImageWrapper}>
                    <Image src="/images/mishkal.webp" alt="Mishkal Mosque" fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.attractionText}>
                    <div className={styles.attractionName}>Mishkal Mosque</div>
                    <div className={styles.attractionDesc}>A stunning 14th-century mosque featuring intricate woodwork and no minarets.</div>
                  </div>
                  <span className={styles.attractionDistance}>2.2 km</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Culture</h3>
              <p>Discover vibrant markets, local craftsmanship, and the warm spirit of Malabar hospitality.</p>
              <ul className={styles.attractionList}>
                <li className={styles.attractionItem}>
                  <div className={styles.attractionImageWrapper}>
                    <Image src="/images/sm-street.webp" alt="SM Street" fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.attractionText}>
                    <div className={styles.attractionName}>SM Street (Mittai Theruvu)</div>
                    <div className={styles.attractionDesc}>The bustling cultural and commercial hub of Kozhikode, famous for traditional sweets and vibrant shopping.</div>
                  </div>
                  <span className={styles.attractionDistance}>2.4 km</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Beaches</h3>
              <p>Spend peaceful evenings along Kozhikode Beach or venture to the historic shores of Beypore and Kappad.</p>
              <ul className={styles.attractionList}>
                <li className={styles.attractionItem}>
                  <div className={styles.attractionImageWrapper}>
                    <Image src="/images/kozhikode-beach.webp" alt="Kozhikode Beach" fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.attractionText}>
                    <div className={styles.attractionName}>Kozhikode Beach</div>
                    <div className={styles.attractionDesc}>A popular spot for stunning sunsets, historic piers, and evening strolls.</div>
                  </div>
                  <span className={styles.attractionDistance}>4.8 km</span>
                </li>
                <li className={styles.attractionItem}>
                  <div className={styles.attractionImageWrapper}>
                    <Image src="/images/beypore.webp" alt="Beypore Port" fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.attractionText}>
                    <div className={styles.attractionName}>Beypore Port & Beach</div>
                    <div className={styles.attractionDesc}>Famous for its ancient shipbuilding industry (Uru) and a beautiful stone pier extending into the sea.</div>
                  </div>
                  <span className={styles.attractionDistance}>10.3 km</span>
                </li>
                <li className={styles.attractionItem}>
                  <div className={styles.attractionImageWrapper}>
                    <Image src="/images/kappad.webp" alt="Kappad Beach" fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.attractionText}>
                    <div className={styles.attractionName}>Kappad Beach</div>
                    <div className={styles.attractionDesc}>The historic landing site of Vasco da Gama in 1498, offering serene sands and rock formations.</div>
                  </div>
                  <span className={styles.attractionDistance}>19.3 km</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Nature</h3>
              <p>Enjoy day trips to waterfalls, reservoirs, and scenic hill routes leading towards Wayanad.</p>
              <ul className={styles.attractionList}>
                <li className={styles.attractionItem}>
                  <div className={styles.attractionImageWrapper}>
                    <Image src="/images/sarovaram.webp" alt="Sarovaram Biopark" fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.attractionText}>
                    <div className={styles.attractionName}>Sarovaram Biopark</div>
                    <div className={styles.attractionDesc}>An eco-friendly park focused on the conservation of mangrove forests and wetlands.</div>
                  </div>
                  <span className={styles.attractionDistance}>6.2 km</span>
                </li>
              </ul>
            </div>
          </div>



          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Gateway to Wayanad</h3>
              <p>Many travellers choose Hotel Neelagiri Heritage as a convenient overnight stop before continuing their scenic journey into Wayanad's hills, plantations, and wildlife.</p>
              <ul className={styles.attractionList}>
                <li className={styles.attractionItem}>
                  <div className={styles.attractionImageWrapper}>
                    <Image src="/images/churam.webp" alt="Thamarassery Churam" fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.attractionText}>
                    <div className={styles.attractionName}>Thamarassery Churam</div>
                    <div className={styles.attractionDesc}>The breathtaking mountain pass with 9 hairpin bends that serves as the gateway to the cool hills of Wayanad.</div>
                  </div>
                  <span className={styles.attractionDistance}>45.3 km</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
