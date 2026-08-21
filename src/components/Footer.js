import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-footer">
            <Image 
              src="/logo.webp" 
              alt="Hotel Neelagiri Heritage Logo" 
              width={250} 
              height={125} 
              style={{ objectFit: 'contain', width: '250px', height: 'auto' }}
            />
          </div>
          <p className="footer-desc">
            <strong>A Smart Business Hotel</strong><br/>
            Where Heritage Meets Contemporary Comfort.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/heritage">Our Heritage</Link>
          <Link href="/accommodation">Accommodation</Link>
          <Link href="/wellness">Wellness</Link>
          <Link href="/kozhikode">Discover Kozhikode</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/hotel-policy">Hotel Policies</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Opposite Kozhikode Railway Station</p>
          <p>Annie Hall Road, Palayam</p>
          <p>Kozhikode – 673002</p>
          <p>+91 8075 838 228</p>
          <p>reservations@neelagiriheritage.com</p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61593174164578" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/neelagiriheritage/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.tripadvisor.in/Hotel_Review-g297635-d9557648-Reviews-Neelagiri_Heritage_By_Citrine-Kozhikode_Kozhikode_District_Kerala.html" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="currentColor">
                <path d="M528.91,178.82,576,127.58H471.66a326.11,326.11,0,0,0-367,0H0l47.09,51.24A143.911,143.911,0,0,0,241.86,390.73L288,440.93l46.11-50.17A143.94,143.94,0,0,0,575.88,285.18h-.03A143.56,143.56,0,0,0,528.91,178.82ZM144.06,382.57a97.39,97.39,0,1,1,97.39-97.39A97.39,97.39,0,0,1,144.06,382.57ZM288,282.37c0-64.09-46.62-119.08-108.09-142.59a281,281,0,0,1,216.17,0C334.61,163.3,288,218.29,288,282.37Zm143.88,100.2h-.01a97.405,97.405,0,1,1,.01,0ZM144.06,234.12h-.01a51.06,51.06,0,1,0,51.06,51.06v-.11A51,51,0,0,0,144.06,234.12Zm287.82,0a51.06,51.06,0,1,0,51.06,51.06A51.06,51.06,0,0,0,431.88,234.12Z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-map">
          <h4>Find Us</h4>
          <iframe 
            src="https://maps.google.com/maps?q=Hotel+Neelagiri+Heritage,+Kozhikode&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="180" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Hotel Neelagiri Heritage. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
