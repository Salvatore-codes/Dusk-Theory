import { Crown, Truck, Sparkles, Moon } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #07080a 0%, #1c180e 50%, #07080a 100%)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.35)',
      color: '#F5E6BE',
      padding: '9px 0',
      fontSize: '12px',
      fontWeight: 700,
      position: 'relative',
      zIndex: 100,
      letterSpacing: '0.5px'
    }}>
      <div className="ticker-wrap">
        <div className="ticker-content" style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Moon size={14} color="#FFD700" />
            <span>DUSK THEORY LUXURY DROP NOW LIVE &bull; USE CODE <strong style={{ color: '#FFD700', textDecoration: 'underline' }}>DUSK10</strong> FOR 10% OFF</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={14} color="#FFD700" />
            <span>FREE EXPRESS SHIPPING ON ORDERS OVER ₹999</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Crown size={14} color="#FFD700" />
            <span>280 GSM HEAVYWEIGHT FRENCH TERRY COTTON & 24K GOLD PRINTMAKING</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={14} color="#FFD700" />
            <span>100% CASH ON DELIVERY & HASSLE-FREE 7-DAY RETURNS</span>
          </span>
          {/* Duplicate for seamless loop */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Moon size={14} color="#FFD700" />
            <span>DUSK THEORY LUXURY DROP NOW LIVE &bull; USE CODE <strong style={{ color: '#FFD700', textDecoration: 'underline' }}>DUSK10</strong> FOR 10% OFF</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={14} color="#FFD700" />
            <span>FREE EXPRESS SHIPPING ON ORDERS OVER ₹999</span>
          </span>
        </div>
      </div>
    </div>
  );
};
