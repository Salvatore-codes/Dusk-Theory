import React, { useState, useEffect } from 'react';
import { Crown, ArrowRight, ShieldCheck, Truck, Award, Sparkles } from 'lucide-react';

interface HeroCarouselProps {
  onExploreClick: () => void;
}

const SLIDES = [
  {
    title: 'THE ROYAL GOLD EDITION',
    subtitle: '280 GSM Heavyweight French Terry Cotton & 24K Embossed Metallic Gold Prints',
    badge: 'EXCLUSIVE DROP 2026',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'SHOP GOLD COLLECTION'
  },
  {
    title: 'OVERSIZED STREETWEAR CULT',
    subtitle: 'Boxy Drop-Shoulder Silhouettes Tailored for Modern High-Street Fashion',
    badge: 'TRENDING OVERSIZED',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'EXPLORE OVERSIZED TEES'
  },
  {
    title: 'WINTER FLEECE & HOODIES',
    subtitle: '380 GSM Heavyweight Double-Lined Fleece with Solid Gold Aglet Detailing',
    badge: 'WINTER ESSENTIALS',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1600&q=80',
    ctaText: 'SHOP HOODIES'
  }
];

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0b0c10' }}>
      <div style={{
        position: 'relative',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: idx === currentSlide ? 1 : 0,
              transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
              backgroundImage: `linear-gradient(90deg, rgba(11,12,16,0.95) 0%, rgba(11,12,16,0.65) 50%, rgba(11,12,16,0.85) 100%), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 24px',
              width: '100%',
              zIndex: 2
            }}>
              <div style={{ maxWidth: '640px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid #FFD700',
                  color: '#FFD700',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  marginBottom: '20px'
                }}>
                  <Crown size={14} />
                  <span>{slide.badge}</span>
                </div>

                <h1 style={{
                  fontSize: 'calc(28px + 1.8vw)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: '16px',
                  letterSpacing: '-0.5px'
                }}>
                  <span className="gold-text">{slide.title}</span>
                </h1>

                <p style={{
                  color: '#C2BBB0',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                  fontWeight: 400
                }}>
                  {slide.subtitle}
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <button onClick={onExploreClick} className="btn-gold" style={{ padding: '14px 32px', fontSize: '14px' }}>
                    <span>{slide.ctaText}</span>
                    <ArrowRight size={18} />
                  </button>

                  <button onClick={onExploreClick} className="btn-gold-outline" style={{ padding: '14px 28px', fontSize: '14px' }}>
                    <Sparkles size={16} />
                    <span>VIEW ALL DROPS</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 10
        }}>
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: idx === currentSlide ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: idx === currentSlide ? '#FFD700' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Gold Trust Bar */}
      <div style={{
        background: '#141418',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        padding: '16px 24px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Award size={24} color="#FFD700" />
            <div>
              <div style={{ color: '#FBF8F3', fontSize: '13px', fontWeight: 700 }}>280 GSM LUXURY COTTON</div>
              <div style={{ color: '#8E887D', fontSize: '11px' }}>Bio-Washed & Pre-Shrunk</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Truck size={24} color="#FFD700" />
            <div>
              <div style={{ color: '#FBF8F3', fontSize: '13px', fontWeight: 700 }}>EXPRESS ALL-INDIA SHIPPING</div>
              <div style={{ color: '#8E887D', fontSize: '11px' }}>Delivered in 2-4 Business Days</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck size={24} color="#FFD700" />
            <div>
              <div style={{ color: '#FBF8F3', fontSize: '13px', fontWeight: 700 }}>100% CASH ON DELIVERY</div>
              <div style={{ color: '#8E887D', fontSize: '11px' }}>Pay on Hand at Doorstep</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
