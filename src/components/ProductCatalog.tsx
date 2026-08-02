import { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Crown, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  currency,
  onQuickView,
  onAddToCart,
  wishlistIds,
  onToggleWishlist
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('ALL');
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(3000);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      if (selectedCategory !== 'All Products' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedSizeFilter !== 'ALL' && !product.sizes.includes(selectedSizeFilter as any)) {
        return false;
      }
      if (product.price > maxPriceFilter) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, selectedSizeFilter, maxPriceFilter, sortBy]);

  return (
    <section id="catalog" style={{ padding: '60px 24px', background: 'var(--bg-primary)', transition: 'background 0.4s ease' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold-radiant)', fontSize: '12px', fontWeight: 800, letterSpacing: '1px', marginBottom: '8px' }}>
            <Crown size={14} />
            <span>AUTHENTIC HIGH-STREET APPAREL</span>
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: 900, color: 'var(--text-primary)' }}>
            {selectedCategory === 'All Products' ? (
              <>EXPLORE THE <span className="gold-text">FULL COLLECTION</span></>
            ) : (
              <><span className="gold-text">{selectedCategory.toUpperCase()}</span></>
            )}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '4px' }}>
            Handcrafted heavy-weight garments engineered with 24K gold foil printmaking
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.4s ease'
        }}>
          {/* Size Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--gold-radiant)', fontSize: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Filter size={16} />
              <span>SIZE:</span>
            </span>
            {['ALL', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button
                key={size}
                onClick={() => setSelectedSizeFilter(size)}
                style={{
                  background: selectedSizeFilter === size ? 'var(--gold-radiant)' : 'var(--bg-card)',
                  color: selectedSizeFilter === size ? '#07080a' : 'var(--text-secondary)',
                  border: selectedSizeFilter === size ? '1px solid var(--gold-radiant)' : '1px solid var(--border-color)',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '6px 14px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Price Range Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
            <span style={{ color: 'var(--gold-radiant)', fontSize: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <SlidersHorizontal size={16} />
              <span>MAX PRICE:</span>
            </span>
            <input
              type="range"
              min={700}
              max={3000}
              step={100}
              value={maxPriceFilter}
              onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
              style={{ accentColor: 'var(--gold-radiant)', flex: 1, cursor: 'pointer' }}
            />
            <span style={{ color: 'var(--gold-radiant)', fontSize: '13px', fontWeight: 900 }}>
              {currency === 'INR' ? `₹${maxPriceFilter}` : `$${(maxPriceFilter / 83).toFixed(0)}`}
            </span>
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--gold-radiant)', fontSize: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowUpDown size={16} />
              <span>SORT BY:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '13px',
                outline: 'none',
                cursor: 'pointer',
                fontWeight: 700
              }}
            >
              <option value="featured">Featured Drops</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 24px',
            background: 'var(--bg-secondary)',
            borderRadius: '16px',
            border: '1px solid var(--border-color)'
          }}>
            <Sparkles size={48} color="var(--gold-radiant)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}>No garments match your filters</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>Try resetting your size or price filters to see more drops.</p>
            <button
              onClick={() => {
                setSelectedSizeFilter('ALL');
                setMaxPriceFilter(3000);
                onSelectCategory('All Products');
              }}
              className="btn-gold"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
