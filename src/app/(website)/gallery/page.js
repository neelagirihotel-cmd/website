'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from '../shared.module.css';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const allImages = [
  // --- Hotel ---
  { src: '/images/gallery/hotel/hero.webp', alt: 'Hotel Neelagiri Heritage Exterior', category: 'Hotel' },
  { src: '/images/gallery/hotel/heroenquire.webp', alt: 'Hotel Interior', category: 'Hotel' },
  { src: '/images/gallery/hotel/bell-desk-n12.webp', alt: 'Bell Desk - N12', category: 'Hotel' },
  { src: '/images/gallery/hotel/bell-desk-n13.webp', alt: 'Bell Desk - N13', category: 'Hotel' },
  { src: '/images/gallery/hotel/outdoors-n2.webp', alt: 'Outdoors - N2', category: 'Hotel' },
  { src: '/images/gallery/hotel/outdoors-n4.webp', alt: 'Outdoors - N4', category: 'Hotel' },
  { src: '/images/gallery/hotel/outdoors-n8.webp', alt: 'Outdoors - N8', category: 'Hotel' },
  { src: '/images/gallery/hotel/outdoors-n9.webp', alt: 'Outdoors - N9', category: 'Hotel' },

  // --- Rooms ---
  { src: '/images/gallery/rooms/business-suite.webp', alt: 'Business Suite', category: 'Rooms' },
  { src: '/images/gallery/rooms/business-suite-bs34.webp', alt: 'Business Suite - BS34', category: 'Rooms' },
  { src: '/images/gallery/rooms/business-suite-bs40.webp', alt: 'Business Suite - BS40', category: 'Rooms' },
  { src: '/images/gallery/rooms/business-suite-bs42.webp', alt: 'Business Suite - BS42', category: 'Rooms' },
  { src: '/images/gallery/rooms/business-suite-business-suite2.webp', alt: 'Business Suite - BUSINESS SUITE2', category: 'Rooms' },
  { src: '/images/gallery/rooms/premium-suite-18dc13cc-fcf5-4422-af83-b1cfca101ae1---copy.webp', alt: 'Premium Suite - 18dc13cc-fcf5-4422-af83-b1cfca101ae1 - Copy', category: 'Rooms' },
  { src: '/images/gallery/rooms/premium-suite-pm24.webp', alt: 'Premium Suite - PM24', category: 'Rooms' },
  { src: '/images/gallery/rooms/premium-suite-pm26.webp', alt: 'Premium Suite - PM26', category: 'Rooms' },
  { src: '/images/gallery/rooms/premium-suite-premium-suite.webp', alt: 'Premium Suite - premium-suite', category: 'Rooms' },

  // --- Heritage ---
  { src: '/images/gallery/hotel/our-heritage-art1.webp', alt: 'Our Heritage - Art1', category: 'Heritage' },
  { src: '/images/gallery/hotel/our-heritage-art2.webp', alt: 'Our Heritage - Art2', category: 'Heritage' },
  { src: '/images/gallery/hotel/our-heritage-ashwamedham.webp', alt: 'Our Heritage - ashwamedham', category: 'Heritage' },
  { src: '/images/gallery/hotel/our-heritage-khasak-2.webp', alt: 'Our Heritage - khasak-2', category: 'Heritage' },
  { src: '/images/gallery/hotel/our-heritage-nilgiri-art-2.webp', alt: 'Our Heritage - Nilgiri Art 2', category: 'Heritage' },
  { src: '/images/gallery/hotel/our-heritage-njan-gandarvan.webp', alt: 'Our Heritage - Njan gandarvan', category: 'Heritage' },
  { src: '/images/gallery/hotel/our-heritage-prakasham-.webp', alt: 'Our Heritage - Prakasham', category: 'Heritage' },
  { src: '/images/gallery/hotel/our-heritage-premalekhanam-2.webp', alt: 'Our Heritage - premalekhanam-2', category: 'Heritage' },
  { src: '/images/gallery/hotel/our-heritage-randamoozham.webp', alt: 'Our Heritage - randamoozham', category: 'Heritage' },

  // --- Boardroom ---
  { src: '/images/gallery/boardroom/board-room-br13.webp', alt: 'Board Room - BR13', category: 'Boardroom' },
  { src: '/images/gallery/boardroom/board-room-br15.webp', alt: 'Board Room - BR15', category: 'Boardroom' },
  { src: '/images/gallery/boardroom/board-room-br8.webp', alt: 'Board Room - BR8', category: 'Boardroom' },

  // --- City Experiences ---
  { src: '/images/gallery/city-experiences/beypore.webp', alt: 'Beypore', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/churam.webp', alt: 'Churam', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/clt.webp', alt: 'Calicut City', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/kappad.webp', alt: 'Kappad Beach', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/kozhikode-beach.webp', alt: 'Kozhikode Beach', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/mananchira.webp', alt: 'Mananchira Square', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/mishkal.webp', alt: 'Mishkal Mosque', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/sarovaram.webp', alt: 'Sarovaram Biopark', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/sm-street.webp', alt: 'SM Street', category: 'City Experiences' },
  { src: '/images/gallery/city-experiences/tali.webp', alt: 'Tali Temple', category: 'City Experiences' },
];

