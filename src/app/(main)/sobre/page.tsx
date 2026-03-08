import { AboutContact } from "@/components/about/contact-section";
import { AboutExperience } from "@/components/about/experience-section";
import { AboutHero } from "@/components/about/hero-section";
import { AboutStyle } from "@/components/about/style-section";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: 'Sobre Mim | Breno da Silva Sousa- Fotógrafa Profissional',
     description: 'Conheça Breno Silva, fotógrafo profissional especializada eventos. Mais de 2 anos de experiência capturando momentos únicos.',
     keywords: 'fotógrafa, eventos, fotografia profissional, automotivo',
     openGraph: {
          title: 'Sobre Breno Silva | Fotógrafa',
          description: 'Conheça minha história e experiência em fotografia',
          type: 'website',
     },
};

export default function AboutPage() {
     return (
          <main className="w-full">
               <AboutHero />
               <AboutStyle />
               <AboutExperience />
               <AboutContact />
          </main>
     );
}
