'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookUrl, setBookUrl] = useState('https://letsbook.me/booking/022577');
  const pathname = usePathname();

  // Close menu when clicking a link
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Generate booking url with dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const checkin = today.toISOString().split('T')[0];
    const checkout = tomorrow.toISOString().split('T')[0];
    setBookUrl(`https://letsbook.me/booking/022577?checkin=${checkin}&checkout=${checkout}&adults=2&children=0`);

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const noHeroPaths = ['/privacy-policy', '/hotel-policy', '/login'];
  const isNoHeroPage = noHeroPaths.includes(pathname) || (pathname?.startsWith('/accommodation/') && pathname !== '/accommodation');
  const isOpaque = scrolled || mobileMenuOpen || isNoHeroPage;

  return (
    <header className={`header ${isOpaque ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <Link href="/">
            <Image 
              src="/logo.webp" 
              alt="Hotel Neelagiri Heritage Logo" 
              width={160} 
              height={80} 
              style={{ objectFit: 'contain', width: '160px', height: 'auto' }}
              priority
            />
          </Link>
        </div>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/heritage" onClick={closeMenu}>Our Heritage</Link>
          <Link href="/accommodation" onClick={closeMenu}>Accommodation</Link>
          <Link href="/wellness" onClick={closeMenu}>Wellness</Link>
          <Link href="/kozhikode" onClick={closeMenu}>Discover Kozhikode</Link>
          <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <div className="nav-buttons">
            <Link href="/contact#enquiry" onClick={closeMenu}>
              <button className={isOpaque ? "btn-outline" : "btn-outline-gold"} style={{ padding: '8px 16px', fontSize: '0.75rem' }}>Enquire Now</button>
            </Link>
            <a href={bookUrl} onClick={closeMenu}>
              <button className="btn-primary" style={{ padding: '8px 24px', fontSize: '0.75rem' }}>Book Your Stay</button>
            </a>
          </div>
        </nav>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </header>
  );
}
