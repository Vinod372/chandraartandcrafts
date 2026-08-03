import type { Metadata } from 'next';
import { MapPin, Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import { COMPANY, waLink, callLink, emailLink } from '@/lib/data';
import ContactForm from '@/components/site/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Chandra Art and Crafts. Visit us in Boranada, Jodhpur, Rajasthan, call or WhatsApp +91 8290562795, or send an inquiry for premium handcrafted furniture.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/6612774/pexels-photo-6612774.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
            alt="Contact Chandra Art and Crafts"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Get in Touch</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground leading-tight">
            Let&apos;s Talk Furniture
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you have a question, a custom request, or a bulk order — we would love
            to hear from you. Reach us by phone, WhatsApp, or the form below.
          </p>
        </div>
      </section>

      {/* Contact methods + form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: contact info */}
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
                Reach Us Directly
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/5 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-foreground mb-1">Our Workshop</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {COMPANY.location}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href={callLink}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/5 flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-gold transition-colors">
                      {COMPANY.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={emailLink}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/5 flex-shrink-0">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-gold transition-colors break-all">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={waLink('Hello Chandra Art and Crafts, I am interested in your furniture.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-lg border border-primary/30 bg-primary/5 p-5 hover:bg-primary/10 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-foreground mb-1">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-gold transition-colors">
                      Chat with us instantly — {COMPANY.phone}
                    </p>
                  </div>
                </a>
              </div>

              {/* Hours */}
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-gold" />
                <span>Monday — Saturday, 9:30 AM to 7:00 PM IST</span>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
                Send an Inquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden border border-border shadow-luxe">
            <iframe
              title="Chandra Art and Crafts location — Boranada, Jodhpur"
              src="https://www.google.com/maps?q=Boranada,Jodhpur,Rajasthan,India&output=embed"
              className="w-full h-[400px] grayscale invert opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
