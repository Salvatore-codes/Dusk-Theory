import React from 'react';
import { Crown, ArrowUpRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (category: string) => void;
}

const CATEGORY_TILES = [
  {
    name: 'Luxury Gold Collection',
    count: '12 Luxury Drops',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    tag: '👑 FEATURED',
    isLarge: true
  },
  {
    name: 'Oversized Tees',
    count: '28 Styles',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    tag: '🔥 HOT SELLER'
  },
  {
    name: 'Hoodies & Sweatshirts',
    count: '18 Styles',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    tag: '⚡ WINTER FLEECE'
  },
  {
    name: 'Graphic Tees',
    count: '34 Styles',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    tag: '✨ NEW DROPS'
  },
  {
    name: 'Accessories',
    count: '15 Items',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    tag: '💎 LEATHER & BRASS'
  }
];

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section style={{ padding: '60px 24px', background: '#0b0c10' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#FFD700', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }}>
              <Crown size={14} />
              <span>CURATED COLLECTIONS</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '4px' }}>
              EXPLORE BY <span className="gold-text">CATEGORY</span>
            </h2>
          </div>
        </div>

        {/* Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {CATEGORY_TILES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCategory(cat.name)}
              style={{
                position: 'relative',
                height: cat.isLarge ? '380px' : '280px',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#FFD700';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 175, 55, 0.25)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />

              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(11,12,16,0.2) 0%, rgba(11,12,16,0.85) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px'
              }}>
                {/* Top Tag */}
                <div>
                  <span style={{
                    background: 'rgba(11, 12, 16, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #D4AF37',
                    color: '#FFD700',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '6px 12px',
                    borderRadius: '20px',
                    letterSpacing: '0.5px'
                  }}>
                    {cat.tag}
                  </span>
                </div>

                {/* Bottom Content */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <h3 style={{ color: '#FBF8F3', fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>
                      {cat.name}
                    </h3>
                    <p style={{ color: '#D4AF37', fontSize: '13px', fontWeight: 600 }}>
                      {cat.count}
                    </p>
                  </div>

                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFD700, #C5A059)',
                    color: '#0b0c10',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
