import Link from 'next/link';
import { ArrowRight, Hammer, Leaf, Globe, Quote, Camera, MessageCircle, Phone, Mail } from 'lucide-react';
import { categories, featuredProducts, COMPANY, waLink } from '@/lib/data';
import ProductCard from '@/components/site/product-card';
import Gallery from '@/components/site/gallery';
import ContactForm from '@/components/site/contact-form';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/8135289/pexels-photo-8135289.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
            alt="Luxury handcrafted bedroom furniture by Chandra Art and Crafts"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">
                Jodhpur, Rajasthan — Est. {COMPANY.established}
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] text-foreground animate-fade-up">
              Welcome to Chandra Art &
              <br />
              <span className="text-gradient-gold">Crafts</span>
            </h1>
            <p
              className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up"
              style={{ animationDelay: '0.15s' }}
            >
              Chandra Art and Crafts is a premium furniture manufacturer in Boranada,
              Jodhpur. For over two decades we have shaped solid wood into beds, tables,
              sofas, and cabinets that carry the soul of Rajasthani craftsmanship.
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground hover:shadow-gold-glow transition-all duration-300"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            <a
  href="/catalogue.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-gold hover:bg-primary/10 transition-all duration-300"
>
  View Catalogue
</a>          
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-walnut">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              { value: '25+', label: 'Years of Craft' },
              { value: '500+', label: 'Designs Crafted' },
              { value: '100%', label: 'Solid Wood' },
              { value: '30+', label: 'Countries Served' },
            ].map((stat, i) => (
              <div key={i} className="py-8 text-center">
                <div className="font-serif text-3xl lg:text-4xl text-gold">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Collection</span>
              <div className="h-px w-8 bg-gold/50" />
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground">
              Furniture for Every Space
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Six signature categories, each piece shaped from solid hardwoods and finished
              by hand in our Jodhpur workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group relative overflow-hidden rounded-lg border border-border aspect-[4/5] animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={`${cat.name} — ${cat.description}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <cat.icon className="h-5 w-5 text-gold" />
                    <span className="text-xs uppercase tracking-[0.2em] text-gold">
                      {cat.name}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    {cat.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-gold/80 group-hover:text-gold transition-colors">
                    Discover
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="relative py-24 lg:py-32 bg-walnut overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-luxe">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/5974280/pexels-photo-5974280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Artisan carving wood in the Chandra Art and Crafts workshop"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden lg:block rounded-lg overflow-hidden border-4 border-background w-48 aspect-square shadow-luxe">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/4611607/pexels-photo-4611607.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                  alt="Intricate carved wood detailing"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold">The Craft</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-tight">
                Where Heritage Meets the Hand
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every piece begins as a solid block of Sheesham, acacia, or mango wood,
                selected and seasoned in our Boranada workshop. Our artisans — many of
                whom have been with us for generations — shape each joint, carve each
                motif, and finish each surface by hand.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We do not mass-produce. We build furniture the way it was meant to be
                built: slowly, honestly, and to last a lifetime.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Hammer, title: 'Hand-Carved', text: 'Every detail shaped by hand' },
                  { icon: Leaf, title: 'Solid Wood', text: 'No veneers, no shortcuts' },
                  { icon: Globe, title: 'Export Ready', text: 'Packed for global delivery' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <item.icon className="h-6 w-6 text-gold" />
                    <h4 className="font-serif text-sm text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold hover:text-gold/80 transition-colors group"
              >
                Our Story
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold">Featured Pieces</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground">
                Signature Creations
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold hover:text-gold/80 transition-colors"
            >
              View All Products
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32 bg-walnut border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Gallery</span>
              <div className="h-px w-8 bg-gold/50" />
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground">
              A Glimpse Inside the Workshop
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A curated look at our furniture, craftsmanship, and finished interiors. Click
              any image to view it full size.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground/70">
              <Camera className="h-4 w-4 text-gold/60" />
              Placeholder photos — your own images can replace these.
            </div>
          </div>

          <Gallery />
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 lg:py-32 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-10 w-10 text-gold/40 mx-auto mb-6" />
          <blockquote className="font-serif text-2xl lg:text-3xl text-foreground leading-relaxed">
            &ldquo;The dining table we commissioned from Chandra Art and Crafts is the
            centerpiece of our home. The carving, the finish, the weight of the wood —
            it is furniture you do not just own, you inherit.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-sm text-muted-foreground">Interior Design Studio, Mumbai</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold">Quick Inquiry</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-tight">
                Request a Quote
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Fill out the form and your details will be sent straight to our WhatsApp.
                Tell us which piece caught your eye, and we will get back to you with
                pricing, dimensions, and delivery options.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MessageCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  Instant WhatsApp response during business hours
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                  Call us at {COMPANY.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                  Email {COMPANY.email}
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-walnut to-charcoal p-10 lg:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
            <div className="relative">
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-tight">
                Let&apos;s Build Something <span className="text-gradient-gold">Timeless</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Whether you are furnishing a home, a hotel, or a single corner — we would
                love to hear from you. Reach out and we will craft a piece made to measure.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground hover:shadow-gold-glow transition-all duration-300"
                >
                  Start an Inquiry
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={waLink('Hello, I would like to discuss a custom furniture order.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-gold hover:bg-primary/10 transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}