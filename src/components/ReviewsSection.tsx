import React from 'react';
import { Star, CheckCircle, Crown, ThumbsUp } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Vikramaditya S.',
    location: 'Mumbai, MH',
    rating: 5,
    date: '2 days ago',
    title: 'Mind-Blowing Quality & Heavy Cotton Fabric!',
    comment: 'Ordered the Dusk Theory Heavyweight Tee. The 280 GSM cotton feels so rich and heavy, and the metallic gold embossing looks ultra-premium. Shipped super fast in 2 days!',
    verified: true,
    product: 'Dusk Theory Heavyweight 280 GSM Gold Crest Tee'
  },
  {
    id: 2,
    name: 'Ananya R.',
    location: 'Bengaluru, KA',
    rating: 5,
    date: '1 week ago',
    title: 'The Best Hoodie I Own in 2026',
    comment: 'The Dusk Empire Fleece Hoodie is incredible. Thick fleece lining, gold metal drawstrings, and perfect boxy streetwear fit. Worth every rupee.',
    verified: true,
    product: 'Dusk Theory Empire 380 GSM Gold Aglet Hoodie'
  },
  {
    id: 3,
    name: 'Rohan K.',
    location: 'Delhi, DL',
    rating: 5,
    date: '2 weeks ago',
    title: 'Stunning Cyberpunk Design',
    comment: 'The Golden Phoenix print is sharp and vibrant even after 4 washes. Cash on Delivery was seamless. Will definitely order again!',
    verified: true,
    product: 'Dusk Theory Phoenix Cyberpunk Oversized Tee'
  }
];

export const ReviewsSection: React.FC = () => {
  return (
    <section style={{ padding: '70px 24px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', transition: 'background 0.4s ease' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold-radiant)', fontSize: '12px', fontWeight: 800, letterSpacing: '1px', marginBottom: '8px' }}>
            <Crown size={14} />
            <span>VERIFIED BUYER REVIEWS & REPUTATION</span>
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--text-primary)' }}>
            WHAT OUR <span className="gold-text">COMMUNITY SAYS</span>
          </h2>
        </div>

        {/* Rating Overview Card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--gold-primary)',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          alignItems: 'center',
          boxShadow: 'var(--shadow-dark)'
        }}>
          {/* Average Rating */}
          <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-color)', paddingRight: '20px' }}>
            <div style={{ fontSize: '48px', fontWeight: 900, color: 'var(--gold-radiant)', lineHeight: 1 }}>4.9</div>
            <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--gold-radiant)', margin: '8px 0' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="var(--gold-radiant)" />
              ))}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 700 }}>Based on 10,480+ Reviews</div>
          </div>

          {/* Rating Breakdown Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { stars: 5, pct: 92 },
              { stars: 4, pct: 6 },
              { stars: 3, pct: 2 },
              { stars: 2, pct: 0 },
              { stars: 1, pct: 0 }
            ].map(row => (
              <div key={row.stars} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px' }}>
                <span style={{ color: 'var(--text-primary)', width: '45px', fontWeight: 700 }}>{row.stars} Stars</span>
                <div style={{ flex: 1, height: '6px', background: 'var(--bg-secondary)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${row.pct}%`, height: '100%', background: 'var(--gold-radiant)' }} />
                </div>
                <span style={{ color: 'var(--text-muted)', width: '35px', textAlign: 'right' }}>{row.pct}%</span>
              </div>
            ))}
          </div>

          {/* Guarantee Badge */}
          <div style={{ textAlign: 'center', background: 'rgba(212, 175, 55, 0.1)', padding: '20px', borderRadius: '12px', border: '1px dashed var(--gold-primary)' }}>
            <CheckCircle size={32} color="var(--gold-radiant)" style={{ marginBottom: '8px' }} />
            <div style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 900 }}>100% VERIFIED REVIEWS</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '4px' }}>All reviews are submitted by authenticated buyers post-delivery.</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {REVIEWS.map(rev => (
            <div
              key={rev.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', color: 'var(--gold-radiant)' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--gold-radiant)" />
                    ))}
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>{rev.date}</span>
                </div>

                <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 800, marginBottom: '8px' }}>{rev.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>"{rev.comment}"</p>
              </div>

              <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: 800 }}>{rev.name}</div>
                  <div style={{ color: 'var(--accent-green)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                    <CheckCircle size={12} />
                    <span>Verified Buyer ({rev.location})</span>
                  </div>
                </div>

                <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}>
                  <ThumbsUp size={14} color="var(--gold-radiant)" />
                  <span>Helpful</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
