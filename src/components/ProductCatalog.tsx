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
      // Category filter
      if (selectedCategory !== 'All Products' && product.category !== selectedCategory) {
        return false;
      }
      // Size filter
      if (selectedSizeFilter !== 'ALL' && !product.sizes.includes(selectedSizeFilter as any)) {
        return false;
      }
      // Price filter
      if (product.price > maxPriceFilter) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured
    });
  }, [selectedCategory, selectedSizeFilter, maxPriceFilter, sortBy]);

  return (
    <section id="catalog" style={{ padding: '60px 24px', background: '#0b0c10' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#FFD700', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', marginBottom: '8px' }}>
            <Crown size={14} />
            <span>AUTHENTIC HIGH-STREET APPAREL</span>
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: 800 }}>
            {selectedCategory === 'All Products' ? (
              <>EXPLORE THE <span className="gold-text">FULL COLLECTION</span></>
            ) : (
              <><span className="gold-text">{selectedCategory.toUpperCase()}</span></>
            )}
          </h2>
          <p style={{ color: '#8E887D', fontSize: '15px', marginTop: '4px' }}>
            Handcrafted heavy-weight garments engineered with luxury gold precision prints
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div style={{
          background: '#141418',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          borderRadius: '16px',
          padding: '20px 24px',
          marginBottom: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Size Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ color: '#D4AF37', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Filter size={16} />
              <span>SIZE:</span>
            </span>
            {['ALL', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button
                key={size}
                onClick={() => setSelectedSizeFilter(size)}
                style={{
                  background: selectedSizeFilter === size ? '#FFD700' : 'rgba(212, 175, 55, 0.08)',
                  color: selectedSizeFilter === size ? '#0b0c10' : '#C2BBB0',
                  border: selectedSizeFilter === size ? '1px solid #FFD700' : '1px solid rgba(212, 175, 55, 0.2)',
                  fontSize: '11px',
                  fontWeight: 700,
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
            <span style={{ color: '#D4AF37', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
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
              style={{ accentColor: '#FFD700', flex: 1, cursor: 'pointer' }}
            />
            <span style={{ color: '#FFD700', fontSize: '13px', fontWeight: 800 }}>
              {currency === 'INR' ? `₹${maxPriceFilter}` : `$${(maxPriceFilter / 83).toFixed(0)}`}
            </span>
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#D4AF37', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowUpDown size={16} />
              <span>SORT BY:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{
                background: '#18181d',
                color: '#FBF8F3',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '13px',
                outline: 'none',
                cursor: 'pointer',
                fontWeight: 600
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
            background: '#141418',
            borderRadius: '16px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <Sparkles size={48} color="#FFD700" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', color: '#FBF8F3', marginBottom: '8px' }}>No garments match your filters</h3>
            <p style={{ color: '#8E887D', fontSize: '14px', marginBottom: '20px' }}>Try resetting your size or price filters to see more drops.</p>
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
