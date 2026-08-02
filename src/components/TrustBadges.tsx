import React from 'react';
import { Award, RefreshCw, Lock, Headphones, MapPin } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <section style={{ padding: '50px 24px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px'
      }}>
        <div style={{ textAlign: 'center', padding: '16px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--gold-radiant)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px auto',
            boxShadow: '0 0 15px var(--gold-glow)'
          }}>
            <Award size={24} color="var(--gold-radiant)" />
          </div>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 800, marginBottom: '4px' }}>280 GSM LUXURY COTTON</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Bio-washed, zero shrinkage, premium touch</p>
        </div>

        <div style={{ textAlign: 'center', padding: '16px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--gold-radiant)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px auto',
            boxShadow: '0 0 15px var(--gold-glow)'
          }}>
            <MapPin size={24} color="var(--gold-radiant)" />
          </div>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 800, marginBottom: '4px' }}>FLAGSHIP STORE</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Kumaran Tower, Dindigul - 624004</p>
        </div>

        <div style={{ textAlign: 'center', padding: '16px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--gold-radiant)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px auto',
            boxShadow: '0 0 15px var(--gold-glow)'
          }}>
            <RefreshCw size={24} color="var(--gold-radiant)" />
          </div>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 800, marginBottom: '4px' }}>7-DAY EASY RETURNS</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Instant doorstep pickup & refund guarantee</p>
        </div>

        <div style={{ textAlign: 'center', padding: '16px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--gold-radiant)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px auto',
            boxShadow: '0 0 15px var(--gold-glow)'
          }}>
            <Lock size={24} color="var(--gold-radiant)" />
          </div>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 800, marginBottom: '4px' }}>SECURE PAYMENTS & COD</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>UPI, Cards, NetBanking & Cash on Delivery</p>
        </div>

        <div style={{ textAlign: 'center', padding: '16px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid var(--gold-radiant)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px auto',
            boxShadow: '0 0 15px var(--gold-glow)'
          }}>
            <Headphones size={24} color="var(--gold-radiant)" />
          </div>
          <h4 style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 800, marginBottom: '4px' }}>24/7 VIP SUPPORT</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>WhatsApp & Email dedicated customer care</p>
        </div>
      </div>
    </section>
  );
};
