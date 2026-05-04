"use client";

import { Category } from "@/types/gallery";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/galeria/${category.slug}`}
      className="block break-inside-avoid mb-4"
    >
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer bg-muted"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden transition-all duration-500">
          <Image
            src={category.coverImage}
            alt={category.title}
            width={800}
            height={1000}
            className={cn(
              "w-full h-auto object-cover transition-transform duration-700 ease-out",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
          
          {/* Base Gradient (Always visible for Title readability) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

          {/* Hover Overlay (Extra darkening on hover) */}
          <div 
            className={cn(
              "absolute inset-0 bg-black/40 transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )} 
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
          <div className="space-y-2">
            <p className="text-[10px] sm:text-xs text-white/60 tracking-[0.2em] uppercase font-medium">
              {category.subtitle}
            </p>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white">
              {category.title}
            </h3>
            
            {/* Description - Visible on Hover */}
            <p
              className={cn(
                "text-xs sm:text-sm text-white/80 leading-relaxed transition-all duration-500 max-w-[90%]",
                isHovered
                  ? "opacity-100 translate-y-0 max-h-20 mt-2"
                  : "opacity-0 translate-y-4 max-h-0"
              )}
            >
              {category.description}
            </p>

            {/* Footer - Count and Explorer Button */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] sm:text-xs text-white/50 font-light">
                {category.photoCount} fotos
              </span>
              <div
                className={cn(
                  "flex items-center text-[10px] sm:text-xs text-white font-medium transition-all duration-300",
                  isHovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                )}
              >
                Explorar <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
