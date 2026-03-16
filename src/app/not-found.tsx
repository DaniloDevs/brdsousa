import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl md:text-font-bold text-primary/20 leading-none mb-2">
            4<span className="inline-block mx-2">0</span>4
          </h1>
        </div>

        <div className=" mb-12">
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Parece que clicou em um link desfocado. A página que procura não
            existe ou foi movida.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 my-12">
          <div className="h-px w-12 bg-accent"></div>
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <div className="h-px w-12 bg-accent"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-muted text-primary rounded-lg font-medium hover:bg-muted/80 transition-colors"
          >
            <Link href="/">
              <Home size={20} />
              Voltar a Home
            </Link>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Se continuar tendo problemas, entre em contato através de nossos
            canais de suporte.
          </p>
        </div>
      </div>
    </div>
  );
}
