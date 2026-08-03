'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { COMPANY, waLink, categories, products } from '@/lib/data';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*New Furniture Inquiry*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Email:* ${form.email}`,
      `*Product:* ${form.product || 'General Inquiry'}`,
      ``,
      `*Message:*`,
      form.message,
    ];
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-gold mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-foreground mb-2">Thank You</h3>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          Your inquiry has been prepared in WhatsApp. Just hit send and we will get back to
          you within one business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', email: '', product: '', message: '' });
          }}
          className="mt-6 text-sm text-gold hover:text-gold/80 transition-colors"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
            Full Name *
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
            Phone *
          </label>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
            placeholder="+91 ..."
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
            Product
          </label>
          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Select a product</option>
            {categories.map((c) => (
              <optgroup key={c.slug} label={c.name}>
                {products
                  .filter((p) => p.category === c.slug)
                  .map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
              </optgroup>
            ))}
            <option value="Custom / Bulk Order">Custom / Bulk Order</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
          Message *
        </label>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Tell us what you are looking for — dimensions, quantity, finish, timeline..."
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground hover:shadow-gold-glow transition-all duration-300"
      >
        <MessageCircle className="h-4 w-4" />
        Send via WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground/70">
        Your inquiry opens WhatsApp with your details pre-filled for {COMPANY.phone}
      </p>
    </form>
  );
}
