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
        background: '#18181d',
        borderRadius: '16px',
        border: '1px solid rgba(212, 175, 55, 0.2)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isHovered ? '0 12px 30px rgba(212, 175, 55, 0.2)' : '0 6px 20px rgba(0, 0, 0, 0.4)',
        transform: isHovered ? 'translateY(-6px)' : 'none'
      }}
    >
      {/* Image Container with Dual Image Swap */}
      <div style={{
        position: 'relative',
        paddingTop: '125%', // 4:5 aspect ratio
        overflow: 'hidden',
        background: '#141418'
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
            background: product.badge === 'LIMITED GOLD'
              ? 'linear-gradient(135deg, #FFD700, #C5A059)'
              : 'rgba(11, 12, 16, 0.85)',
            border: '1px solid #FFD700',
            color: product.badge === 'LIMITED GOLD' ? '#0b0c10' : '#FFD700',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '10px',
            fontWeight: 800,
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            zIndex: 2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}>
            {product.badge === 'LIMITED GOLD' && <Crown size={12} />}
            <span>{product.badge}</span>
          </div>
        )}

        {/* Discount Percentage Badge */}
        {discountPercent > 0 && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: '#E63946',
            color: '#FFFFFF',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '10px',
            fontWeight: 800,
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
            background: isWishlisted ? '#FFD700' : 'rgba(11, 12, 16, 0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid #D4AF37',
            color: isWishlisted ? '#0b0c10' : '#FFD700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 3,
            transition: 'all 0.2s ease'
          }}
        >
          <Heart size={18} fill={isWishlisted ? '#0b0c10' : 'none'} />
        </button>

        {/* Quick View Hover Button Overlay */}
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
              background: 'rgba(11, 12, 16, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid #D4AF37',
              color: '#FFD700',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 700,
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
          <div style={{ color: '#8E887D', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px', fontWeight: 600 }}>
            {product.category}
          </div>

          <h3 style={{
            color: '#FBF8F3',
            fontSize: '15px',
            fontWeight: 700,
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
            <div style={{ display: 'flex', alignItems: 'center', color: '#FFD700' }}>
              <Star size={14} fill="#FFD700" />
            </div>
            <span style={{ color: '#FBF8F3', fontSize: '12px', fontWeight: 700 }}>{product.rating}</span>
            <span style={{ color: '#8E887D', fontSize: '12px' }}>({product.reviewsCount})</span>
          </div>

          {/* Price Display */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '14px' }}>
            <span style={{ color: '#FFD700', fontSize: '18px', fontWeight: 800 }}>{displayPrice}</span>
            {product.originalPrice > product.price && (
              <span style={{ color: '#8E887D', fontSize: '13px', textDecoration: 'line-through' }}>
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
                  background: selectedSize === size ? '#D4AF37' : '#141418',
                  color: selectedSize === size ? '#0b0c10' : '#C2BBB0',
                  border: selectedSize === size ? '1px solid #FFD700' : '1px solid rgba(212, 175, 55, 0.2)',
                  fontSize: '10px',
                  fontWeight: 700,
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
            background: addedAnimation ? '#2A9D8F' : undefined
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
