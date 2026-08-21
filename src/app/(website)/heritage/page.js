import styles from '../shared.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'Our Heritage',
  description: 'Discover the living legacy of Neelagiri Lodge. A landmark in the cultural history of Kozhikode where generations of visionaries found inspiration.',
  alternates: { canonical: '/heritage' },
};

export default function Heritage() {
  return (
    <main>
      <header className={styles.pageHeader} style={{
        backgroundColor: '#f8f6f0',
        height: 'auto',
        minHeight: 'auto',
        aspectRatio: '5792 / 4304',
        width: '100%',
        position: 'relative'
      }}>
        <Image src="/images/heritage-hero.svg" alt="Heritage" fill style={{ objectFit: 'contain' }} priority unoptimized />
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>More Than a Hotel. A Living Legacy.</h1>
          <p className={`${styles.pageSubtitle} fade-in delay-2`}>Where generations of storytellers, artists, and visionaries found inspiration—and where their legacy continues to welcome travellers today.</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>A Landmark in the Cultural History of Kozhikode</h2>
          <p className={styles.blockText}>
            Long before we became Hotel Neelagiri Heritage, this address was home to one of Kerala's most celebrated landmarks—<strong>Neelagiri Lodge</strong>.
          </p>
          <p className={styles.blockText}>
            Established in the 1930s on Annie Hall Road, directly opposite Kozhikode Railway Station, Neelagiri Lodge evolved into far more than a place to stay. For over eight decades, we were part of an institution woven into the cultural fabric of Kerala, welcoming writers, filmmakers, musicians, artists, journalists, and thinkers from across the state.
          </p>
          <p className={styles.blockText}>
            Within our modest blue walls, conversations flourished, friendships were forged, and ideas that would shape Malayalam literature and cinema found their beginning.
          </p>
          <p className={styles.blockText}>
            Today, we proudly stand on this historic ground as Hotel Neelagiri Heritage, preserving that spirit while offering contemporary comfort for a new generation of travellers.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>The Man Behind the Legacy</h2>
          <p className={styles.blockText}>
            At the heart of Neelagiri Lodge was <strong>Ramadas Vaidyar</strong>—a legendary host remembered as much for his generosity as for his unforgettable wit.
          </p>
          <p className={styles.blockText}>
            Affectionately celebrated across Kerala as the "Emperor of Sarcasm," he transformed our lodge into an open house for intellectuals, artists, and dreamers. His remarkable ability to engage in thoughtful conversation, challenge ideas with humour, and welcome every visitor with genuine warmth made Neelagiri a destination in itself.
          </p>
          <p className={styles.blockText}>
            For many creative minds of the era, a visit to Kozhikode was incomplete without spending an evening here in conversation with Ramadas Vaidyar.
          </p>
          <p className={styles.blockText}>
            Through his hospitality, we became a place where creativity could thrive naturally—one of Kerala's most cherished cultural meeting spaces.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Where Legends Gathered</h2>
          <p className={styles.blockText}>
            Across the decades, we welcomed some of the most celebrated names in Malayalam literature, cinema, music, and the arts.
          </p>
          <p className={styles.blockText}>
            Our guest list reflected the very history of Kerala's creative renaissance.
          </p>
          <p className={styles.blockText}>
            Among those who spent time with us were literary icons including <strong>Vaikom Muhammad Basheer</strong>, <strong>O. V. Vijayan</strong>, <strong>Kakkanadan</strong>, <strong>Thakazhy Sivasankara Pillai</strong>, and <strong>Perumbadavam Sreedharan</strong>.
          </p>
          <p className={styles.blockText}>
            We also became a familiar retreat for celebrated figures from Malayalam cinema and music, including <strong>Prem Nazir</strong>, <strong>Sathyan</strong>, <strong>Adoor Bhasi</strong>, <strong>Ramu Kariat</strong>, <strong>Adoor Gopalakrishnan</strong>, and <strong>K. J. Yesudas</strong>.
          </p>
          <p className={styles.blockText}>
            For countless visitors, we were not simply accommodation—we were where conversations became collaborations, and where ideas found life.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>A Place Where Creativity Flourished</h2>
          <p className={styles.blockText}>
            Our rooms quietly witnessed moments that would become part of Kerala's cultural history.
          </p>
          <p className={styles.blockText}>
            Stories were drafted over late-night conversations.
          </p>
          <p className={styles.blockText}>
            Film scripts took shape between cups of tea.
          </p>
          <p className={styles.blockText}>
            Songs were composed in moments of quiet inspiration.
          </p>
          <p className={styles.blockText}>
            Among our distinguished residents was celebrated lyricist <strong>Vayalar Ramavarma</strong>, who frequently stayed with us while working in Kozhikode. It was here that he wrote several memorable cinematic lyrics, including the beloved song <strong>"Neelagiriyude Sakhikale"</strong> for the film <em>Pani Theeratha Veedu</em>.
          </p>
          <p className={styles.blockText}>
            Our walls once echoed with ideas that continue to inspire generations.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>The End of a Chapter</h2>
          <p className={styles.blockText}>
            By 2018, our original building had stood proudly for nearly nine decades.
          </p>
          <p className={styles.blockText}>
            Time, however, had taken its toll. With the structure no longer considered safe, the family of Ramadas Vaidyar made the difficult decision to bring down the historic lodge.
          </p>
          <p className={styles.blockText}>
            Its demolition marked the end of an era that had touched the lives of countless artists, travellers, and admirers.
          </p>
          <p className={styles.blockText}>
            Although the physical structure disappeared, the spirit we carried remained deeply rooted in the hearts of those who experienced it.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Carrying the Legacy Forward</h2>
          <p className={styles.blockText}>
            From this remarkable history, we emerged as <strong>Hotel Neelagiri Heritage</strong>.
          </p>
          <p className={styles.blockText}>
            Designed as a contemporary smart business hotel, we respectfully honour the heritage of our predecessor while embracing the expectations of today's traveller.
          </p>
          <p className={styles.blockText}>
            Located on the very same historic site, we combine modern comfort with a philosophy of genuine hospitality—a reflection of the values that made Neelagiri Lodge unforgettable.
          </p>
          <p className={styles.blockText}>
            Every guest who walks through our doors becomes part of a story that has been unfolding for nearly a century.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Our Philosophy</h2>
          <p className={styles.blockText}>
            We believe that true hospitality is not defined by architecture alone, but by the warmth with which people are welcomed.
          </p>
          <p className={styles.blockText}>
            Inspired by the timeless spirit of Neelagiri Lodge, we remain committed to creating meaningful experiences through attentive service, thoughtful design, and authentic care.
          </p>
          <p className={styles.blockText}>
            The faces may change, the rooms may be new, but our heart continues to welcome every traveller with the same sincerity that made us a legend.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>A Legacy That Lives On</h2>
          <p className={styles.blockText}>
            Today, we welcome business travellers, families, transit guests, international visitors, and explorers discovering Kozhikode.
          </p>
          <p className={styles.blockText}>
            While our comforts have evolved for the modern world, one thing remains unchanged:
          </p>
          <p className={styles.blockText}>
            <strong>Our tradition of welcoming every guest with warmth, respect, and a sense of belonging.</strong>
          </p>
          <p className={styles.blockText}>
            That is our true heritage.
          </p>
        </div>
      </section>
    </main>
  );
}
