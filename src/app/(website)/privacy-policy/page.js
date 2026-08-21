import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Hotel Neelagiri Heritage',
  description: 'Privacy Policy and Data Protection standards for Hotel Neelagiri Heritage.',
};

export default function PrivacyPolicy() {
  return (
    <main style={{ padding: '140px 20px 80px', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px', backgroundColor: '#fff', padding: '60px', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--primary-violet)', marginBottom: '10px' }}>Privacy Policy</h1>
        <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-gold)', marginBottom: '40px' }}></div>
        
        <div style={{ color: '#555', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <p>
            At <strong>Hotel Neelagiri Heritage</strong>, we are committed to protecting the privacy and security of our guests. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our hotel, use our website, or interact with our booking systems.
          </p>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>1. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when making a reservation, checking in, or communicating with us. This may include:</p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and residential address.</li>
              <li><strong>Identification Documents:</strong> Government-issued ID, passport, or driver&apos;s license as required by local law.</li>
              <li><strong>Payment Information:</strong> Credit card details, billing address, and transaction history (processed securely via our payment gateways).</li>
              <li><strong>Stay Preferences:</strong> Room preferences, special requests, and feedback.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>2. How We Use Your Information</h2>
            <p>Your information is used for the following operational and legal purposes:</p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>To process and manage your reservations and payments.</li>
              <li>To provide customer support and respond to inquiries.</li>
              <li>To comply with legal obligations, including maintaining guest registers as mandated by local authorities.</li>
              <li>To improve our services, website, and overall guest experience.</li>
              <li>To send you administrative information, such as booking confirmations and policies.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>3. Data Sharing and Disclosure</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information only in the following situations:</p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li><strong>Service Providers:</strong> With third-party booking engines (e.g., letsbook.me) and payment processors necessary to facilitate your stay.</li>
              <li><strong>Legal Requirements:</strong> With law enforcement or government authorities when required by law or to protect our legal rights.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>5. Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>6. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              <br/><br/>
              <strong>Hotel Neelagiri Heritage</strong><br/>
              Opposite Kozhikode Railway Station, Annie Hall Road, Palayam<br/>
              Kozhikode – 673002<br/>
              Phone: +91 8075 838 228<br/>
              Email: reservations@neelagiriheritage.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
