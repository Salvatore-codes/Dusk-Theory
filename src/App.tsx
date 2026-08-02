import { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCatalog } from './components/ProductCatalog';
import { CartDrawer } from './components/CartDrawer';
import type { CartItem } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ReviewsSection } from './components/ReviewsSection';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import type { Product } from './data/products';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], size: 'L', quantity: 1 }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['dusk-1', 'dusk-3']);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL') => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id && item.size === size);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, size, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.product.id === productId && item.size === size) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.size === size)));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds(prev =>
      prev.includes(product.id) ? prev.filter(id => id !== product.id) : [...prev, product.id]
    );
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'all 0.4s ease' }}>
      <AnnouncementBar />

      <Header
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectProduct={(product) => setQuickViewProduct(product)}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
        currency={currency}
        onToggleCurrency={() => setCurrency(prev => prev === 'INR' ? 'USD' : 'INR')}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <HeroCarousel onExploreClick={scrollToCatalog} />

        <CategoryGrid
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            scrollToCatalog();
          }}
        />

        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          currency={currency}
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onAddToCart={handleAddToCart}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
        />

        <ReviewsSection />

        <TrustBadges />
      </main>

      <Footer />

      {/* Cart Drawer Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
        currency={currency}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />
    </div>
  );
}

export default App;
