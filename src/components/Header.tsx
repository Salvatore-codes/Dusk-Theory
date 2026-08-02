import { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Sparkles, Menu, X, Sun, Moon } from 'lucide-react';
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
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onSelectProduct,
  selectedCategory,
  onSelectCategory,
  currency,
  onToggleCurrency,
  theme,
  onToggleTheme
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
      background: 'var(--header-bg)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      transition: 'background 0.4s ease'
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
        {/* Brand Logo with Official Dusk Theory Theme Logos */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gold-radiant)',
              cursor: 'pointer',
              display: 'none',
              padding: '4px'
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
              alt="DUSK THEORY Logo"
              style={{
                height: '42px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3))'
              }}
              onError={(e) => {
                // Fallback to stylized SVG emblem if image load is interrupted
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
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
                color: 'var(--text-muted)',
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
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '9px 18px',
            transition: 'all 0.3s ease'
          }}>
            <Search size={18} color="var(--gold-primary)" style={{ marginRight: '10px' }} />
            <input
              type="text"
              placeholder="Search Dusk Theory graphic tees, hoodies, oversized..."
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
                color: 'var(--text-primary)',
                fontSize: '13px',
                width: '100%'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
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
              background: 'var(--bg-card)',
              border: '1px solid var(--gold-primary)',
              borderRadius: '14px',
              boxShadow: 'var(--shadow-dark)',
              maxHeight: '380px',
              overflowY: 'auto',
              zIndex: 100
            }}>
              <div style={{ padding: '12px 16px', fontSize: '11px', color: 'var(--gold-primary)', borderBottom: '1px solid var(--border-color)', fontWeight: 800, letterSpacing: '1px' }}>
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
                    borderBottom: '1px solid var(--border-color)',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-card-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <img src={prod.mainImage} alt={prod.name} style={{ width: '46px', height: '46px', borderRadius: '6px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: 700 }}>{prod.name}</div>
                    <div style={{ color: 'var(--gold-primary)', fontSize: '12px', fontWeight: 800 }}>
                      {currency === 'INR' ? `₹${prod.price}` : `$${(prod.price / 83).toFixed(2)}`}
                    </div>
                  </div>
                  <Sparkles size={16} color="var(--gold-radiant)" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Actions: Theme Toggle, Currency, Wishlist, Bag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--gold-radiant)',
              padding: '8px 12px',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 700,
              transition: 'all 0.3s ease'
            }}
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {theme === 'dark' ? <Sun size={16} color="#FFD700" /> : <Moon size={16} color="#B8860B" />}
            <span style={{ textTransform: 'uppercase' }}>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
          </button>

          <button
            onClick={onToggleCurrency}
            style={{
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid var(--border-color)',
              color: 'var(--gold-radiant)',
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
              color: 'var(--text-primary)',
              position: 'relative',
              cursor: 'pointer',
              padding: '6px'
            }}
            title="Wishlist"
          >
            <Heart size={22} color="var(--gold-primary)" />
            {wishlistCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '0',
                right: '0',
                background: 'var(--gold-radiant)',
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
              background: 'var(--text-dark)',
              color: 'var(--gold-radiant)',
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
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
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
                  color: isActive ? 'var(--gold-radiant)' : 'var(--text-secondary)',
                  fontSize: '13px',
                  fontWeight: isActive ? 800 : 500,
                  padding: '14px 0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  borderBottom: isActive ? '2px solid var(--gold-radiant)' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {cat === 'Dusk Gold Collection' && <Sparkles size={14} color="var(--gold-radiant)" />}
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
