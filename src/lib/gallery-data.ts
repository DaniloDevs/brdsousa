import type { Category } from "@/types/gallery";
import carro from "@/assets/Automotivo/drift-rio/carro2.jpg";
import evento from "@/assets/eventos/evento1.jpg";
import paisagem from "@/assets/paisagem/paisagem.jpg";
import retrato from "@/assets/retratos/retrato1.jpg";

export const categories: Category[] = [
  {
    id: "1",
    slug: "automotivo",
    title: "Automotivos",
    subtitle: "Máquinas em movimento",
    description: "Potência, design e personalidade capturados em imagens que revelam a presença de cada veículo nas ruas.",
    coverImage: carro.src,
    photoCount: 48,
  },
  {
    id: "2",
    slug: "paisagem",
    title: "Paisagens",
    subtitle: "Natureza grandiosa",
    description: "Exploramos a majestade da natureza, desde montanhas imponentes até o delicado nascer do sol sobre vales serenos.",
    coverImage: paisagem.src,
    photoCount: 72,
  },
  {
    id: "3",
    slug: "eventos",
    title: "Eventos",
    subtitle: "A alma revelada",
    description: "Capturamos a essência de cada pessoa através de retratos que revelam personalidade, emoção e história única.",
    coverImage: evento.src,
    photoCount: 72,
  },
  {
    id: "4",
    slug: "retratos",
    title: "Retratos",
    subtitle: "A alma revelada",
    description: "Capturamos a essência de cada pessoa através de retratos que revelam personalidade, emoção e história única.",
    coverImage: retrato.src,
    photoCount: 72,
  },
];
