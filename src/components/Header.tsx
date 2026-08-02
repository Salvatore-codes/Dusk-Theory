import { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Crown, Sparkles, Menu, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onSelectProduct: (product: Product) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onSelectProduct,
  selectedCategory,
  onSelectCategory,
  currency,
  onToggleCurrency
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchResults = searchQuery.trim() === '' ? [] : PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 90,
      background: 'rgba(11, 12, 16, 0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        {/* Left: Mobile Menu Toggle & Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFD700',
              cursor: 'pointer',
              display: 'none',
              padding: '4px'
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFD700, #C5A059)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0b0c10',
              boxShadow: '0 0 15px rgba(255, 215, 0, 0.4)'
            }}>
              <Crown size={22} fontWeight="bold" />
            </div>
            <div>
              <span className="gold-text" style={{
                fontSize: '24px',
                fontWeight: 800,
                letterSpacing: '1px',
                lineHeight: 1
              }}>
                AURA GOLD
              </span>
              <span style={{
                display: 'block',
                fontSize: '10px',
                color: '#C2BBB0',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                marginTop: '2px'
              }}>
                RETAIL CLOTHING STORE
              </span>
            </div>
          </a>
        </div>

        {/* Center: Live Search Bar */}
        <div ref={searchRef} style={{ position: 'relative', flex: 1, maxWidth: '420px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#18181d',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '24px',
            padding: '8px 16px',
            transition: 'all 0.3s ease'
          }}>
            <Search size={18} color="#D4AF37" style={{ marginRight: '10px' }} />
            <input
              type="text"
              placeholder="Search graphic tees, gold hoodies, oversized..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#FBF8F3',
                fontSize: '14px',
                width: '100%'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: '#8E887D', cursor: 'pointer' }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {isSearchOpen && searchResults.length > 0 && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              right: 0,
              background: '#18181d',
              border: '1px solid #D4AF37',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
              maxHeight: '380px',
              overflowY: 'auto',
              zIndex: 100
            }}>
              <div style={{ padding: '12px 16px', fontSize: '11px', color: '#D4AF37', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', fontWeight: 700 }}>
                MATCHING PRODUCTS ({searchResults.length})
              </div>
              {searchResults.map(prod => (
                <div
                  key={prod.id}
                  onClick={() => {
                    onSelectProduct(prod);
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #22222a',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#22222a'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <img src={prod.mainImage} alt={prod.name} style={{ width: '44px', height: '44px', borderRadius: '6px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#FBF8F3', fontSize: '13px', fontWeight: 600 }}>{prod.name}</div>
                    <div style={{ color: '#D4AF37', fontSize: '12px', fontWeight: 700 }}>
                      {currency === 'INR' ? `₹${prod.price}` : `$${(prod.price / 83).toFixed(2)}`}
                    </div>
                  </div>
                  <Sparkles size={16} color="#FFD700" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Actions (Currency, Wishlist, Account, Cart) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <button
            onClick={onToggleCurrency}
            style={{
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#FFD700',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {currency}
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#FBF8F3',
              position: 'relative',
              cursor: 'pointer',
              padding: '6px'
            }}
            title="Wishlist"
          >
            <Heart size={22} color="#D4AF37" />
            {wishlistCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '0',
                right: '0',
                background: '#FFD700',
                color: '#0b0c10',
                fontSize: '10px',
                fontWeight: 800,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="btn-gold"
            style={{
              padding: '10px 18px',
              borderRadius: '24px',
              position: 'relative'
            }}
          >
            <ShoppingBag size={18} />
            <span style={{ fontSize: '13px' }}>BAG</span>
            <span style={{
              background: '#0b0c10',
              color: '#FFD700',
              borderRadius: '12px',
              padding: '2px 8px',
              fontSize: '11px',
              fontWeight: 800,
              marginLeft: '4px'
            }}>
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <nav style={{
        background: '#141418',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        padding: '0 24px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          overflowX: 'auto',
          scrollbarWidth: 'none'
        }}>
          {['All Products', 'Luxury Gold Collection', 'Oversized Tees', 'Hoodies & Sweatshirts', 'Graphic Tees', 'Accessories'].map(cat => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#FFD700' : '#C2BBB0',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                  padding: '14px 0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  borderBottom: isActive ? '2px solid #FFD700' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {cat === 'Luxury Gold Collection' && <Crown size={14} color="#FFD700" />}
                {cat}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile responsive CSS inline tag */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};
