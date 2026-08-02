import { useState } from 'react';
import { X, Star, ShoppingBag, Truck, Ruler, Check, Heart } from 'lucide-react';
import type { Product } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  currency: 'INR' | 'USD';
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  currency,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.mainImage);
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [pincode, setPincode] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState('');
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const displayPrice = currency === 'INR' ? `₹${product.price}` : `$${(product.price / 83).toFixed(2)}`;
  const displayOriginal = currency === 'INR' ? `₹${product.originalPrice}` : `$${(product.originalPrice / 83).toFixed(2)}`;

  const handleCheckPincode = () => {
    if (pincode.trim().length === 6) {
      setDeliveryStatus('✓ Express Delivery available! Delivery by Tuesday.');
    } else {
      setDeliveryStatus('Please enter a valid 6-digit Pincode.');
    }
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="overlay-fade"
        style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.82)', backdropFilter: 'blur(8px)' }}
      />

      {/* Modal Card */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        maxHeight: '90vh',
        background: '#141418',
        border: '1px solid #D4AF37',
        borderRadius: '20px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
        overflowY: 'auto',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#18181d',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            color: '#FBF8F3',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Left: Product Images Gallery */}
        <div style={{ padding: '24px', background: '#0b0c10', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ position: 'relative', paddingTop: '120%', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <img
              src={activeImage}
              alt={product.name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            {[product.mainImage, product.hoverImage].map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(img)}
                style={{
                  width: '64px',
                  height: '80px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeImage === img ? '2px solid #FFD700' : '1px solid rgba(212, 175, 55, 0.2)',
                  opacity: activeImage === img ? 1 : 0.6
                }}
              >
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ color: '#D4AF37', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              {product.category}
            </div>

            <h2 style={{ color: '#FBF8F3', fontSize: '24px', fontWeight: 800, lineHeight: 1.2, marginBottom: '12px' }}>
              {product.name}
            </h2>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', color: '#FFD700' }}>
                <Star size={16} fill="#FFD700" />
              </div>
              <span style={{ color: '#FBF8F3', fontSize: '14px', fontWeight: 700 }}>{product.rating}</span>
              <span style={{ color: '#8E887D', fontSize: '13px' }}>({product.reviewsCount} customer reviews)</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
              <span style={{ color: '#FFD700', fontSize: '28px', fontWeight: 800 }}>{displayPrice}</span>
              {product.originalPrice > product.price && (
                <span style={{ color: '#8E887D', fontSize: '16px', textDecoration: 'line-through' }}>
                  {displayOriginal}
                </span>
              )}
              <span style={{ background: 'rgba(212, 175, 55, 0.15)', border: '1px solid #FFD700', color: '#FFD700', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '4px' }}>
                SAVE {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            </div>

            <p style={{ color: '#C2BBB0', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
              {product.description}
            </p>

            {/* Color Selector */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ color: '#FBF8F3', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
                COLOR: <span style={{ color: '#FFD700' }}>{selectedColor.name}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {product.colors.map(col => (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(col)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: col.hex,
                      border: selectedColor.name === col.name ? '2px solid #FFD700' : '1px solid rgba(255,255,255,0.2)',
                      cursor: 'pointer',
                      boxShadow: selectedColor.name === col.name ? '0 0 10px rgba(255, 215, 0, 0.5)' : 'none'
                    }}
                    title={col.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector with Size Chart */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ color: '#FBF8F3', fontSize: '13px', fontWeight: 700 }}>SELECT SIZE</div>
                <button
                  onClick={() => setIsSizeChartOpen(!isSizeChartOpen)}
                  style={{ background: 'none', border: 'none', color: '#FFD700', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <Ruler size={14} />
                  <span>SIZE CHART</span>
                </button>
              </div>

              {isSizeChartOpen && (
                <div style={{ padding: '12px', background: '#18181d', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.3)', marginBottom: '12px', fontSize: '11px', color: '#C2BBB0' }}>
                  <strong style={{ color: '#FFD700' }}>Garment Chest Specifications (Inches):</strong>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                    <span>S: 38"</span>
                    <span>M: 40"</span>
                    <span>L: 42"</span>
                    <span>XL: 44"</span>
                    <span>XXL: 46"</span>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px' }}>
                {product.sizes.map(sz => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    style={{
                      background: selectedSize === sz ? '#FFD700' : '#18181d',
                      color: selectedSize === sz ? '#0b0c10' : '#FBF8F3',
                      border: selectedSize === sz ? '1px solid #FFD700' : '1px solid rgba(212, 175, 55, 0.25)',
                      fontSize: '13px',
                      fontWeight: 800,
                      padding: '10px 18px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Pincode Checker */}
            <div style={{ padding: '14px', background: '#18181d', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFD700', fontSize: '12px', fontWeight: 700, marginBottom: '8px' }}>
                <Truck size={16} />
                <span>CHECK DELIVERY EST. BY PINCODE</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  style={{
                    flex: 1,
                    background: '#141418',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    color: '#FBF8F3',
                    fontSize: '12px',
                    outline: 'none'
                  }}
                />
                <button onClick={handleCheckPincode} className="btn-gold-outline" style={{ padding: '8px 14px', fontSize: '11px' }}>
                  CHECK
                </button>
              </div>
              {deliveryStatus && (
                <div style={{ fontSize: '12px', marginTop: '6px', color: deliveryStatus.includes('✓') ? '#2A9D8F' : '#E63946', fontWeight: 600 }}>
                  {deliveryStatus}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleAdd}
              className="btn-gold"
              style={{ flex: 1, padding: '14px', fontSize: '13px', background: isAdded ? '#2A9D8F' : undefined }}
            >
              {isAdded ? (
                <>
                  <Check size={18} />
                  <span>ADDED TO BAG!</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={18} />
                  <span>ADD TO BAG &bull; {selectedSize}</span>
                </>
              )}
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              className="btn-gold-outline"
              style={{ padding: '14px', borderRadius: '8px' }}
              title="Wishlist"
            >
              <Heart size={20} fill={isWishlisted ? '#FFD700' : 'none'} color="#FFD700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
