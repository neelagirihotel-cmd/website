'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './CookieBanner.css';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          We use cookies to improve your browsing experience, analyze site traffic, and assist in our marketing efforts. By clicking &quot;Accept&quot;, you agree to our use of cookies as described in our <Link href="/privacy-policy" style={{ textDecoration: 'underline', color: 'var(--accent-gold)' }}>Privacy Policy</Link>.
        </p>
        <div className="cookie-buttons">
          <button onClick={handleDecline} className="btn-outline cookie-btn-outline">Decline</button>
          <button onClick={handleAccept} className="btn-primary cookie-btn-primary">Accept</button>
        </div>
      </div>
    </div>
  );
}
