"use client";

export function AboutExperience() {
  const experiences = [
    {
      year: "2025 - Presente",
      title: "Fotógrafo Profissional Independente",
      description:
        "Atuo como fotógrafo independente oferecendo serviços em múltiplas categorias. Minha especialidade reside em fotografia de ação — eventos, shows e corridas automotivas — mas trabalho com excelência em retratos, casamentos e lifestyle também.",
      achievements: [
        "50+ corridas automotivas cobertas",
        "100+ eventos e shows documentados",
        "Expertise em fotografia de ação",
        "Cliente focus e qualidade profissional",
      ],
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            Trajetória Profissional
          </h2>
          <p className="text-muted-foreground mt-4 text-lg font-light">
            Desde 2025, trabalhando com foco em ação e eventos, com
            versatilidade em todas as áreas
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 md:gap-12">
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center md:flex">
                <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-md"></div>
                {index !== experiences.length - 1 && (
                  <div className="w-1 h-32 bg-border mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <p className="text-sm font-extralight  text-white/60 italic uppercase tracking-widest">
                  {exp.year}
                </p>
                <h3 className="text-2xl font-light text-foreground mt-2">
                  {exp.title}
                </h3>
                <p className="text-foreground text-base font-light leading-relaxed mt-3">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <p className="text-muted-foreground text-sm">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
