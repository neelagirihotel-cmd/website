'use client';

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerCustom.css';
import styles from './BookingWidget.module.css';

export default function BookingWidget() {
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  
  const [minCheckin, setMinCheckin] = useState(null);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCheckinDate(today);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCheckoutDate(tomorrow);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinCheckin(today);
  }, []);

  const handleCheckinChange = (date) => {
    setCheckinDate(date);
    
    if (date) {
      const newMinCheckoutDate = new Date(date);
      newMinCheckoutDate.setDate(newMinCheckoutDate.getDate() + 1);
      
      if (checkoutDate && checkoutDate <= date) {
        setCheckoutDate(newMinCheckoutDate);
      }
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (!checkinDate || !checkoutDate) {
        alert("Please select check-in and check-out dates.");
        return;
    }
    const checkinStr = formatDate(checkinDate);
    const checkoutStr = formatDate(checkoutDate);
    
    const url = `https://letsbook.me/booking/022577?checkin=${checkinStr}&checkout=${checkoutStr}&adults=${adults}&children=${children}`;
    window.location.href = url;
  };

  const getMinCheckout = () => {
    if (checkinDate) {
      const min = new Date(checkinDate);
      min.setDate(min.getDate() + 1);
      return min;
    }
    if (minCheckin) {
      const min = new Date(minCheckin);
      min.setDate(min.getDate() + 1);
      return min;
    }
    return new Date();
  };

  return (
    <div className={styles.bookingWidget}>
      <div className={styles.widgetContainer}>
        <div className={styles.inputGroup}>
          <label>Check In</label>
          <DatePicker 
            selected={checkinDate} 
            onChange={handleCheckinChange} 
            minDate={minCheckin}
            dateFormat="MMM d, yyyy"
            required 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Check Out</label>
          <DatePicker 
            selected={checkoutDate} 
            onChange={(date) => setCheckoutDate(date)} 
            minDate={getMinCheckout()}
            dateFormat="MMM d, yyyy"
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
