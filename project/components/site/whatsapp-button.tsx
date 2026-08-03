'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { waLink } from '@/lib/data';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <div className="relative">
        {expanded && (
          <div className="absolute bottom-16 right-0 w-64 rounded-xl border border-border bg-card p-4 shadow-luxe animate-scale-in">
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-sm text-gold">Chat with us</span>
              <button onClick={() => setExpanded(false)} aria-label="Close">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              Have a question about our furniture? Send us a message on WhatsApp and
              we&apos;ll reply shortly.
            </p>
            <a
              href={waLink('Hello Chandra Art and Crafts, I am interested in your furniture.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Start Chat
            </a>
          </div>
        )}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-gold-glow hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp chat"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
}
