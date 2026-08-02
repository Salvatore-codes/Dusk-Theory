export interface Product {
  id: string;
  name: string;
  category: 'Oversized Tees' | 'Hoodies & Sweatshirts' | 'Graphic Tees' | 'Luxury Gold Collection' | 'Accessories';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  mainImage: string;
  hoverImage: string;
  badge?: 'BESTSELLER' | 'NEW' | 'LIMITED GOLD' | 'HOT DROP' | '25% OFF';
  colors: { name: string; hex: string }[];
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  description: string;
  fabric: string;
  isTrending?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Aura Gold Oversized Heavyweight Tee',
    category: 'Luxury Gold Collection',
    price: 1299,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 248,
    mainImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    badge: 'LIMITED GOLD',
    colors: [
      { name: 'Onyx Black', hex: '#0B0C10' },
      { name: 'Gold Foil', hex: '#D4AF37' },
      { name: 'Midnight Charcoal', hex: '#1C1C22' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Crafted from 280 GSM luxury combed cotton with embossed metallic gold typography across the chest. Built for high-street oversized draping.',
    fabric: '100% French Terry Cotton (280 GSM)',
    isTrending: true
  },
  {
    id: 'prod-2',
    name: 'Golden Phoenix Cyberpunk Graphic Tee',
    category: 'Graphic Tees',
    price: 999,
    originalPrice: 1499,
    rating: 4.8,
    reviewsCount: 184,
    mainImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    badge: 'BESTSELLER',
    colors: [
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Dark Gold', hex: '#B8860B' }
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Neon gold screen print featuring intricate mythical phoenix motifs. Pre-shrunk bio-washed fabric for premium softness.',
    fabric: '100% Combed Cotton (240 GSM)',
    isTrending: true
  },
  {
    id: 'prod-3',
    name: 'Monarch Gold Edition Fleece Hoodie',
    category: 'Hoodies & Sweatshirts',
    price: 2499,
    originalPrice: 3499,
    rating: 5.0,
    reviewsCount: 312,
    mainImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    badge: 'HOT DROP',
    colors: [
      { name: 'Obsidian Black', hex: '#0F1016' },
      { name: 'Champagne Gold', hex: '#F3E5AB' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Heavyweight double-lined fleece hoodie with gold aglet drawstrings and embroidered gold crest logo.',
    fabric: '380 GSM Heavy Fleece Cotton Blend',
    isTrending: true
  },
  {
    id: 'prod-4',
    name: 'Royal Heritage Drop-Shoulder Oversized Tee',
    category: 'Oversized Tees',
    price: 1199,
    originalPrice: 1799,
    rating: 4.7,
    reviewsCount: 129,
    mainImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    badge: '25% OFF',
    colors: [
      { name: 'Matte Black', hex: '#121212' },
      { name: 'Desert Gold', hex: '#D4AF37' }
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Boxy streetwear silhouette with dropped shoulders and subtle gold seam detailing.',
    fabric: '100% Ring-Spun Cotton (240 GSM)'
  },
  {
    id: 'prod-5',
    name: 'Imperial Gold Chain & Leather Crossbody Bag',
    category: 'Accessories',
    price: 1499,
    originalPrice: 2299,
    rating: 4.9,
    reviewsCount: 95,
    mainImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    badge: 'NEW',
    colors: [
      { name: 'Black & Gold', hex: '#0B0C10' }
    ],
    sizes: ['M'],
    description: 'Full-grain matte black vegan leather bag featuring polished brass gold chain links and magnetic buckle closure.',
    fabric: 'Vegan Leather & Solid Brass Gold Hardware'
  },
  {
    id: 'prod-6',
    name: 'Vanguard Metallic Embroidered Sweatshirt',
    category: 'Hoodies & Sweatshirts',
    price: 2199,
    originalPrice: 2999,
    rating: 4.8,
    reviewsCount: 167,
    mainImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    badge: 'BESTSELLER',
    colors: [
      { name: 'Deep Onyx', hex: '#050505' },
      { name: 'Gold Trim', hex: '#FFD700' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Minimalist crewneck sweatshirt detailed with high-density metallic gold thread logo.',
    fabric: '350 GSM Brushed Fleece'
  },
  {
    id: 'prod-7',
    name: 'Signature Gold Monogram Streetwear Cap',
    category: 'Accessories',
    price: 799,
    originalPrice: 1199,
    rating: 4.9,
    reviewsCount: 210,
    mainImage: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80',
    badge: 'NEW',
    colors: [
      { name: 'Black/Gold', hex: '#0B0C10' }
    ],
    sizes: ['M', 'L'],
    description: 'Adjustable 6-panel dad hat constructed from structured cotton twill with 3D gold monogram embroidery.',
    fabric: '100% Heavyweight Cotton Twill'
  },
  {
    id: 'prod-8',
    name: 'Celestial Dragon Gold Edition Oversized Tee',
    category: 'Luxury Gold Collection',
    price: 1399,
    originalPrice: 2099,
    rating: 5.0,
    reviewsCount: 340,
    mainImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    badge: 'LIMITED GOLD',
    colors: [
      { name: 'Midnight Black', hex: '#090A0F' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Full-back gold leaf dragon artwork combined with subtle chest crest. Ultra-soft luxury feel.',
    fabric: '100% Combed Organic Cotton (260 GSM)',
    isTrending: true
  }
];

export const CATEGORIES = [
  { name: 'All Products', icon: 'Sparkles' },
  { name: 'Luxury Gold Collection', icon: 'Crown' },
  { name: 'Oversized Tees', icon: 'Shirt' },
  { name: 'Hoodies & Sweatshirts', icon: 'Flame' },
  { name: 'Graphic Tees', icon: 'Zap' },
  { name: 'Accessories', icon: 'ShoppingBag' }
];

export const PROMO_CODES: Record<string, number> = {
  'GOLD10': 0.10,
  'BUY2GET1': 0.20,
  'ROYAL25': 0.25,
  'VERCEL': 0.15
};
