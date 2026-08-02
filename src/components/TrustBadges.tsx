import React from 'react';
import { Award, RefreshCw, Lock, Headphones } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <section style={{ padding: '50px 24px', background: '#0b0c10', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '30px'
      }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.05))',
            border: '1px solid #FFD700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)'
          }}>
            <Award size={26} color="#FFD700" />
          </div>
          <h4 style={{ color: '#FBF8F3', fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>280 GSM LUXURY COTTON</h4>
          <p style={{ color: '#8E887D', fontSize: '12px' }}>Bio-washed, zero shrinkage, premium soft touch</p>
        </div>

        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.05))',
            border: '1px solid #FFD700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)'
          }}>
            <RefreshCw size={26} color="#FFD700" />
          </div>
          <h4 style={{ color: '#FBF8F3', fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>7-DAY EASY RETURNS</h4>
          <p style={{ color: '#8E887D', fontSize: '12px' }}>Instant doorstep pickup & refund guarantee</p>
        </div>

        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.05))',
            border: '1px solid #FFD700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)'
          }}>
            <Lock size={26} color="#FFD700" />
          </div>
          <h4 style={{ color: '#FBF8F3', fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>SECURE PAYMENTS & COD</h4>
          <p style={{ color: '#8E887D', fontSize: '12px' }}>UPI, Cards, NetBanking & Cash on Delivery</p>
        </div>

        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.05))',
            border: '1px solid #FFD700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)'
          }}>
            <Headphones size={26} color="#FFD700" />
          </div>
          <h4 style={{ color: '#FBF8F3', fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>24/7 VIP SUPPORT</h4>
          <p style={{ color: '#8E887D', fontSize: '12px' }}>WhatsApp & Email dedicated customer assistance</p>
        </div>
      </div>
    </section>
  );
};
