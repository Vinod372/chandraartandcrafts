import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Hammer, Leaf, Globe, Heart, Award, Users } from 'lucide-react';
import { COMPANY, waLink } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Chandra Art and Crafts, a premium furniture manufacturer in Boranada, Jodhpur, Rajasthan. For over 25 years, our artisans have handcrafted solid wood furniture rooted in Rajasthani heritage.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
            alt="Chandra Art and Crafts woodworking workshop"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground leading-tight animate-fade-up">
            A Legacy Carved in Wood
          </h1>
          <p
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            From the workshop lanes of Boranada, Jodhpur, Chandra Art and Crafts has been
            shaping solid wood into heirloom furniture for over two decades.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-luxe">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/30907889/pexels-photo-30907889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Master craftsman using a hand plane in the workshop"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Roots in Jodhpur, Reach Across the World
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Chandra Art and Crafts was founded in {COMPANY.established} in Boranada,
                  Jodhpur — a city long celebrated for its woodwork, its forts, and its
                  unbroken line of artisans. What began as a small workshop with a handful
                  of craftsmen has grown into a manufacturer trusted by homes, hotels, and
                  designers across India and abroad.
                </p>
                <p>
                  We work the way our city has always worked: with patience, with respect
                  for the material, and with an eye for detail that machines cannot
                  replicate. Each bed, chair, table, and cabinet passes through the hands
                  of artisans who have spent decades learning their trade.
                </p>
                <p>
                  Today, our furniture travels to over thirty countries — but every piece
                  still begins in the same workshop, with the same tools, and the same
                  belief: that furniture should be built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-walnut border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">What We Believe</span>
              <div className="h-px w-8 bg-gold/50" />
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground">Our Principles</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: 'Made by Hand',
                text: 'Every joint, carve, and finish is the work of a human hand — not a production line. We believe craft is irreplaceable.',
              },
              {
                icon: Leaf,
                title: 'Honest Materials',
                text: 'We use solid Sheesham, acacia, and mango wood — never veneers or particle board. What you see is what you get.',
              },
              {
                icon: Heart,
                title: 'Built to Last',
                text: 'Our furniture is made to be used daily for decades. We stand behind every piece we send out.',
              },
              {
                icon: Award,
                title: 'Uncompromising Quality',
                text: 'Each item is inspected at every stage. If it does not meet our standard, it does not leave the workshop.',
              },
              {
                icon: Globe,
                title: 'Global Standards',
                text: 'Our packaging and finishing meet export standards, so your furniture arrives safe anywhere in the world.',
              },
              {
                icon: Users,
                title: 'Fair to Artisans',
                text: 'Our craftsmen are the heart of Chandra. We invest in their skill, their families, and their future.',
              },
            ].map((value, i) => (
              <div
                key={i}
                className="group rounded-lg border border-border bg-card/50 p-8 hover:border-primary/40 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/5 mb-5">
                  <value.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">From Log to Living Room</span>
              <div className="h-px w-8 bg-gold/50" />
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground">How We Build</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Wood Selection', text: 'We source and season solid hardwoods, choosing each block for grain and strength.' },
              { step: '02', title: 'Hand Shaping', text: 'Artisans cut, join, and shape every component using traditional hand tools.' },
              { step: '03', title: 'Carving & Detail', text: 'Decorative motifs and fine details are carved by hand, one piece at a time.' },
              { step: '04', title: 'Finish & Deliver', text: 'Each piece is hand-finished, inspected, and packed for safe delivery worldwide.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="font-serif text-5xl text-gold/20 mb-4">{item.step}</div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-6 -right-4 text-gold/30">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-walnut border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-tight">
            Ready to Own a Piece of <span className="text-gradient-gold">Heritage?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Browse our collection or reach out directly — we would be glad to help you find
            or commission the right piece.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground hover:shadow-gold-glow transition-all duration-300"
            >
              Browse Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waLink('Hello, I would like to learn more about Chandra Art and Crafts.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-gold hover:bg-primary/10 transition-all duration-300"
            >
              Message Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
