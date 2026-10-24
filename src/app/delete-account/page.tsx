import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eliminar cuenta | Homies",
  description:
    "Como eliminar tu cuenta de Homies y tus datos, desde la app o por correo.",
};

const CONTACT_EMAIL = "brownseb379@gmail.com";

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
            Elimina tu cuenta de Homies.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            Puedes eliminar tu cuenta y tus datos en cualquier momento, desde la app o escribiendonos.
          </p>
        </header>

        <section className="glass rounded-3xl p-8 shadow-card space-y-6">
          <h2 className="text-2xl font-semibold text-ink">Desde la app</h2>
          <ol className="space-y-3 text-muted leading-relaxed list-decimal list-inside">
            <li>Abre Homies e inicia sesion.</li>
            <li>Entra a la pestana de tu perfil (el icono de persona en la barra inferior).</li>
            <li>En la seccion Configuracion, toca Eliminar cuenta.</li>
            <li>Confirma. La cuenta se borra de inmediato y se cierra tu sesion.</li>
          </ol>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/85 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Sin entrar a la app</h2>
          <p className="text-muted leading-relaxed">
            Escribe a <a className="underline" href={`mailto:${CONTACT_EMAIL}?subject=Eliminar%20mi%20cuenta%20de%20Homies`}>{CONTACT_EMAIL}</a>{" "}
            desde el correo con el que te registraste, con el asunto &quot;Eliminar mi cuenta de Homies&quot;.
            Eliminaremos la cuenta en un plazo maximo de 30 dias y te confirmaremos por correo.
          </p>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/90 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Que datos se eliminan</h2>
          <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
            <li>Tu cuenta: correo, contrasena, nombre y telefono.</li>
            <li>Tu perfil: datos personales, preferencias de convivencia, descripcion y datos del inmueble.</li>
            <li>Tus likes, matches y los mensajes del chat.</li>
            <li>Tu identificador de notificaciones push.</li>
            <li>Las fotos que subiste, en un plazo maximo de 30 dias.</li>
          </ul>
          <p className="text-muted leading-relaxed">
            No conservamos copias de estos datos despues de eliminarlos, salvo que una autoridad lo exija por
            ley. Si vuelves a registrarte, se crea una cuenta nueva sin tu historial anterior.
          </p>
        </section>
      </main>
    </div>
  );
}
