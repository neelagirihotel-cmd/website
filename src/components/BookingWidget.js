'use client';

import React, { useState, useEffect } from 'react';
import styles from './BookingWidget.module.css';

export default function BookingWidget() {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  
  const [minCheckin, setMinCheckin] = useState('');
  const [minCheckout, setMinCheckout] = useState('');

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const todayStr = today.toISOString().split('T')[0];
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCheckin(todayStr);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCheckout(tomorrowStr);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinCheckin(todayStr);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinCheckout(tomorrowStr);
  }, []);

  const handleCheckinChange = (e) => {
    const newCheckin = e.target.value;
    setCheckin(newCheckin);
    
    if (newCheckin) {
      const checkinDate = new Date(newCheckin);
      
      const newMinCheckoutDate = new Date(checkinDate);
      newMinCheckoutDate.setDate(newMinCheckoutDate.getDate() + 1);
      const newMinCheckoutStr = newMinCheckoutDate.toISOString().split('T')[0];
      
      setMinCheckout(newMinCheckoutStr);

      if (checkout && new Date(checkout) <= checkinDate) {
        setCheckout(newMinCheckoutStr);
      }
    }
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (!checkin || !checkout) {
        alert("Please select check-in and check-out dates.");
        return;
    }
    const url = `https://letsbook.me/booking/022577?checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}`;
    window.location.href = url;
  };

  return (
    <div className={styles.bookingWidget}>
      <div className={styles.widgetContainer}>
        <div className={styles.inputGroup}>
          <label>Check In</label>
          <input 
            type="date" 
            value={checkin} 
            min={minCheckin}
            onChange={handleCheckinChange} 
            required 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Check Out</label>
          <input 
            type="date" 
            value={checkout} 
            min={minCheckout}
            onChange={(e) => setCheckout(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Adults</label>
          <select value={adults} onChange={(e) => setAdults(e.target.value)}>
            {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num}</option>)}
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label>Children</label>
          <select value={children} onChange={(e) => setChildren(e.target.value)}>
            {[0, 1, 2, 3, 4].map(num => <option key={num} value={num}>{num}</option>)}
          </select>
        </div>
        <div className={styles.buttonGroup}>
          <button className={`btn-primary ${styles.bookButton}`} onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
