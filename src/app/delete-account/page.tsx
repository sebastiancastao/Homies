import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eliminar cuenta | Homies",
  description:
    "Como cerrar tu cuenta de Homies, eliminar datos principales y solicitar borrado adicional si lo necesitas.",
};

export default function DeleteAccount() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-accent blur-3xl opacity-25" />
        <div className="absolute right-[-8%] top-6 h-80 w-80 rounded-full bg-sky-300 blur-3xl opacity-20" />
        <div className="absolute inset-x-0 bottom-[-50%] h-96 rotate-6 bg-gradient-to-tr from-white via-sand to-white opacity-70" />
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <header className="space-y-4">
          <span className="pill inline-flex text-xs uppercase tracking-[0.18em] text-ink/70">
            Cuenta y privacidad
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Elimina tu cuenta y controla que datos mantenemos.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            Puedes cerrar tu cuenta desde la app en cualquier momento. Este proceso borra tu perfil
            visible, historiales de match y mensajes activos. Algunos registros minimos se conservan
            por seguridad, facturacion y cumplimiento legal.
          </p>
        </header>

        <section className="glass rounded-3xl p-8 shadow-card space-y-6">
          <h2 className="text-2xl font-semibold text-ink">Pasos para eliminar tu cuenta</h2>
          <ol className="space-y-3 text-muted leading-relaxed list-decimal list-inside">
            <li>Abre la app de Homies y entra a Ajustes.</li>
            <li>Selecciona Cuenta &gt; Seguridad y elige Eliminar cuenta.</li>
            <li>Confirma con tu metodo de acceso (PIN, biometria o contrasena de la tienda).</li>
            <li>Recibiras un correo confirmando la solicitud. Al completar, tu perfil deja de ser visible.</li>
          </ol>
          <p className="text-sm text-muted">
            Si no ves la opcion, actualiza la app o escribe a <a className="underline" href="mailto:privacy@homies.app">privacy@homies.app</a>.
          </p>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/90 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Que sucede al eliminar</h2>
          <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
            <li>Tu perfil, fotos y descripciones dejan de mostrarse y ya no recibes matches nuevos.</li>
            <li>Se eliminan chats activos y coincidencias visibles para otros usuarios.</li>
            <li>Podemos retener datos minimos para prevenir fraude, gestionar cobros o cumplir leyes.</li>
            <li>Si vuelves a registrarte, se considera una cuenta nueva y tu historial no se restaura.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/85 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Si no tienes acceso a tu cuenta</h2>
          <p className="text-muted leading-relaxed">
            Escribenos desde el correo asociado a la cuenta a <a className="underline" href="mailto:privacy@homies.app">privacy@homies.app</a>
            indicando tu nombre, numero de telefono registrado y ultimo dispositivo usado. Verificaremos identidad y cerraremos la cuenta
            manualmente.
          </p>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/95 p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-ink">Solicitudes adicionales</h2>
          <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
            <li>Pide copia o borrado adicional de datos escribiendo a privacy@homies.app.</li>
            <li>Incluye capturas de la app o comprobantes de pago si aplican.</li>
            <li>Las respuestas pueden tardar mientras verificamos identidad y obligaciones legales.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
