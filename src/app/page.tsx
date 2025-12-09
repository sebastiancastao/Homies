const highlights = [
  {
    title: "Swipe inteligente",
    description:
      "Perfiles filtrados por presupuesto, zona y estilo de vida. Solo ves personas con las que realmente podrías vivir.",
  },
  {
    title: "Match seguro",
    description:
      "Todos los perfiles están verificados. Nada de bots, nada de estafas. Solo roommates reales buscando hogar.",
  },
  {
    title: "Chat directo",
    description: "Hiciste match? Chatea directamente en la app. Coordina visitas, habla del presupuesto y decide juntos.",
  },
];

const features = [
  {
    title: "Algoritmo de compatibilidad",
    body: "Te mostramos personas con horarios, hábitos y presupuestos similares. El match perfecto existe, y lo vamos a encontrar.",
  },
  {
    title: "Chat sin rodeos",
    body: "Hiciste match? Habla directo. Pregunta lo que necesites saber antes de compartir espacio. Sin intermediarios.",
  },
  {
    title: "De match a mudanza",
    body: "Organizamos todo lo que necesitan coordinar: visitas, depósito, fecha de entrada. El algoritmo hace match, ustedes deciden.",
  },
];

const metrics = [
  { label: "Ciudades activas", value: "42" },
  { label: "Matches logrados", value: "18k" },
  { label: "Resp. promedio", value: "menos de 1 h" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-accent blur-3xl opacity-30" />
        <div className="absolute right-[-6%] top-10 h-80 w-80 rounded-full bg-sky-300 blur-3xl opacity-20" />
        <div className="absolute inset-x-0 bottom-[-40%] h-96 rotate-6 bg-gradient-to-tr from-white via-sand to-white opacity-80" />
      </div>

      <header className="max-w-6xl mx-auto px-6 pt-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-ink text-sand grid place-items-center font-semibold shadow-card">
            H
          </div>
          <div>
            <div className="text-lg font-semibold leading-tight">Homies</div>
            <p className="text-xs text-muted">Match de roomies</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#product" className="hover:text-ink transition-colors">
            App
          </a>
          <a href="#features" className="hover:text-ink transition-colors">
            Seguridad
          </a>
          <a href="#cta" className="hover:text-ink transition-colors">
            Descargar
          </a>
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <a
            href="https://apps.apple.com/app"
            className="pill text-ink/80 hover:text-ink transition-colors"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store"
            className="pill bg-ink text-sand shadow-card hover:-translate-y-[1px] transition-all"
          >
            Google Play
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        <section
          id="product"
          className="grid md:grid-cols-2 gap-10 items-center pt-14"
        >
          <div className="space-y-6">
            <div className="pill text-xs uppercase tracking-[0.18em] text-ink/70">
              Tinder para roommates
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Swipe, match y muda con tu roommate ideal.
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Desliza perfiles, haz match con personas compatibles y encuentra tu roommate
              perfecto. Sin anuncios raros, sin spam. Solo gente verificada buscando
              lo mismo que tú.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#cta"
                className="rounded-full bg-ink text-sand px-6 py-3 text-sm font-medium shadow-card hover:-translate-y-[1px] transition-all inline-flex items-center gap-2"
              >
                <span>Empezar a hacer match</span>
                <span aria-hidden className="text-lg">→</span>
              </a>
              <a
                href="#features"
                className="rounded-full border border-ink/10 bg-white/60 px-6 py-3 text-sm font-medium text-ink hover:border-ink/20 transition-colors"
              >
                Cómo funciona
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm text-muted">
              {metrics.map((metric) => (
                <div key={metric.label} className="glass rounded-2xl p-4">
                  <div className="text-xs uppercase tracking-wide">
                    {metric.label}
                  </div>
                  <div className="text-2xl font-semibold text-ink mt-2">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">
                  Así se ve la app
                </p>
                <h3 className="text-xl font-semibold text-ink">Tus matches activos</h3>
              </div>
              <span className="pill text-xs bg-ink text-sand">3 nuevos</span>
            </div>

            <div className="mt-6 space-y-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-ink/5 bg-white/70 px-4 py-3 flex items-start gap-3"
                >
                  <div className="h-10 w-10 shrink-0 rounded-2xl bg-sand grid place-items-center text-xs font-semibold text-ink">
                    &gt;
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-ink">
                      {item.title}
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-ink/5 bg-sand/70 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">
                    Match reciente
                  </p>
                  <h4 className="text-lg font-semibold text-ink">
                    Ver depto en Polanco
                  </h4>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs text-ink border border-ink/10">
                  Match 95%
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-xl bg-white/90 border border-ink/5 p-3">
                  <p className="text-xs text-muted uppercase tracking-wide">
                    Con quién
                  </p>
                  <div className="text-ink font-semibold mt-1">Ana, 24</div>
                </div>
                <div className="rounded-xl bg-white/90 border border-ink/5 p-3">
                  <p className="text-xs text-muted uppercase tracking-wide">
                    Cuándo
                  </p>
                  <div className="text-ink font-semibold mt-1">Sáb 2 PM</div>
                </div>
                <div className="rounded-xl bg-white/90 border border-ink/5 p-3">
                  <p className="text-xs text-muted uppercase tracking-wide">
                    Estado
                  </p>
                  <div className="text-ink font-semibold mt-1">En chat</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-6">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-2">
              <p className="pill text-xs uppercase tracking-[0.18em] text-ink/70 inline-flex">
                Matching inteligente
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                Encuentra roommates que realmente encajen contigo.
              </h2>
              <p className="text-muted">
                No más listas interminables de extraños. Solo swipeas, haces match con gente
                compatible y empiezas a planear tu mudanza.
              </p>
            </div>
            <div className="hidden md:block text-sm text-muted">
              Disponible en iOS y Android.
              Empieza gratis hoy.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass rounded-2xl p-5 space-y-3 shadow-card"
              >
                <div className="h-10 w-10 rounded-xl bg-ink text-sand grid place-items-center text-sm font-semibold">
                  &gt;
                </div>
                <h3 className="text-xl font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <p className="pill text-xs uppercase tracking-[0.18em] text-ink/70 inline-flex">
              Descarga gratis
            </p>
            <h3 className="text-2xl font-semibold text-ink">
              Tu próximo roommate está a un swipe de distancia.
            </h3>
            <p className="text-muted">
              Crea tu perfil, desliza entre candidatos verificados y haz match con
              alguien que realmente quiera vivir contigo. Es gratis.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://apps.apple.com/app"
              className="rounded-full border-2 border-ink bg-ink text-sand px-8 py-4 text-base font-semibold shadow-card hover:-translate-y-[2px] hover:shadow-lg transition-all"
            >
              Descargar en iOS
            </a>
            <a
              href="https://play.google.com/store"
              className="rounded-full border-2 border-ink/10 bg-white/80 px-8 py-4 text-base font-semibold text-ink hover:border-ink/30 hover:bg-white transition-all"
            >
              Descargar en Android
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
