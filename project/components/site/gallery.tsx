'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '@/lib/data';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const nextImage = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  }, []);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, closeLightbox, nextImage, prevImage]);

  return (
    <>
      {/* Masonry gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
        {galleryImages.map((image, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group relative block w-full overflow-hidden rounded-lg border border-border break-inside-avoid animate-fade-up"
            style={{ animationDelay: `${Math.min(i * 0.06, 0.4)}s` }}
            aria-label={`View ${image.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif text-lg text-foreground leading-tight">
                    {image.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{image.category}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background/60 backdrop-blur-sm flex-shrink-0">
                  <ZoomIn className="h-5 w-5 text-gold" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground hover:text-gold hover:border-primary/40 transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 lg:left-8 flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground hover:text-gold hover:border-primary/40 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="flex flex-col items-center max-w-5xl w-full px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-luxe animate-scale-in"
            />
            <div className="mt-6 text-center">
              <h3 className="font-serif text-xl text-foreground">
                {galleryImages[activeIndex].title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {galleryImages[activeIndex].category}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-2">
                {activeIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 lg:right-8 flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground hover:text-gold hover:border-primary/40 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
