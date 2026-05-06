import { Car, Package, Share2, Store, User, Video } from "lucide-react";
import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/service-card";

export const metadata: Metadata = {
  title: "Serviços | Breno Silva",
  description: "Serviços profissionais de fotografia e vídeo por Breno Silva.",
};

const services = [
  {
    title: "Foto para E-commerce",
    description:
      "Fotografia profissional de produtos para lojas virtuais, com foco em detalhes e fidelidade de cores para aumentar suas vendas.",
    icon: Package,
    whatsappMessage:
      "Olá Breno, gostaria de saber mais sobre fotos para produtos de e-commerce.",
  },
  {
    title: "Foto Automotiva",
    description:
      "Capturando a essência e o design de veículos em movimento ou estáticos. Ideal para entusiastas, colecionadores e marcas.",
    icon: Car,
    whatsappMessage:
      "Olá Breno, tenho interesse em fotos para o meio automotivo.",
  },
  {
    title: "Vídeo Automotivo",
    description:
      "Produções audiovisuais dinâmicas que destacam a performance e a estética do seu veículo com edição profissional.",
    icon: Video,
    whatsappMessage:
      "Olá Breno, gostaria de um orçamento para vídeo automotivo.",
  },
  {
    title: "Fachada e Interior",
    description:
      "Vídeos e fotos institucionais que valorizam o seu espaço físico, transmitindo profissionalismo e convidando novos clientes.",
    icon: Store,
    whatsappMessage:
      "Olá Breno, tenho interesse em vídeo de fachada/interior de loja.",
  },
  {
    title: "Social Media",
    description:
      "Conteúdo otimizado para Reels e TikTok, focado em retenção e engajamento para elevar a presença da sua marca.",
    icon: Share2,
    whatsappMessage:
      "Olá Breno, gostaria de saber mais sobre vídeos para redes sociais.",
  },
  {
    title: "Retrato",
    description:
      "Sessões individuais focadas em expressar sua personalidade e profissionalismo através de imagens impactantes.",
    icon: User,
    whatsappMessage:
      "Olá Breno, gostaria de saber mais sobre sessões de retrato.",
  },
];

export default function ServicesPage() {
  return (
    <main className="py-12 px-4 md:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-0.5 bg-white/20" />
          <p className="text-sm uppercase tracking-widest text-white/60 font-light">
            Soluções Visuais
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Meus Serviços
        </h1>
        <p className="text-white/60 max-w-2xl font-light text-lg">
          Ofereço soluções completas em fotografia e vídeo para elevar sua
          marca, produto ou projeto pessoal ao próximo nível.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </main>
  );
}
