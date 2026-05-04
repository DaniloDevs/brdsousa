import { categories } from "@/lib/gallery-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Mock photos for now - in a real app, these would come from the category data or a CMS
  const photos = Array.from({ length: 12 }).map((_, i) => ({
    id: `${category.id}-${i}`,
    url: category.coverImage, // Using cover image as placeholder
    alt: `${category.title} foto ${i + 1}`,
  }));

  return (
    <main className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Navigation */}
      <div className="mb-8">
        <Button
          variant="ghost"
          asChild
          className="-ml-4 text-muted-foreground hover:text-foreground"
        >
          <Link href="/galeria" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Voltar para Galeria
          </Link>
        </Button>
      </div>

      {/* Header */}
      <header className="mb-12">
        <p className="text-sm text-accent-foreground tracking-[0.3em] uppercase mb-2">
          Coleção
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
          {category.title}
        </h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {category.description}
        </p>
      </header>

      {/* Uniform Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-square overflow-hidden rounded-lg bg-muted group"
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
