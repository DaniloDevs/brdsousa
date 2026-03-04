import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="inset-0 flex items-center justify-between">
      <div className="flex flex-col justify-center h-[80vh]">
        <div className="space-y-4">
          <div className="flex items-center gap-2 ">
            <div className="w-12 h-0.5 bg-linear-to-r from-white/50 to-white/20" />
            <p className="text-sm uppercase tracking-widest text-white/60 font-light">
              Fotografia & Vídeo
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
            Cada projeto é uma experiência imersiva. Especializado em fotografia comercial, retratos e produção audiovisual de alta qualidade que comunica sua essência.
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
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 "
            >
              Contato
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Image Showcase */}
      <div className="hidden lg:flex w-1/2 h-full items-center justify-end pr-8">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(45deg, #2a2a2a 0%, #1a1a1a 100%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white/30">
                <div className="text-center">
                  <div className="text-6xl mb-2">📸</div>
                  <p className="text-sm">Imagem do Portfólio</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -left-8 w-32 h-32 border border-white/10 rounded-lg transform -rotate-12 bg-black/20 backdrop-blur-sm" />

            <div className="absolute -bottom-12 right-0 w-24 h-40 border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm" />
          </div>
        </div>
    </div>
  )
}
