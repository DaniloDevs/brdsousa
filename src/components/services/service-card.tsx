"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  whatsappMessage: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  whatsappMessage,
}: ServiceCardProps) {
  const whatsappNumber = "5521994557464";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
      <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
        <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
      </div>

      <h3 className="text-xl font-semibold mb-2 text-white/90">{title}</h3>

      <p className="text-white/60 font-light leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <Button
        asChild
        className="w-full bg-white text-black hover:bg-white/90 font-medium transition-transform group-hover:scale-[1.02]"
      >
        <Link href={whatsappUrl} target="_blank">
          Solicitar Orçamento
        </Link>
      </Button>
    </div>
  );
}
