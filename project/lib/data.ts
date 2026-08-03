import {
  Bed,
  Armchair,
  UtensilsCrossed,
  Coffee,
  Sofa,
  Archive,
  Tv,
  Table2,
  Frame,
  type LucideIcon,
} from 'lucide-react';

export const COMPANY = {
  name: 'Chandra Art and Crafts',
  tagline: 'Handcrafted Heritage Furniture',
  location: 'Boranada, Jodhpur, Rajasthan, India',
  email: 'chandraartandcrafts@gmail.com',
  phone: '+91 8290562795',
  whatsapp: '918290562795',
  established: '1998',
};

export const waLink = (message?: string) => {
  const base = `https://wa.me/${COMPANY.whatsapp}`;
  return message
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
};

export const callLink = `tel:${COMPANY.phone.replace(/\s/g, '')}`;
export const emailLink = `mailto:${COMPANY.email}`;

export type Category = {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: 'beds',
    name: 'Beds',
    icon: Bed,
    description:
      'Solid wood beds with hand-carved detailing, built for a lifetime of restful nights.',
    image:
      'https://images.pexels.com/photos/8135289/pexels-photo-8135289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'chairs',
    name: 'Chairs',
    icon: Armchair,
    description:
      'Individually crafted chairs that balance comfort, proportion, and timeless form.',
    image:
      'https://images.pexels.com/photos/29917912/pexels-photo-29917912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'dining-tables',
    name: 'Dining Tables',
    icon: UtensilsCrossed,
    description:
      'Gathering tables milled from premium hardwoods, made to host generations of meals.',
    image:
      'https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'coffee-tables',
    name: 'Coffee Tables',
    icon: Coffee,
    description:
      'Sculptural centre tables that anchor a living room with warmth and presence.',
    image:
      'https://images.pexels.com/photos/7607461/pexels-photo-7607461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'sofas',
    name: 'Sofas',
    icon: Sofa,
    description:
      'Hand-upholstered sofas with solid wood frames, tailored for enduring comfort.',
    image:
      'https://images.pexels.com/photos/8135267/pexels-photo-8135267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'cabinets',
    name: 'Cabinets',
    icon: Archive,
    description:
      'Storage pieces with dovetailed joinery and carved facades — function made beautiful.',
    image:
      'https://images.pexels.com/photos/11643074/pexels-photo-11643074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'tv-units',
    name: 'TV Units',
    icon: Tv,
    description:
      'Media consoles and entertainment units that combine open shelving with hidden storage.',
    image:
      'https://images.pexels.com/photos/6020432/pexels-photo-6020432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'side-tables',
    name: 'Side Tables',
    icon: Table2,
    description:
      'Compact accent tables crafted to sit beside a bed or sofa, perfect for small essentials.',
    image:
      'https://images.pexels.com/photos/545048/pexels-photo-545048.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'console-tables',
    name: 'Console Tables',
    icon: Frame,
    description:
      'Slim hallway and entryway tables that bring presence to narrow spaces.',
    image:
      'https://images.pexels.com/photos/8135270/pexels-photo-8135270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  materials: string;
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Rajwada Carved Bed',
    category: 'beds',
    description:
      'A regal queen-size bed with hand-carved headboard motifs inspired by Jodhpur heritage architecture.',
    materials: 'Solid Sheesham Wood',
    image:
      'https://images.pexels.com/photos/6920603/pexels-photo-6920603.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'p2',
    name: 'Marwar Low Post Bed',
    category: 'beds',
    description:
      'Minimalist platform bed in walnut finish with low posts and a breathable slatted base.',
    materials: 'Acacia Wood',
    image:
      'https://images.pexels.com/photos/19227246/pexels-photo-19227246.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p3',
    name: 'Heritage Dark Wood Bed',
    category: 'beds',
    description:
      'Statement bed framed in rich dark wood paneling, designed for boutique interiors.',
    materials: 'Mango Wood',
    image:
      'https://images.pexels.com/photos/14175921/pexels-photo-14175921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p4',
    name: 'Jodhpur Spindle Chair',
    category: 'chairs',
    description:
      'A modern spindle-back chair with a hand-finished seat, equally at home at a table or alone.',
    materials: 'Sheesham Wood',
    image:
      'https://images.pexels.com/photos/29917912/pexels-photo-29917912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'p5',
    name: 'Auditorium Lounge Chair',
    category: 'chairs',
    description:
      'A sculpted lounge chair with a curved backrest shaped for long, unhurried evenings.',
    materials: 'Teak Wood',
    image:
      'https://images.pexels.com/photos/11010168/pexels-photo-11010168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p6',
    name: 'Thar Vintage Chair',
    category: 'chairs',
    description:
      'A rustic single-piece chair with a weathered finish, evoking desert craftsmanship.',
    materials: 'Reclaimed Wood',
    image:
      'https://images.pexels.com/photos/116907/pexels-photo-116907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p7',
    name: 'Mehrab Dining Table',
    category: 'dining-tables',
    description:
      'A grand eight-seater dining table with a live-edge top and ornately carved pedestal base.',
    materials: 'Solid Sheesham Wood',
    image:
      'https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'p8',
    name: 'Classic Round Dining Table',
    category: 'dining-tables',
    description:
      'A warm round dining table in a classic design, perfect for intimate gatherings.',
    materials: 'Acacia Wood',
    image:
      'https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p9',
    name: 'Royal Dark Dining Table',
    category: 'dining-tables',
    description:
      'A dark-finished rectangular table with carved detailing and turned legs.',
    materials: 'Mango Wood',
    image:
      'https://images.pexels.com/photos/24461264/pexels-photo-24461264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p10',
    name: 'Aranya Coffee Table',
    category: 'coffee-tables',
    description:
      'A minimalist coffee table with a clean silhouette and a natural wood grain top.',
    materials: 'Acacia Wood',
    image:
      'https://images.pexels.com/photos/7607461/pexels-photo-7607461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'p11',
    name: 'Living Wood Coffee Table',
    category: 'coffee-tables',
    description:
      'A warm wooden coffee table styled for modern living rooms with soft natural light.',
    materials: 'Sheesham Wood',
    image:
      'https://images.pexels.com/photos/12277201/pexels-photo-12277201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p12',
    name: 'Vibrant Living Coffee Table',
    category: 'coffee-tables',
    description:
      'A characterful centre table with turned legs and a richly toned surface.',
    materials: 'Mango Wood',
    image:
      'https://images.pexels.com/photos/12420730/pexels-photo-12420730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p13',
    name: 'Velvet Heritage Sofa',
    category: 'sofas',
    description:
      'A three-seater sofa with a solid wood frame and hand-tailored velvet upholstery.',
    materials: 'Sheesham Wood, Velvet',
    image:
      'https://images.pexels.com/photos/8135267/pexels-photo-8135267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'p14',
    name: 'Artisan Cushioned Sofa',
    category: 'sofas',
    description:
      'An elegant grey sofa with a decorative accent cushion, crafted for refined interiors.',
    materials: 'Acacia Wood, Linen',
    image:
      'https://images.pexels.com/photos/11295890/pexels-photo-11295890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p15',
    name: 'Plush Beige Sofa',
    category: 'sofas',
    description:
      'A luxuriously plush beige sofa layered with soft cushions for everyday comfort.',
    materials: 'Mango Wood, Cotton',
    image:
      'https://images.pexels.com/photos/8135275/pexels-photo-8135275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p16',
    name: 'Mehrab Carved Cabinet',
    category: 'cabinets',
    description:
      'A statement cabinet with colorful patterned drawer fronts and ornate carved detailing.',
    materials: 'Reclaimed Wood',
    image:
      'https://images.pexels.com/photos/35186863/pexels-photo-35186863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'p17',
    name: 'Rustic Sideboard Cabinet',
    category: 'cabinets',
    description:
      'A warm wooden sideboard with ample storage and a hand-rubbed natural finish.',
    materials: 'Sheesham Wood',
    image:
      'https://images.pexels.com/photos/9899846/pexels-photo-9899846.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p18',
    name: 'Sleek Grain Cabinet',
    category: 'cabinets',
    description:
      'A modern cabinet with sleek handles and a striking natural wood grain facade.',
    materials: 'Acacia Wood',
    image:
      'https://images.pexels.com/photos/11643074/pexels-photo-11643074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p19',
    name: 'Boranada TV Console',
    category: 'tv-units',
    description:
      'A wall-mounted style TV unit with open shelving and a warm wooden console base.',
    materials: 'Sheesham Wood',
    image:
      'https://images.pexels.com/photos/6020432/pexels-photo-6020432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'p20',
    name: 'Marwar Entertainment Unit',
    category: 'tv-units',
    description:
      'A full-wall entertainment unit with mixed open and closed storage in a dark wood finish.',
    materials: 'Mango Wood',
    image:
      'https://images.pexels.com/photos/9646741/pexels-photo-9646741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p21',
    name: 'Heritage Media Stand',
    category: 'tv-units',
    description:
      'A stylish low-profile media stand with natural light-friendly proportions and carved legs.',
    materials: 'Acacia Wood',
    image:
      'https://images.pexels.com/photos/36871613/pexels-photo-36871613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p22',
    name: 'Marble Top Side Table',
    category: 'side-tables',
    description:
      'A compact side table with a marble top and solid wood base, perfect beside a bed or sofa.',
    materials: 'Sheesham Wood, Marble',
    image:
      'https://images.pexels.com/photos/545048/pexels-photo-545048.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'p23',
    name: 'Classic Nightstand',
    category: 'side-tables',
    description:
      'A warm wooden nightstand with a single drawer and shelf, styled for cozy bedrooms.',
    materials: 'Acacia Wood',
    image:
      'https://images.pexels.com/photos/37671537/pexels-photo-37671537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p24',
    name: 'Contemporary Bedside Table',
    category: 'side-tables',
    description:
      'A clean-lined bedside table with a natural wood finish and minimalist hardware.',
    materials: 'Mango Wood',
    image:
      'https://images.pexels.com/photos/13327416/pexels-photo-13327416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p25',
    name: 'Jharokha Console Table',
    category: 'console-tables',
    description:
      'An elegant wooden console table with three drawers and silver-finish handles.',
    materials: 'Sheesham Wood',
    image:
      'https://images.pexels.com/photos/8135270/pexels-photo-8135270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
  },
  {
    id: 'p26',
    name: 'Heritage Console Table',
    category: 'console-tables',
    description:
      'A classic wooden console table with carved detailing and metal handles against a warm wall.',
    materials: 'Acacia Wood',
    image:
      'https://images.pexels.com/photos/8135288/pexels-photo-8135288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p27',
    name: 'Noir Console Table',
    category: 'console-tables',
    description:
      'A sleek dark console table with minimalist lines, ideal for modern hallways and entryways.',
    materials: 'Mango Wood',
    image:
      'https://images.pexels.com/photos/9548344/pexels-photo-9548344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&h=800&w=940',
    alt: 'Furniture showroom display with classic bed and dining set',
    title: 'Showroom Display',
    category: 'Beds & Dining',
  },
  {
    src: 'https://images.pexels.com/photos/1268124/pexels-photo-1268124.jpeg?auto=compress&cs=tinysrgb&h=1200&w=940',
    alt: 'Close-up of a wooden table corner with texture and emblem',
    title: 'Wood Grain Detail',
    category: 'Craftsmanship',
  },
  {
    src: 'https://images.pexels.com/photos/8135249/pexels-photo-8135249.jpeg?auto=compress&cs=tinysrgb&h=800&w=940',
    alt: 'Vintage wooden chair with ornate carvings and plush upholstery',
    title: 'Carved Armchair',
    category: 'Chairs',
  },
  {
    src: 'https://images.pexels.com/photos/1327369/pexels-photo-1327369.jpeg?auto=compress&cs=tinysrgb&h=800&w=940',
    alt: 'Vintage dining room with grand chandelier and classic furniture',
    title: 'Dining Room Set',
    category: 'Dining Tables',
  },
  {
    src: 'https://images.pexels.com/photos/5095274/pexels-photo-5095274.jpeg?auto=compress&cs=tinysrgb&h=1200&w=940',
    alt: 'Skilled hands restoring antique wooden furniture with carvings',
    title: 'The Artisan&apos;s Hand',
    category: 'Craftsmanship',
  },
  {
    src: 'https://images.pexels.com/photos/2029663/pexels-photo-2029663.jpeg?auto=compress&cs=tinysrgb&h=800&w=940',
    alt: 'Luxurious living room with natural wood decor',
    title: 'Living Room Interior',
    category: 'Sofas',
  },
  {
    src: 'https://images.pexels.com/photos/112474/pexels-photo-112474.jpeg?auto=compress&cs=tinysrgb&h=800&w=940',
    alt: 'Modern chairs and furniture in a contemporary exhibit room',
    title: 'Exhibit Collection',
    category: 'Chairs',
  },
  {
    src: 'https://images.pexels.com/photos/14146724/pexels-photo-14146724.jpeg?auto=compress&cs=tinysrgb&h=1200&w=940',
    alt: 'Ornate wooden table with vintage style chairs',
    title: 'Heritage Dining Set',
    category: 'Dining Tables',
  },
  {
    src: 'https://images.pexels.com/photos/5095280/pexels-photo-5095280.jpeg?auto=compress&cs=tinysrgb&h=1200&w=940',
    alt: 'Craftsman restoring wooden furniture with precision',
    title: 'Workshop Detail',
    category: 'Craftsmanship',
  },
  {
    src: 'https://images.pexels.com/photos/6489441/pexels-photo-6489441.jpeg?auto=compress&cs=tinysrgb&h=800&w=940',
    alt: 'Victorian living room with ornate chandelier and classic furnishings',
    title: 'Classic Interior',
    category: 'Sofas',
  },
  {
    src: 'https://images.pexels.com/photos/5608070/pexels-photo-5608070.jpeg?auto=compress&cs=tinysrgb&h=1200&w=940',
    alt: 'Beautifully carved wooden armchair with vintage design',
    title: 'Carved Armchair',
    category: 'Chairs',
  },
  {
    src: 'https://images.pexels.com/photos/5095277/pexels-photo-5095277.jpeg?auto=compress&cs=tinysrgb&h=1200&w=940',
    alt: 'Carved wood and leather detail from vintage furniture',
    title: 'Carved Detail',
    category: 'Craftsmanship',
  },
];
