import { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROMO_CODES } from '../data/products';
import type { Product } from '../data/products';
import confetti from 'canvas-confetti';

export interface CartItem {
  product: Product;
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
  currency: 'INR' | 'USD';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState('');
  const [promoError, setPromoError] = useState('');
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = subtotal * discountRate;
  const freeShippingThreshold = 999;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const amountToFreeShipping = freeShippingThreshold - subtotal;
  const shippingFee = isFreeShipping || subtotal === 0 ? 0 : 99;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setDiscountRate(PROMO_CODES[code]);
      setAppliedPromo(code);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "GOLD10" or "ROYAL25"');
    }
  };

  const handleCheckout = () => {
    setIsCheckoutSuccess(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#D4AF37', '#F3E5AB', '#FFFFFF']
    });
    setTimeout(() => {
      onClearCart();
      setIsCheckoutSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', justifyContent: 'flex-end' }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="overlay-fade"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(6px)'
        }}
      />

      {/* Drawer Container */}
      <div
        className="drawer-slide"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '450px',
          height: '100%',
          background: '#141418',
          borderLeft: '1px solid #D4AF37',
          boxShadow: '-10px 0 35px rgba(0,0,0,0.9)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 10
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#0b0c10'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag color="#FFD700" size={20} />
            <h3 style={{ fontSize: '18px', fontWeight: 800 }}>YOUR BAG ({items.reduce((a, b) => a + b.quantity, 0)})</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#8E887D',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{ padding: '14px 24px', background: 'rgba(212, 175, 55, 0.08)', borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
          {isFreeShipping ? (
            <div style={{ color: '#FFD700', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} />
              <span>CONGRATS! YOU UNLOCKED FREE EXPRESS SHIPPING!</span>
            </div>
          ) : (
            <div>
              <div style={{ color: '#C2BBB0', fontSize: '12px', marginBottom: '6px' }}>
                Add <strong style={{ color: '#FFD700' }}>₹{amountToFreeShipping}</strong> more to get <strong>FREE EXPRESS SHIPPING</strong>
              </div>
              <div style={{ width: '100%', height: '6px', background: '#1c1c22', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{
                  width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #D4AF37, #FFD700)',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>
          )}
        </div>

        {/* Checkout Success Screen Overlay */}
        {isCheckoutSuccess ? (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px',
            textAlign: 'center'
          }}>
            <CheckCircle2 size={64} color="#FFD700" style={{ marginBottom: '16px' }} />
            <h2 className="gold-text" style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>ORDER CONFIRMED!</h2>
            <p style={{ color: '#C2BBB0', fontSize: '14px', marginBottom: '24px' }}>
              Thank you for shopping with Dusk Theory. Your order has been placed successfully and tracking information will be sent via SMS.
            </p>
            <div style={{ padding: '12px 20px', background: '#18181d', borderRadius: '8px', border: '1px solid #D4AF37', color: '#FFD700', fontSize: '12px', fontWeight: 700 }}>
              EXPRESS DELIVERY IN 2-4 DAYS
            </div>
          </div>
        ) : items.length === 0 ? (
          /* Empty Bag State */
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center'
          }}>
            <ShoppingBag size={56} color="#8E887D" style={{ marginBottom: '16px', opacity: 0.5 }} />
            <h4 style={{ color: '#FBF8F3', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Your shopping bag is empty</h4>
            <p style={{ color: '#8E887D', fontSize: '13px', marginBottom: '24px' }}>
              Explore our luxury gold drops & oversized tees to build your style.
            </p>
            <button onClick={onClose} className="btn-gold" style={{ padding: '12px 28px', fontSize: '12px' }}>
              EXPLORE CATALOG
            </button>
          </div>
        ) : (
          /* Cart Line Items */
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
            {items.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.size}-${idx}`}
                style={{
                  display: 'flex',
                  gap: '16px',
                  paddingBottom: '16px',
                  marginBottom: '16px',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
                }}
              >
                <img
                  src={item.product.mainImage}
                  alt={item.product.name}
                  style={{ width: '70px', height: '90px', borderRadius: '8px', objectFit: 'cover', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ color: '#FBF8F3', fontSize: '14px', fontWeight: 700, lineHeight: 1.2 }}>{item.product.name}</h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.size)}
                        style={{ background: 'none', border: 'none', color: '#E63946', cursor: 'pointer', padding: '2px' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '4px', fontSize: '11px', color: '#8E887D' }}>
                      <span>Size: <strong style={{ color: '#FFD700' }}>{item.size}</strong></span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                    {/* Quantity Selector */}
                    <div style={{ display: 'flex', alignItems: 'center', background: '#18181d', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '6px' }}>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                        style={{ background: 'none', border: 'none', color: '#FFD700', padding: '4px 8px', cursor: 'pointer' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ color: '#FBF8F3', fontSize: '12px', fontWeight: 700, padding: '0 8px' }}>{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                        style={{ background: 'none', border: 'none', color: '#FFD700', padding: '4px 8px', cursor: 'pointer' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <div style={{ color: '#FFD700', fontSize: '15px', fontWeight: 800 }}>
                      {currency === 'INR' ? `₹${item.product.price * item.quantity}` : `$${((item.product.price * item.quantity) / 83).toFixed(2)}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo Code Box */}
            <div style={{ marginTop: '20px', padding: '14px', background: '#18181d', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Tag size={16} color="#FFD700" />
                <span style={{ color: '#FBF8F3', fontSize: '12px', fontWeight: 700 }}>HAVE A COUPON CODE?</span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="Enter code (e.g. GOLD10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  style={{
                    flex: 1,
                    background: '#141418',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    color: '#FBF8F3',
                    fontSize: '12px',
                    outline: 'none',
                    textTransform: 'uppercase'
                  }}
                />
                <button onClick={handleApplyPromo} className="btn-gold-outline" style={{ padding: '8px 14px', fontSize: '11px' }}>
                  APPLY
                </button>
              </div>

              {appliedPromo && (
                <div style={{ color: '#2A9D8F', fontSize: '11px', fontWeight: 700, marginTop: '6px' }}>
                  ✓ Code "{appliedPromo}" applied! ({(discountRate * 100)}% Discount)
                </div>
              )}
              {promoError && (
                <div style={{ color: '#E63946', fontSize: '11px', marginTop: '6px' }}>
                  {promoError}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer Summary & Checkout */}
        {items.length > 0 && !isCheckoutSuccess && (
          <div style={{
            padding: '20px 24px',
            background: '#0b0c10',
            borderTop: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#C2BBB0' }}>
                <span>Subtotal</span>
                <span>{currency === 'INR' ? `₹${subtotal}` : `$${(subtotal / 83).toFixed(2)}`}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2A9D8F', fontWeight: 700 }}>
                  <span>Coupon Discount</span>
                  <span>-{currency === 'INR' ? `₹${discountAmount}` : `$${(discountAmount / 83).toFixed(2)}`}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#C2BBB0' }}>
                <span>Express Shipping</span>
                <span>{shippingFee === 0 ? <strong style={{ color: '#FFD700' }}>FREE</strong> : `₹${shippingFee}`}</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#FFD700',
                fontSize: '18px',
                fontWeight: 800,
                paddingTop: '8px',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                marginTop: '4px'
              }}>
                <span>Total Amount</span>
                <span>{currency === 'INR' ? `₹${finalTotal}` : `$${(finalTotal / 83).toFixed(2)}`}</span>
              </div>
            </div>

            <button onClick={handleCheckout} className="btn-gold" style={{ width: '100%', padding: '14px', fontSize: '13px' }}>
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#8E887D', fontSize: '11px', marginTop: '12px' }}>
              <ShieldCheck size={14} color="#FFD700" />
              <span>Encrypted 256-Bit SSL Checkout &bull; Cash on Delivery Available</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
