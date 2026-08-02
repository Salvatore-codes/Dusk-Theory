import { useState } from 'react';
import { Crown, Send, Check, Share2, Globe, MessageCircle } from 'lucide-react';

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

  return (
    <footer style={{ background: '#07080a', borderTop: '1px solid #D4AF37', color: '#C2BBB0', padding: '60px 24px 30px 24px' }}>
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
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700, #C5A059)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0b0c10'
              }}>
                <Crown size={20} fontWeight="bold" />
              </div>
              <span className="gold-text" style={{ fontSize: '22px', fontWeight: 800 }}>AURA GOLD</span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#8E887D', marginBottom: '20px' }}>
              High-street apparel brand redefining streetwear fashion with 280 GSM luxury organic cotton and metallic gold craft printmaking.
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
                    background: '#141418',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: '#FFD700',
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

          {/* Shop Col */}
          <div>
            <h4 style={{ color: '#FFD700', fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}>SHOP COLLECTIONS</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#catalog" style={{ color: '#C2BBB0', textDecoration: 'none' }}>Luxury Gold Drops</a></li>
              <li><a href="#catalog" style={{ color: '#C2BBB0', textDecoration: 'none' }}>Oversized Heavyweight Tees</a></li>
              <li><a href="#catalog" style={{ color: '#C2BBB0', textDecoration: 'none' }}>Fleece Hoodies & Sweatshirts</a></li>
              <li><a href="#catalog" style={{ color: '#C2BBB0', textDecoration: 'none' }}>Graphic Streetwear Tees</a></li>
              <li><a href="#catalog" style={{ color: '#C2BBB0', textDecoration: 'none' }}>Leather & Brass Accessories</a></li>
            </ul>
          </div>

          {/* Help Col */}
          <div>
            <h4 style={{ color: '#FFD700', fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}>CUSTOMER CARE</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#" style={{ color: '#C2BBB0', textDecoration: 'none' }}>Track Your Order</a></li>
              <li><a href="#" style={{ color: '#C2BBB0', textDecoration: 'none' }}>7-Day Returns & Exchanges</a></li>
              <li><a href="#" style={{ color: '#C2BBB0', textDecoration: 'none' }}>Shipping & Delivery Policy</a></li>
              <li><a href="#" style={{ color: '#C2BBB0', textDecoration: 'none' }}>Garment Size Guide</a></li>
              <li><a href="#" style={{ color: '#C2BBB0', textDecoration: 'none' }}>Contact Us / Store Locator</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 style={{ color: '#FFD700', fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}>GET VIP GOLD DROPS</h4>
            <p style={{ fontSize: '13px', color: '#8E887D', marginBottom: '14px' }}>
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
                  background: '#141418',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  color: '#FBF8F3',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn-gold" style={{ padding: '10px 16px' }}>
                <Send size={16} />
              </button>
            </form>
            {subscribed && (
              <div style={{ color: '#2A9D8F', fontSize: '12px', fontWeight: 700, marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={14} />
                <span>Subscribed! Check your inbox for code GOLD10</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright & payment methods */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(212, 175, 55, 0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '12px',
          color: '#8E887D'
        }}>
          <div>
            &copy; 2026 AURA GOLD CLOTHING STORE. All Rights Reserved. Hosted on Vercel.
          </div>
          <div style={{ display: 'flex', gap: '16px', fontWeight: 700, color: '#FFD700' }}>
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
