import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Hotel Policies | Hotel Neelagiri Heritage',
  description: 'Standard hotel policies and guidelines for guests at Hotel Neelagiri Heritage.',
};

export default function HotelPolicy() {
  return (
    <main style={{ padding: '140px 20px 80px', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px', backgroundColor: '#fff', padding: '60px', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--primary-violet)', marginBottom: '10px' }}>Hotel Policies</h1>
        <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-gold)', marginBottom: '40px' }}></div>
        
        <div style={{ color: '#555', lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <p>
            Welcome to <strong>Hotel Neelagiri Heritage</strong>. To ensure a comfortable, safe, and pleasant stay for all our guests, please review our standard hotel policies below.
          </p>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>1. Check-In & Check-Out</h2>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li><strong>Check-In Time:</strong> 14:00 (2:00 PM) onwards.</li>
              <li><strong>Check-Out Time:</strong> 12:00 (12:00 PM) noon.</li>
              <li>Early check-in and late check-out are subject to room availability and may incur additional charges. Please contact the front desk in advance to make arrangements.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>2. Identification Requirements</h2>
            <p>
              As per government regulations, a valid original photo identification document (Aadhar Card, Passport, Voter ID, or Driving License) must be presented by all guests at the time of check-in. PAN cards are not accepted as valid proof of identity for check-in. Foreign nationals must present a valid Passport and Visa.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>3. Food and Beverage Policy</h2>
            <p>
              Please note that <strong>Hotel Neelagiri Heritage does not feature an in-house restaurant</strong>. However, to ensure your culinary needs are met:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Guests are welcome to order food via third-party delivery services (e.g., Swiggy, Zomato) directly to the hotel.</li>
              <li>Outside food may be consumed comfortably within the privacy of your room.</li>
              <li>Basic tea and coffee making facilities are provided in all rooms.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>4. Smoking & Alcohol Policy</h2>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>All our guest rooms and enclosed public areas are strictly <strong>100% smoke-free</strong>. Smoking inside the rooms will result in a deep-cleaning fee. Guests may smoke only in designated outdoor areas.</li>
              <li>The consumption of alcohol in public areas of the hotel is strictly prohibited.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>5. Pet Policy</h2>
            <p>
              While we love animals, pets are <strong>not allowed</strong> on the hotel premises to ensure the comfort and safety of all our guests.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>6. Damage to Hotel Property</h2>
            <p>
              We reserve the right to charge guests the cost of rectifying damage caused by the deliberate, negligent, or reckless act of the guest to the hotel&apos;s property or structure. Should this damage come to light after the guest has departed, we reserve the right to charge the guest&apos;s credit card or send an invoice for the amount to the registered address.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>7. Visitors Policy</h2>
            <p>
              For security reasons, visitors are not permitted in guest rooms after 20:00 (8:00 PM). All visitors must register at the front desk and present valid identification. Meetings with visitors should ideally be conducted in the hotel lobby.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
