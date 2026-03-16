"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import {
     Carousel,
     CarouselContent,
     CarouselItem,
     CarouselNext,
     CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import carro from "@/assets/Automotivo/drift-rio/carro2.jpg"
import paisagem from "@/assets/paisagem/paisagem.jpg"
import evento from "@/assets/eventos/evento1.jpg"
import retrato from "@/assets/retratos/retrato1.jpg"
import Link from "next/link"

const categories = [
     {
          id: 1,
          title: "Automotivos",
          subtitle: "Máquinas em movimento",
          description: "Registramos a potência, o design e a personalidade de cada veículo através de imagens que destacam linhas, velocidade e presença nas ruas.",
          image: carro.src,
          photoCount: 48,
          url: "/automotivo"
     },
     {
          id: 2,
          title: "Paisagens",
          subtitle: "Natureza grandiosa",
          description: "Exploramos a majestade da natureza, desde montanhas imponentes até o delicado nascer do sol sobre vales serenos.",
          image: paisagem,
          photoCount: 72,
          url: "/paisagem"
     },
     {
          id: 3,
          title: "Eventos",
          subtitle: "A alma revelada",
          description: "Capturamos a essência de cada pessoa através de retratos que revelam personalidade, emoção e história única.",
          image: evento.src,
          photoCount: 72,
          url: "eventos"
     },
     {
          id: 4,
          title: "Retratos",
          subtitle: "A alma revelada",
          description: "Capturamos a essência de cada pessoa através de retratos que revelam personalidade, emoção e história única.",
          image: retrato,
          photoCount: 72,
          url: "/retratos"
     },
]

export default function CategoryCarousel() {
     const [hoveredCard, setHoveredCard] = useState<number | null>(null)

     return (
          <section id="gallery" className="py-6">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
                         <div>
                              <p className="text-sm text-accent-foreground tracking-[0.3em] uppercase mb-2">
                                   Coleções
                              </p>
                              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground text-balance">
                                   Explore Nossas Categorias
                              </h2>
                         </div>
                         {/* <Button variant="outline" className="w-fit group">
                              Ver Todas as Fotos
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                         </Button> */}
                    </div>

                    {/* Carousel */}
                    <Carousel
                         opts={{
                              align: "start",
                              loop: true,
                         }}
                         className="w-full "
                    >
                         <CarouselContent className="-ml-4 md:-ml-6">
                              {categories.map((category) => (
                                   <CarouselItem
                                        key={category.id}
                                        className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 "
                                   >
                                        <Link href={`/galeria${category.url}`}>
                                             <div
                                                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                                                  onMouseEnter={() => setHoveredCard(category.id)}
                                                  onMouseLeave={() => setHoveredCard(null)}
                                             >
                                                  {/* Image Container */}
                                                  <div className="relative aspect-3/4 overflow-hidden">
                                                       <Image
                                                            src={category.image}
                                                            alt={category.title}
                                                            fill
                                                            className={cn(
                                                                 "object-cover transition-all duration-700",
                                                                 hoveredCard === category.id ? "scale-110" : "scale-100"
                                                            )}
                                                       />
                                                       {/* Overlay */}
                                                       <div
                                                            className={cn(
                                                                 "absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent transition-opacity duration-500",
                                                                 hoveredCard === category.id ? "opacity-90" : "opacity-70"
                                                            )}
                                                       />
                                                  </div>

                                                  {/* Content */}
                                                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                                                       <div className="space-y-3">
                                                            <p className="text-xs text-accent-foreground/60 tracking-widest uppercase">
                                                                 {category.subtitle}
                                                            </p>
                                                            <h3 className="font-serif text-2xl sm:text-3xl text-foreground">
                                                                 {category.title}
                                                            </h3>
                                                            <p
                                                                 className={cn(
                                                                      "text-sm text-muted-foreground leading-relaxed transition-all duration-500",
                                                                      hoveredCard === category.id
                                                                           ? "opacity-100 translate-y-0"
                                                                           : "opacity-0 translate-y-4"
                                                                 )}
                                                            >
                                                                 {category.description}
                                                            </p>
                                                            <div className="flex items-center justify-between pt-2">
                                                                 <span className="text-xs text-muted-foreground">
                                                                      {category.photoCount} fotos
                                                                 </span>
                                                                 <Button
                                                                      variant="ghost"
                                                                      size="sm"
                                                                      className={cn(
                                                                           "text-accent-foreground/60 hover:text-accent-foreground/60 p-0 h-auto font-normal transition-all duration-300",
                                                                           hoveredCard === category.id
                                                                                ? "opacity-100 translate-x-0"
                                                                                : "opacity-0 -translate-x-4"
                                                                      )}
                                                                 >
                                                                      Explorar
                                                                      <ArrowRight className="ml-1 h-3 w-3" />
                                                                 </Button>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Link>
                                   </CarouselItem>
                              ))}
                         </CarouselContent>

                         {/* Navigation Buttons */}
                         <div className="flex items-center justify-center gap-4 mt-8">
                              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border hover:border-accent hover:bg-accent/10" />
                              <CarouselNext className="static translate-y-0 h-10 w-10 border-border hover:border-accent hover:bg-accent/10" />
                         </div>
                    </Carousel>
               </div>
          </section>
     )
}
