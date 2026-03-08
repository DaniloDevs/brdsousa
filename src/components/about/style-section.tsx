'use client';

export function AboutStyle() {
  const styles = [
    {
      title: 'Corridas Automotivas',
      description:
        'Captura especializada de velocidade, adrenalina e performance nas pistas. Domino técnicas avançadas de motion blur, freezing de ação e panning que transmitem movimento e intensidade.',
      highlights: ['Motion Blur', 'Action Freezing', 'Panning', 'High-Speed'],
    },
    {
      title: 'Shows e Eventos',
      description:
        'Documentação dinâmica de festivais, shows e eventos. Trabalho com iluminação ambiente complexa, captura de momentos espontâneos e emoção bruta, combinando timing perfeito com composição criativa.',
      highlights: ['Iluminação Ambiente', 'Timing', 'Emoção', 'Dinâmica'],
    },
    {
       title: 'Outras Categorias',
      description:
        'Excelência também em retratos, casamentos e lifestyle. Adaptando técnicas e abordagens conforme a natureza e contexto de cada projeto, mantendo qualidade profissional em todas as disciplinas.',
      highlights: ['Retratos', 'Casamentos', 'Lifestyle', 'Corporativo'],
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            Estilo & Abordagem
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mt-4"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div key={index} className="flex flex-col space-y-4 py-6 border-l-2 border-accent pl-6">
              <h3 className="text-2xl font-light text-foreground">{style.title}</h3>

              <p className="text-foreground text-base font-light leading-relaxed">
                {style.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 pt-2">
                {style.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="px-3 py-1  text-xs  font-medium bg-accent/50 text-accent-foreground rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-light text-foreground mb-4">Filosofia</h3>
          <p className="text-foreground text-lg font-light leading-relaxed max-w-3xl">
            Acredito que cada evento, show e corrida tem uma narrativa de ação e emoção que merece
            ser capturada com precisão técnica. Meu trabalho une criatividade visual com conhecimento
            profundo de fotografia de ação. Cada imagem que entrego reflete paixão, expertise e
            comprometimento em eternizar os momentos mais intensos e memoráveis.
          </p>
        </div>
      </div>
    </section>
  );
}