const categories = ['All', 'Hotel', 'Rooms', 'Heritage', 'Boardroom', 'City Experiences'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('50% 50%');

  const filteredImages = activeCategory === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    setIsZoomed(false);
  }, [filteredImages.length]);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  }, [filteredImages.length]);

  const handleClose = () => {
    setSelectedIndex(null);
    setIsZoomed(false);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomOrigin(`${x}% ${y}%`);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  // Reset selected image when changing category
  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  return (
    <main>
      <header className={styles.pageHeader}>
        <Image src="https://images.unsplash.com/photo-1542314831-c6a4d14d8c1d?q=80&w=2000&auto=format&fit=crop" alt="Gallery" fill style={{ objectFit: 'cover' }} priority />
        <div className={styles.pageOverlay}></div>
        <div className={styles.pageHeaderContent}>
          <h1 className={`${styles.pageTitle} fade-in delay-1`}>Moments Worth Remembering</h1>
          <p className={`${styles.pageSubtitle} fade-in delay-2`}>Discover the elegance, comfort, and experiences that define Hotel Neelagiri Heritage.</p>
        </div>
      </header>

      <section className="container">
        <div className={styles.contentBlock}>
          <h2 className={styles.blockTitle}>Gallery Categories</h2>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map((category) => (
              <button 
                key={category}
                className={activeCategory === category ? 'btn-primary' : 'btn-outline'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid} style={{ marginBottom: '80px' }}>
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedIndex(index)}
                style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', cursor: 'pointer' }}
                className={styles.galleryImageWrapper}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill
                  unoptimized={true}
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px', color: '#777', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <p style={{ fontSize: '1.2rem' }}>More photos coming soon to this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedIndex !== null && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999,
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }} onClick={handleClose}>
          <button 
            onClick={handleClose}
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10000 }}
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={handlePrev}
            style={{ position: 'absolute', left: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10000 }}
          >
            <ChevronLeft size={48} />
          </button>

          <div 
            style={{ 
              position: 'relative', 
              width: '80%', 
              height: '80%', 
              cursor: isZoomed ? 'zoom-out' : 'zoom-in',
              overflow: 'hidden'
            }} 
            onClick={handleImageClick}
            onMouseMove={handleMouseMove}
          >
            <Image 
              src={filteredImages[selectedIndex].src} 
              alt={filteredImages[selectedIndex].alt} 
              fill
              unoptimized={true}
              style={{ 
                objectFit: 'contain', 
                transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
                transformOrigin: zoomOrigin,
                transition: isZoomed ? 'none' : 'transform 0.3s ease'
              }} 
            />
          </div>

          <button 
            onClick={handleNext}
            style={{ position: 'absolute', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10000 }}
          >
            <ChevronRight size={48} />
          </button>
          
          <div style={{ position: 'absolute', bottom: '20px', color: 'white', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>{selectedIndex + 1} / {filteredImages.length}</p>
          </div>
        </div>
      )}
    </main>
  );
}
