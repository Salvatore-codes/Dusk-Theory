import { useState } from 'react';
import { Crown, Send, Check, Share2, Globe, MessageCircle, MapPin, Navigation, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Kumaran Tower, Roja Nagar, Arivithur Kovil Street, Dindigul - 624004")}`;

  return (
    <footer style={{ background: '#050608', borderTop: '1px solid var(--gold-primary)', color: 'var(--text-secondary)', padding: '60px 24px 30px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFF099, #FFD700 40%, #C5A059 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#07080a'
              }}>
                <Crown size={20} fontWeight="bold" />
              </div>
              <span className="gold-text" style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '1px' }}>DUSK THEORY</span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
              High-street apparel brand redefining luxury streetwear with 280 GSM organic French Terry cotton and 24K gold foil craft printmaking.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { name: 'Instagram', icon: <Share2 size={16} /> },
                { name: 'WhatsApp', icon: <MessageCircle size={16} /> },
                { name: 'Global', icon: <Globe size={16} /> }
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  title={item.name}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--gold-radiant)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Store Location Col */}
          <div>
            <h4 style={{ color: 'var(--gold-radiant)', fontSize: '15px', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={18} />
              <span>FLAGSHIP STORE</span>
            </h4>
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '16px',
              fontSize: '13px'
            }}>
              <div style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: '14px', marginBottom: '6px' }}>
                Kumaran Tower
              </div>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
                Roja Nagar, Arivithur Kovil Street,<br />
                Dindigul - 624004,<br />
                Tamil Nadu, India
              </div>
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--gold-radiant)',
                  fontSize: '12px',
                  fontWeight: 800,
                  textDecoration: 'none'
                }}
              >
                <Navigation size={14} />
                <span>GET DIRECTIONS ON MAPS &rarr;</span>
              </a>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h4 style={{ color: 'var(--gold-radiant)', fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}>SHOP COLLECTIONS</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#catalog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Dusk Gold Collection</a></li>
              <li><a href="#catalog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Oversized Heavyweight Tees</a></li>
              <li><a href="#catalog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Fleece Hoodies & Sweatshirts</a></li>
              <li><a href="#catalog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Graphic Streetwear Tees</a></li>
              <li><a href="#catalog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Leather & Brass Accessories</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 style={{ color: 'var(--gold-radiant)', fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}>GET VIP GOLD DROPS</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Subscribe to unlock early access to limited gold collection drops and 10% off your first order.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  color: 'var(--text-primary)',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn-gold" style={{ padding: '10px 16px' }}>
                <Send size={16} />
              </button>
            </form>
            {subscribed && (
              <div style={{ color: 'var(--accent-green)', fontSize: '12px', fontWeight: 700, marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={14} />
                <span>Subscribed! Check your inbox for code DUSK10</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright & payment methods */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '12px',
          color: 'var(--text-muted)'
        }}>
          <div>
            &copy; 2026 DUSK THEORY CLOTHING STORE. All Rights Reserved. Hosted on dusktheory.vercel.app
          </div>
          <div style={{ display: 'flex', gap: '16px', fontWeight: 700, color: 'var(--gold-radiant)' }}>
            <span>UPI</span>
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>PAYTM</span>
            <span>CASH ON DELIVERY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
