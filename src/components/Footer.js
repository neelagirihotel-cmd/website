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
            {/* Facebook official icon */}
            <a href="https://www.facebook.com/profile.php?id=61593174164578" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Instagram official icon */}
            <a href="https://www.instagram.com/neelagiriheritage/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            {/* TripAdvisor official icon */}
            <a href="https://www.tripadvisor.in/Hotel_Review-g297635-d9557648-Reviews-Neelagiri_Heritage_By_Citrine-Kozhikode_Kozhikode_District_Kerala.html" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.934 5.934 0 0 0-.08 5.198 5.937 5.937 0 0 0 4.404 3.329 5.936 5.936 0 0 0 5.232-1.951L12 16.699l.481-.34a5.937 5.937 0 0 0 5.232 1.951 5.938 5.938 0 0 0 4.404-3.329 5.934 5.934 0 0 0-.08-5.198L24 6.648h-4.36c-2.308-1.57-4.977-2.353-7.634-2.353zM12 6.954c.74 0 1.46.07 2.16.2A9.11 9.11 0 0 0 12 9.008a9.116 9.116 0 0 0-2.16-1.854A13.26 13.26 0 0 1 12 6.954zM6.02 8.94a5.928 5.928 0 0 1 3.935 1.506 5.936 5.936 0 0 1 0 8.828A5.937 5.937 0 1 1 6.02 8.94zm11.96 0a5.937 5.937 0 1 1 0 11.874 5.937 5.937 0 0 1 0-11.874zM6.02 10.89a3.987 3.987 0 1 0 0 7.974 3.987 3.987 0 0 0 0-7.974zm11.96 0a3.987 3.987 0 1 0 0 7.974 3.987 3.987 0 0 0 0-7.974zm-11.96 1.69a2.297 2.297 0 1 1 0 4.594 2.297 2.297 0 0 1 0-4.594zm11.96 0a2.297 2.297 0 1 1 0 4.594 2.297 2.297 0 0 1 0-4.594z"/>
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
