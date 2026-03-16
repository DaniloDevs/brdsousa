import Link from "next/link";
import carro2 from "@/assets/automotivo/drift-rio/carro2.jpg";
import carro4 from "@/assets/automotivo/drift-rio/carro4.jpg";
import carro5 from "@/assets/automotivo/drift-rio/carro5.jpg";
import retrato from "@/assets/eventos/evento1.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="my-auto inset-0 gap-15 lg:gap-0 flex lg:flex-row flex-col items-center justify-between">
      <div className="flex flex-col justify-center h-[80vh]">
        <div className="space-y-4">
          <div className="flex items-center gap-2 ">
            <div className="w-12 h-0.5 bg-linear-to-r from-white/50 to-white/20" />
            <p className="text-sm uppercase tracking-widest text-white/60 font-light">
              Fotografia & produção audiovisual
            </p>
          </div>

          <div className="space-y-4">
            <h1 className=" text-5xl lg:text-7xl font-bold leading-tight">
              Histórias Visuais
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-xl">
              Capturando momentos que transcendem o comum
            </p>
          </div>

          <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-lg font-light">
            Não é apenas sobre registrar momentos. É sobre criar imagens que
            chamam atenção, contam uma história e elevam sua presença.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-semibold "
            >
              Ver Portfólio
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="border-white/30 text-white hover:bg-white/10 "
            >
              <Link
                target="_blank"
                href={
                  "https://wa.me/5521994557464?text=ola%2C%20gostaria%20de%20fazer%20um%20orcamento"
                }
              >
                Solicitar Orçamento
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Image Showcase */}
      <div className="hidden  md:grid grid-cols-2 grid-rows-3  lg:grid-cols-3 lg:grid-rows-4 gap-4 mx-auto w-full lg:w-1/2 h-full items-center">
        <section className="relative h-full  rounded-2xl col-span-1 row-span-2 lg:col-span-1 lg:row-span-3">
          <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${carro2.src})`,
              }}
            />
          </div>
        </section>

        <section className="relative h-full rounded-2xl lg:col-span-2 lg:row-span-2">
          <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${retrato.src})`,
              }}
            />
          </div>
        </section>

        <section className="relative h-full rounded-2xl lg:col-span-2">
          <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${carro4.src})`,
              }}
            />
          </div>
        </section>

        <section className="relative h-full rounded-2xl col-span-2 lg:col-span-3">
          <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div
              className="w-full h-full bg-cover  bg-center "
              style={{
                backgroundImage: `url(${carro5.src})`,
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
