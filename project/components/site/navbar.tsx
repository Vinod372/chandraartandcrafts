'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { COMPANY, callLink } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-luxe'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 group-hover:border-primary transition-colors">
            <span className="font-serif text-xl text-gold font-bold">C</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-base lg:text-lg font-semibold text-foreground tracking-wide">
              Chandra
            </span>
            <span className="text-[10px] lg:text-xs tracking-[0.2em] text-gold uppercase">
              Art &amp; Crafts
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-sm font-medium tracking-wide transition-colors duration-300 group',
                pathname === link.href
                  ? 'text-gold'
                  : 'text-foreground/80 hover:text-gold'
              )}
            >
              {link.label}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300',
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>
          ))}
          <a
            href={callLink}
            className="flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-gold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center h-10 w-10 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-500 bg-background/98 backdrop-blur-md border-b border-border',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'py-3 text-sm font-medium tracking-wide border-b border-border/50 transition-colors',
                pathname === link.href
                  ? 'text-gold'
                  : 'text-foreground/80 hover:text-gold'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={callLink}
            className="mt-3 flex items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-3 text-sm font-medium text-gold"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
