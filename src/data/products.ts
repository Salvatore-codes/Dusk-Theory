export interface Product {
  id: string;
  name: string;
  category: 'Dusk Gold Collection' | 'Oversized Tees' | 'Hoodies & Sweatshirts' | 'Graphic Tees' | 'Accessories';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  mainImage: string;
  hoverImage: string;
  badge?: 'DUSK EXCLUSIVE' | 'BESTSELLER' | 'LIMITED GOLD' | 'HOT DROP' | '25% OFF';
  colors: { name: string; hex: string }[];
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  description: string;
  fabric: string;
  isTrending?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'dusk-1',
    name: 'Dusk Theory Heavyweight 280 GSM Gold Crest Tee',
    category: 'Dusk Gold Collection',
    price: 1499,
    originalPrice: 2299,
    rating: 4.9,
    reviewsCount: 312,
    mainImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    badge: 'LIMITED GOLD',
    colors: [
      { name: 'Obsidian Black', hex: '#07080A' },
      { name: 'Gold Leaf', hex: '#D4AF37' },
      { name: 'Midnight Charcoal', hex: '#16171D' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The flagship Dusk Theory garment engineered from 280 GSM luxury combed French Terry cotton with 3D embossed metallic gold crest embroidery across the chest.',
    fabric: '100% French Terry Organic Cotton (280 GSM)',
    isTrending: true
  },
  {
    id: 'dusk-2',
    name: 'Dusk Theory Phoenix Cyberpunk Oversized Tee',
    category: 'Oversized Tees',
    price: 1199,
    originalPrice: 1799,
    rating: 4.8,
    reviewsCount: 224,
    mainImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    badge: 'BESTSELLER',
    colors: [
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Radiant Gold', hex: '#FFD700' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'High-street boxy fit with dropped shoulders. High-density screen print featuring liquid gold mythical phoenix art.',
    fabric: '100% Combed Bio-Washed Cotton (240 GSM)',
    isTrending: true
  },
  {
    id: 'dusk-3',
    name: 'Dusk Theory Empire 380 GSM Gold Aglet Hoodie',
    category: 'Hoodies & Sweatshirts',
    price: 2799,
    originalPrice: 3899,
    rating: 5.0,
    reviewsCount: 420,
    mainImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    badge: 'DUSK EXCLUSIVE',
    colors: [
      { name: 'Obsidian Black', hex: '#07080A' },
      { name: 'Champagne Gold', hex: '#F5E6BE' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Ultra-heavy 380 GSM fleece hoodie constructed with a double-layered hood, custom gold aglet drawstrings, and solid gold thread crest logo.',
    fabric: '380 GSM Heavyweight Brushed Fleece Cotton',
    isTrending: true
  },
  {
    id: 'dusk-4',
    name: 'Dusk Theory Nocturne Drop-Shoulder Graphic Tee',
    category: 'Graphic Tees',
    price: 1299,
    originalPrice: 1899,
    rating: 4.9,
    reviewsCount: 178,
    mainImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    badge: '25% OFF',
    colors: [
      { name: 'Dark Slate', hex: '#121318' },
      { name: 'Luxe Gold', hex: '#D4AF37' }
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Urban streetwear silhouette with contrast gold stitching and signature Dusk Theory typography badge on hem.',
    fabric: '100% Ring-Spun Cotton (240 GSM)'
  },
  {
    id: 'dusk-5',
    name: 'Dusk Theory Brass Link Crossbody Leather Bag',
    category: 'Accessories',
    price: 1699,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 142,
    mainImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    badge: 'HOT DROP',
    colors: [
      { name: 'Black & Gold', hex: '#07080A' }
    ],
    sizes: ['M'],
    description: 'Full-grain matte black vegan leather bag trimmed with heavy solid brass gold chain links and magnetic lock.',
    fabric: 'Vegan Leather & Solid Brass Hardware'
  },
  {
    id: 'dusk-6',
    name: 'Dusk Theory Vanguard Embroidered Crewneck',
    category: 'Hoodies & Sweatshirts',
    price: 2399,
    originalPrice: 3299,
    rating: 4.8,
    reviewsCount: 215,
    mainImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    badge: 'BESTSELLER',
    colors: [
      { name: 'Deep Onyx', hex: '#050505' },
      { name: 'Gold Trim', hex: '#FFD700' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Minimalist luxury crewneck sweatshirt detailed with high-density metallic gold thread logo.',
    fabric: '350 GSM Brushed Fleece'
  },
  {
    id: 'dusk-7',
    name: 'Dusk Theory 3D Monogram Streetwear Cap',
    category: 'Accessories',
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviewsCount: 260,
    mainImage: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80',
    badge: 'LIMITED GOLD',
    colors: [
      { name: 'Black/Gold', hex: '#07080A' }
    ],
    sizes: ['M', 'L'],
    description: 'Adjustable 6-panel dad hat constructed from structured heavyweight cotton twill with 3D gold monogram embroidery.',
    fabric: '100% Heavyweight Cotton Twill'
  },
  {
    id: 'dusk-8',
    name: 'Dusk Theory Celestial Dragon Gold Tee',
    category: 'Dusk Gold Collection',
    price: 1599,
    originalPrice: 2399,
    rating: 5.0,
    reviewsCount: 388,
    mainImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    badge: 'DUSK EXCLUSIVE',
    colors: [
      { name: 'Midnight Black', hex: '#07080A' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Full-back gold leaf dragon artwork combined with subtle chest crest. Ultra-soft luxury feel.',
    fabric: '100% Combed Organic Cotton (260 GSM)',
    isTrending: true
  }
];

export const CATEGORIES = [
  { name: 'All Products', icon: 'Sparkles' },
  { name: 'Dusk Gold Collection', icon: 'Crown' },
  { name: 'Oversized Tees', icon: 'Shirt' },
  { name: 'Hoodies & Sweatshirts', icon: 'Flame' },
  { name: 'Graphic Tees', icon: 'Zap' },
  { name: 'Accessories', icon: 'ShoppingBag' }
];

export const PROMO_CODES: Record<string, number> = {
  'DUSK10': 0.10,
  'GOLD10': 0.10,
  'DUSKGOLD20': 0.20,
  'ROYAL25': 0.25,
  'VERCEL': 0.15
};
