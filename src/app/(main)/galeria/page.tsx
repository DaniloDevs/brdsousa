"use client";

import { categories } from "@/lib/gallery-data";
import { CategoryCard } from "@/components/gallery/category-card";

export default function GalleryPage() {
  return (
    <section id="gallery" className="py-6 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-accent-foreground tracking-[0.3em] uppercase mb-2">
              Coleções
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground text-balance">
              Explore Nosso Trabalho
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl text-balance">
              Uma seleção curada de momentos capturados através das lentes,
              organizados por categorias para facilitar sua exploração.
            </p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
