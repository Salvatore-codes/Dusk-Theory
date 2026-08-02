import { Crown, Truck, Sparkles, Moon, MapPin } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div style={{
      background: 'var(--ticker-bg, linear-gradient(90deg, #07080a 0%, #1c180e 50%, #07080a 100%))',
      borderBottom: '1px solid var(--gold-border)',
      color: 'var(--ticker-text, #F5E6BE)',
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
            <MapPin size={14} color="var(--gold-radiant)" />
            <span>📍 FLAGSHIP STORE: <strong style={{ color: 'var(--gold-radiant)' }}>Kumaran Tower, Roja Nagar, Arivithur Kovil St, Dindigul - 624004</strong></span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Moon size={14} color="var(--gold-radiant)" />
            <span>DUSK THEORY LUXURY DROP NOW LIVE &bull; USE CODE <strong style={{ color: 'var(--gold-radiant)', textDecoration: 'underline' }}>DUSK10</strong> FOR 10% OFF</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={14} color="var(--gold-radiant)" />
            <span>FREE EXPRESS SHIPPING ACROSS INDIA &bull; 100% CASH ON DELIVERY</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Crown size={14} color="var(--gold-radiant)" />
            <span>280 GSM HEAVYWEIGHT FRENCH TERRY COTTON & 24K GOLD PRINTMAKING</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={14} color="var(--gold-radiant)" />
            <span>100% CASH ON DELIVERY & HASSLE-FREE 7-DAY RETURNS</span>
          </span>
          {/* Duplicate loop */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={14} color="var(--gold-radiant)" />
            <span>📍 FLAGSHIP STORE: <strong style={{ color: 'var(--gold-radiant)' }}>Kumaran Tower, Roja Nagar, Arivithur Kovil St, Dindigul - 624004</strong></span>
          </span>
        </div>
      </div>
    </div>
  );
};
