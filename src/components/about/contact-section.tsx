"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function AboutContact() {
  const socialLinks = [
    { label: "Instagram", url: "#", icon: "📸" },
    { label: "Email", url: "mailto:contato@example.com", icon: "✉️" },
    { label: "WhatsApp", url: "#", icon: "💬" },
    { label: "LinkedIn", url: "#", icon: "💼" },
  ];

  return (
    <section className="w-full px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
                Vamos Trabalhar Juntos?
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full mt-4"></div>
            </div>

            <p className="text-foreground text-lg font-light leading-relaxed">
              Quer você tenha um evento de ação, um show, uma corrida ou um
              projeto em qualquer outra área da fotografia, posso oferecer
              expertise técnica e visão criativa. Minha especialidade é capturar
              momentos memoráveis com qualidade profissional. Vamos trabalhar
              juntos para criar imagens que contam sua história!
            </p>

            <div className="space-y-4 pt-4">
              <div>
                <p className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                  Email
                </p>
                <p className="text-foreground text-lg font-light mt-1">
                  brenodasilvasousa@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                  Telefone
                </p>
                <p className="text-foreground text-lg font-light mt-1">
                  +55 (21) 99455-74641
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                  Localização
                </p>
                <p className="text-foreground text-lg font-light mt-1">
                  Rio de Janeiro, Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-6">
                Conecte-se Comigo
              </p>
              <div className="grid grid-cols-4 gap-4">
                {socialLinks.map((link, index) => (
                  <Button variant="outline" asChild key={index}>
                    <Link href={link.url}>
                      <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA Form */}
            <div className="bg-muted/50 p-8 rounded-lg space-y-4">
              <h3 className="text-xl font-light text-foreground">
                Solicitar Orçamento
              </h3>
              <p className="text-muted-foreground text-sm font-light">
                Preencha o formulário e receba uma resposta em até 24 horas
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-2 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
                />
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="w-full px-4 py-2 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
                />
                <select className="w-full px-4 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:border-accent">
                  <option value="">Tipo de Projeto</option>
                  <option value="racing">Corrida Automotiva</option>
                  <option value="show">Show/Festival</option>
                  <option value="expo">Exposição Automotiva</option>
                  <option value="portrait">Retrato/Headshot</option>
                  <option value="wedding">Casamento</option>
                  <option value="lifestyle">Lifestyle/Corporativo</option>
                  <option value="other">Outro</option>
                </select>
                <textarea
                  placeholder="Detalhes da sua solicitação"
                  rows={3}
                  className="w-full px-4 py-2 bg-background border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity rounded"
                >
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-12 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50+", label: "Corridas Cobertas" },
            { number: "100+", label: "Eventos Totais" },
            { number: "6+", label: "Especialidades" },
            { number: "4.9★", label: "Avaliação Cliente" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-3xl md:text-4xl font-light text-accent-foreground">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
