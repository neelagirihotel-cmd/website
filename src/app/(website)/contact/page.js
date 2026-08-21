'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../shared.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save to local leads file via API
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      // 2. Open WhatsApp Web / App
      const messageText = `Hello Hotel Neelagiri Heritage, I would like to make an enquiry.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Check-in:* ${formData.checkIn}\n*Check-out:* ${formData.checkOut}\n*Room Type:* ${formData.roomType || 'Not specified'}\n*Message:* ${formData.message}`;
      const url = `https://wa.me/918075838228?text=${encodeURIComponent(messageText)}`;

      window.open(url, '_blank');

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        checkIn: '',
        checkOut: '',
        roomType: '',
        message: ''
      });
      alert('Your enquiry has been prepared in WhatsApp. We look forward to hosting you!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try contacting us directly via phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <header className={styles.pageHeader}>
        <Image src="/images/heroenquire.webp" alt="Contact Us" fill style={{ objectFit: 'cover' }} priority />
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>We Look Forward to Welcoming You</h1>
        </div>
      </header>

      <section className="container">
        <div id="enquiry" className={styles.contentBlock} style={{ maxWidth: '800px', backgroundColor: '#f8f8fa', padding: '50px', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
          <h2 className={styles.blockTitle} style={{ marginBottom: '10px' }}>Send an Enquiry</h2>
          <p className={styles.blockText} style={{ marginBottom: '40px' }}>
            Fill out the form below and it will instantly connect you to our reservations team via WhatsApp.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px', textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#555' }}>Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#555' }}>Phone *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#555' }}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#555' }}>Room Type</label>
                <select name="roomType" value={formData.roomType} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit', backgroundColor: 'white' }}>
                  <option value="">Select a room...</option>
                  <option value="Smart Room">Smart Room</option>
                  <option value="Business Suite">Business Suite</option>
                  <option value="Premium Suite">Premium Suite</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#555' }}>Check-in Date *</label>
                <input required type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#555' }}>Check-out Date *</label>
                <input required type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#555' }}>Special Requests / Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ marginTop: '10px', width: '100%', padding: '16px' }}>
              {isSubmitting ? 'Processing...' : 'Send Enquiry via WhatsApp'}
            </button>
          </form>
        </div>

        <div className={styles.grid} style={{ marginBottom: '80px', marginTop: '60px' }}>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Address</h3>
              <p>Opposite Kozhikode Railway Station<br />
                Annie Hall Road<br />
                Palayam<br />
                Kozhikode – 673002</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Contact Information</h3>
              <p>Phone: +91 8075 838 228</p>
              <p>WhatsApp: +91 8075 838 228</p>
              <p>Email: info@neelagiriheritage.com</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Hotel Timings</h3>
              <p>Check-in: 2:00 PM</p>
              <p>Check-out: 12:00 PM</p>
            </div>
          </div>
        </div>


        <div className={styles.contentBlock} style={{ maxWidth: '1000px' }}>
          <h2 className={styles.blockTitle}>Find Us</h2>
          <p className={styles.blockText}>
            Conveniently located opposite Kozhikode Railway Station, with quick access to the city's business districts, attractions, and major transport hubs.
          </p>
          <div style={{ marginTop: '40px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <iframe
              src="https://maps.google.com/maps?q=Hotel+Neelagiri+Heritage,+Kozhikode&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
