import { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye, Crown, Check } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onQuickView,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const displayPrice = currency === 'INR' ? `₹${product.price}` : `$${(product.price / 83).toFixed(2)}`;
  const displayOriginal = currency === 'INR' ? `₹${product.originalPrice}` : `$${(product.originalPrice / 83).toFixed(2)}`;
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isHovered ? 'var(--shadow-gold)' : 'var(--shadow-dark)',
        transform: isHovered ? 'translateY(-6px)' : 'none'
      }}
    >
      {/* Image Container */}
      <div style={{
        position: 'relative',
        paddingTop: '125%',
        overflow: 'hidden',
        background: 'var(--bg-secondary)'
      }}>
        <img
          src={isHovered ? product.hoverImage : product.mainImage}
          alt={product.name}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)'
          }}
        />

        {/* Badge Tag */}
        {product.badge && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: product.badge === 'LIMITED GOLD' || product.badge === 'DUSK EXCLUSIVE'
              ? 'linear-gradient(135deg, #FFD700, #C5A059)'
              : 'rgba(7, 8, 10, 0.85)',
            border: '1px solid #FFD700',
            color: product.badge === 'LIMITED GOLD' || product.badge === 'DUSK EXCLUSIVE' ? '#07080a' : '#FFD700',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '10px',
            fontWeight: 900,
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            zIndex: 2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}>
            {(product.badge === 'LIMITED GOLD' || product.badge === 'DUSK EXCLUSIVE') && <Crown size={12} />}
            <span>{product.badge}</span>
          </div>
        )}

        {/* Discount Percentage Badge */}
        {discountPercent > 0 && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'var(--accent-red)',
            color: '#FFFFFF',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '10px',
            fontWeight: 900,
            zIndex: 2
          }}>
            -{discountPercent}%
          </div>
        )}

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: isWishlisted ? 'var(--gold-radiant)' : 'rgba(7, 8, 10, 0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--gold-primary)',
            color: isWishlisted ? '#07080a' : 'var(--gold-radiant)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 3,
            transition: 'all 0.2s ease'
          }}
        >
          <Heart size={18} fill={isWishlisted ? '#07080a' : 'none'} />
        </button>

        {/* Quick View Hover Button */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          right: '56px',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.3s ease',
          zIndex: 3
        }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            style={{
              width: '100%',
              background: 'rgba(7, 8, 10, 0.88)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--gold-primary)',
              color: '#FFD700',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Eye size={14} />
            <span>QUICK VIEW</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{ color: 'var(--text-muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px', fontWeight: 700 }}>
            {product.category}
          </div>

          <h3 style={{
            color: 'var(--text-primary)',
            fontSize: '15px',
            fontWeight: 800,
            lineHeight: 1.3,
            marginBottom: '8px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {product.name}
          </h3>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--gold-radiant)' }}>
              <Star size={14} fill="var(--gold-radiant)" />
            </div>
            <span style={{ color: 'var(--text-primary)', fontSize: '12px', fontWeight: 800 }}>{product.rating}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>({product.reviewsCount})</span>
          </div>

          {/* Price Display */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '14px' }}>
            <span style={{ color: 'var(--gold-radiant)', fontSize: '18px', fontWeight: 900 }}>{displayPrice}</span>
            {product.originalPrice > product.price && (
              <span style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'line-through' }}>
                {displayOriginal}
              </span>
            )}
          </div>

          {/* Size Pills */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                style={{
                  background: selectedSize === size ? 'var(--gold-radiant)' : 'var(--bg-secondary)',
                  color: selectedSize === size ? '#07080a' : 'var(--text-secondary)',
                  border: selectedSize === size ? '1px solid var(--gold-radiant)' : '1px solid var(--border-color)',
                  fontSize: '10px',
                  fontWeight: 800,
                  width: '26px',
                  height: '26px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add To Cart Button */}
        <button
          onClick={handleAdd}
          className="btn-gold"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '12px',
            background: addedAnimation ? 'var(--accent-green)' : undefined
          }}
        >
          {addedAnimation ? (
            <>
              <Check size={16} />
              <span>ADDED TO BAG!</span>
            </>
          ) : (
            <>
              <ShoppingBag size={16} />
              <span>ADD TO BAG &bull; {selectedSize}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
