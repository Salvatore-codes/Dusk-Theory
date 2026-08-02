import React from 'react';
import { Crown, Truck, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #141418 0%, #2A2415 50%, #141418 100%)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      color: '#F3E5AB',
      padding: '8px 0',
      fontSize: '13px',
      fontWeight: 600,
      position: 'relative',
      zIndex: 100
    }}>
      <div className="ticker-wrap">
        <div className="ticker-content" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Crown size={15} color="#FFD700" />
            <span>LUXURY GOLD COLLECTION NOW LIVE &bull; USE CODE <strong style={{ color: '#FFD700', textDecoration: 'underline' }}>GOLD10</strong> FOR 10% OFF</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={15} color="#FFD700" />
            <span>FREE EXPRESS SHIPPING ON ORDERS OVER ₹999</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={15} color="#FFD700" />
            <span>100% CASH ON DELIVERY & HASSLE-FREE 7-DAY RETURNS</span>
          </span>
          {/* Duplicate for seamless infinite loop */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Crown size={15} color="#FFD700" />
            <span>LUXURY GOLD COLLECTION NOW LIVE &bull; USE CODE <strong style={{ color: '#FFD700', textDecoration: 'underline' }}>GOLD10</strong> FOR 10% OFF</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={15} color="#FFD700" />
            <span>FREE EXPRESS SHIPPING ON ORDERS OVER ₹999</span>
          </span>
        </div>
      </div>
    </div>
  );
};
