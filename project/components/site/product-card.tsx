import { ArrowUpRight, MessageCircle } from 'lucide-react';
import type { Product } from '@/lib/data';
import { waLink as buildWaLink } from '@/lib/data';

export default function ProductCard({ product }: { product: Product }) {
  const quoteMessage = `Hello Chandra Art and Crafts, I would like to request a quote for the ${product.name} (${product.category.replace('-', ' ')}).`;

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-luxe flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={`${product.name} — ${product.description}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <span className="absolute top-3 left-3 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-gold border border-primary/30">
          {product.materials}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg text-foreground leading-tight group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-gold transition-colors flex-shrink-0 mt-1" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto pt-5">
          <a
            href={buildWaLink(quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/5 px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] text-gold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
