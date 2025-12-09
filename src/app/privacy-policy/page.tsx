import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de privacidad | Homies",
  description:
    "Detalles sobre como Homies recolecta, usa y comparte datos para operar la plataforma y ofrecer experiencias personalizadas.",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-8%] h-72 w-72 rounded-full bg-accent blur-3xl opacity-25" />
        <div className="absolute right-[-8%] top-16 h-80 w-80 rounded-full bg-sky-300 blur-3xl opacity-20" />
        <div className="absolute inset-x-0 bottom-[-45%] h-96 rotate-6 bg-gradient-to-tr from-white via-sand to-white opacity-70" />
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <header className="space-y-4">
          <span className="pill inline-flex text-xs uppercase tracking-[0.18em] text-ink/70">
            Politica de privacidad
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Recogemos datos para operar, personalizar y hacer crecer Homies.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            Al usar Homies aceptas una recoleccion amplia de datos personales, tecnicos y de uso
            para ofrecer coincidencias, seguridad, marketing y mejoras continuas. Esta politica
            explica el alcance de la informacion que reunimos y como la usamos y compartimos.
          </p>
        </header>

        <section className="glass rounded-3xl p-8 shadow-card space-y-6">
          <h2 className="text-2xl font-semibold text-ink">Datos que recopilamos</h2>
          <div className="grid md:grid-cols-2 gap-4 text-muted leading-relaxed">
            <ul className="space-y-2 list-disc list-inside">
              <li>Identidad y contacto: nombre, alias, foto, email, telefono, documento o identificadores estatales.</li>
              <li>Datos de dispositivo: modelo, sistema operativo, identificadores unicos, ajustes, redes y datos de bateria.</li>
              <li>Ubicacion y movimientos: coordenadas GPS precisas, direcciones IP, puntos de acceso cercanos y patrones de desplazamiento.</li>
              <li>Contenido generado: descripciones de perfil, intereses, respuestas, fotos, audio, video y metadatos asociados.</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Actividad en la app: swipes, mensajes, tiempos de respuesta, clics, pantallas vistas y sesiones.</li>
              <li>Pagos y garantias: metodos de pago, historiales de cobro, depositos y verificacion antifraude.</li>
              <li>Datos de terceros: referencias, redes sociales conectadas, listas de contactos (si se habilita) y datos de socios publicitarios.</li>
              <li>Senales de seguridad: reportes de abuso, verificaciones biometricas o de rostro (cuando las habilites) y patrones de riesgo.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/75 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Como usamos la informacion</h2>
          <div className="space-y-2 text-muted leading-relaxed">
            <p>
              Utilizamos estos datos para operar funciones basicas (cuentas, matches, mensajes), personalizar resultados,
              mejorar algoritmos, detectar fraude y cumplir requisitos legales. Tambien los usamos para marketing propio y de
              socios, segmentacion de audiencias, medicion de campanas y desarrollo de nuevos productos.
            </p>
            <p>
              Podemos combinar datos con fuentes publicas y de terceros para enriquecer perfiles, asociarlos entre dispositivos
              y mantener historiales aunque cierres o reinstales tu cuenta.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/90 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Tecnologias de seguimiento</h2>
          <p className="text-muted leading-relaxed">
            Empleamos cookies, SDKs, pixeles, almacenamiento local, identificadores de publicidad, huellas de dispositivo y
            telemetry en tiempo real para entender uso, prevenir abuso y crear perfiles de interes. Algunas tecnologias siguen
            activas incluso si desactivas ciertas cookies en el dispositivo.
          </p>
        </section>

        <section className="glass rounded-3xl p-8 shadow-card space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Con quien compartimos los datos</h2>
          <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
            <li>Proveedores y socios que alojan, procesan pagos, verifican identidad, analizan datos y ofrecen soporte.</li>
            <li>Anunciantes, redes publicitarias y socios de medicion para segmentar, atribuir y optimizar campanas.</li>
            <li>Afiliadas corporativas, potenciales compradores o inversionistas en caso de fusion, adquisicion o venta.</li>
            <li>Autoridades cuando sea requerido o para proteger derechos, prevenir fraudes y garantizar seguridad.</li>
            <li>Otros usuarios de la plataforma segun la configuracion de tu perfil y las funciones que utilices.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/85 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Retencion y control</h2>
          <p className="text-muted leading-relaxed">
            Conservamos datos mientras la cuenta este activa y por periodos extendidos para fines legales, de seguridad,
            auditoria y mejora del servicio. Algunas copias o registros derivados pueden mantenerse de forma indefinida.
            Puedes solicitar acceso, correccion o eliminacion escribiendo a privacy@homies.app; la eliminacion puede ser
            parcial o diferida segun nuestras obligaciones.
          </p>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/95 p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-ink">Tus opciones</h2>
          <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
            <li>Configura permisos de ubicacion, camara, microfono, contactos o notificaciones en tu dispositivo.</li>
            <li>Gestiona preferencias de marketing en los ajustes de tu cuenta; algunas comunicaciones de servicio son obligatorias.</li>
            <li>Desactiva anuncios basados en intereses en el dispositivo; seguiremos midiendo rendimiento y seguridad.</li>
            <li>Solicita copias o borrado de datos en privacy@homies.app. Responderemos conforme a la ley aplicable.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
