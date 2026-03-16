import Image from "next/image";
import breno from "@/assets/breno/breno.jpg";

export function AboutHero() {
  return (
    <section className="w-full mt-12 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Imagem do fotógrafo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-lg shadow-lg ">
              <Image
                src={breno.src}
                alt="Fotógrafo profissional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Texto introdutório */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-sm font-semibold text-accent-foreground uppercase tracking-widest">
                Bem-vindo
              </p>
              <h1 className="text-4xl md:text-5xl font-light text-foreground mt-2 text-balance leading-tight">
                Breno Silva
              </h1>
              <p className="text-lg text-muted-foreground mt-4 font-light">
                Especializado em ação e eventos
              </p>
            </div>

            <div className="space-y-4 text-foreground leading-relaxed text-justify">
              <p className="text-base md:text-lg font-light">
                A fotografia é a forma que encontrei de transformar momentos em
                memórias permanentes. Há mais de dois anos registro eventos
                buscando capturar não apenas imagens, mas emoções reais.
              </p>
              <p className="text-base md:text-lg font-light">
                Acredito que cada evento tem uma narrativa única. Meu objetivo é
                combinar expertise técnica com visão criativa para entregar
                imagens que congelam emoção, ação e beleza em cada frame.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity rounded">
                Ver Portfólio
              </button>
              <button className="px-6 py-3 border border-foreground text-foreground font-medium hover:bg-background transition-colors rounded">
                Agendar Sessão
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
