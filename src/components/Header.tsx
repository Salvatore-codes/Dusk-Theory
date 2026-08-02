import { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Crown, Sparkles, Menu, X, Moon } from 'lucide-react';
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
      background: 'rgba(7, 8, 10, 0.94)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.25)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '18px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        {/* Brand Logo & Emblem */}
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

          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FFF099, #FFD700 40%, #C5A059 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#07080a',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.45)'
            }}>
              <Moon size={22} fill="#07080a" />
            </div>
            <div>
              <span className="gold-text" style={{
                fontSize: '26px',
                fontWeight: 900,
                letterSpacing: '2px',
                lineHeight: 1
              }}>
                DUSK THEORY
              </span>
              <span style={{
                display: 'block',
                fontSize: '9.5px',
                color: '#C8C1B5',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginTop: '3px',
                fontWeight: 600
              }}>
                HIGH-STREET APPAREL STORE
              </span>
            </div>
          </a>
        </div>

        {/* Live Search Bar */}
        <div ref={searchRef} style={{ position: 'relative', flex: 1, maxWidth: '440px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#121318',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            borderRadius: '24px',
            padding: '9px 18px',
            transition: 'all 0.3s ease'
          }}>
            <Search size={18} color="#D4AF37" style={{ marginRight: '10px' }} />
            <input
              type="text"
              placeholder="Search Dusk Gold tees, hoodies, oversized streetwear..."
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
                color: '#FAF6EF',
                fontSize: '13px',
                width: '100%'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: '#888277', cursor: 'pointer' }}
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
              background: '#121318',
              border: '1px solid #FFD700',
              borderRadius: '14px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.9)',
              maxHeight: '380px',
              overflowY: 'auto',
              zIndex: 100
            }}>
              <div style={{ padding: '12px 16px', fontSize: '11px', color: '#FFD700', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', fontWeight: 800, letterSpacing: '1px' }}>
                MATCHING GARMENTS ({searchResults.length})
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
                    gap: '14px',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #1b1c23',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#1b1c23'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <img src={prod.mainImage} alt={prod.name} style={{ width: '46px', height: '46px', borderRadius: '6px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#FAF6EF', fontSize: '13px', fontWeight: 700 }}>{prod.name}</div>
                    <div style={{ color: '#FFD700', fontSize: '12px', fontWeight: 800 }}>
                      {currency === 'INR' ? `₹${prod.price}` : `$${(prod.price / 83).toFixed(2)}`}
                    </div>
                  </div>
                  <Sparkles size={16} color="#FFD700" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <button
            onClick={onToggleCurrency}
            style={{
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              color: '#FFD700',
              padding: '7px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            {currency}
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#FAF6EF',
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
                color: '#07080a',
                fontSize: '10px',
                fontWeight: 900,
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
              padding: '10px 20px',
              borderRadius: '24px',
              position: 'relative'
            }}
          >
            <ShoppingBag size={18} />
            <span style={{ fontSize: '12px', letterSpacing: '1px' }}>BAG</span>
            <span style={{
              background: '#07080a',
              color: '#FFD700',
              borderRadius: '12px',
              padding: '2px 8px',
              fontSize: '11px',
              fontWeight: 900,
              marginLeft: '4px'
            }}>
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <nav style={{
        background: '#0e0f13',
        borderTop: '1px solid rgba(212, 175, 55, 0.12)',
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
          {['All Products', 'Dusk Gold Collection', 'Oversized Tees', 'Hoodies & Sweatshirts', 'Graphic Tees', 'Accessories'].map(cat => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#FFD700' : '#C8C1B5',
                  fontSize: '13px',
                  fontWeight: isActive ? 800 : 500,
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
                {cat === 'Dusk Gold Collection' && <Crown size={14} color="#FFD700" />}
                {cat}
              </button>
            );
          })}
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};
