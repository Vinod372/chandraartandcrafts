'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal } from 'lucide-react';
import { categories, products, type Product } from '@/lib/data';
import ProductCard from '@/components/site/product-card';

function ProductsContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const [filter, setFilter] = useState<string>(activeCategory);

  const filtered: Product[] = useMemo(() => {
    if (filter === 'all') return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  const tabs = [{ slug: 'all', name: 'All' }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))];

  return (
    <>
      {/* Filter bar */}
      <div className="border-b border-border bg-walnut/50 backdrop-blur-sm sticky top-16 lg:top-20 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <SlidersHorizontal className="h-4 w-4 text-gold flex-shrink-0" />
            {tabs.map((tab) => (
              <button
                key={tab.slug}
                onClick={() => setFilter(tab.slug)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs uppercase tracking-[0.12em] transition-all duration-300 ${
                  filter === tab.slug
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:text-gold hover:border-primary/40'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products in this category yet.</p>
            </div>
          ) : (
            <>
              <div className="mb-8 text-sm text-muted-foreground">
                Showing <span className="text-gold">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'piece' : 'pieces'}
                {filter !== 'all' && (
                  <>
                    {' '}in <span className="text-gold capitalize">{filter.replace('-', ' ')}</span>
                  </>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product, i) => (
                  <div
                    key={product.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${Math.min(i * 0.06, 0.5)}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/8092433/pexels-photo-8092433.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
            alt="Chandra Art and Crafts furniture collection"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">The Collection</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground leading-tight">
            Our Furniture
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore our full range of handcrafted furniture — beds, chairs, dining tables,
            coffee tables, sofas, and cabinets. Each piece is made from solid wood in our
            Jodhpur workshop.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="h-20" />}>
        <ProductsContent />
      </Suspense>
    </>
  );
}
