import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de privacidad | Homies",
  description:
    "Que datos recoge la app Homies, para que los usa, con quien los comparte y como puedes eliminarlos.",
};

const CONTACT_EMAIL = "brownseb379@gmail.com";

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
            Que datos usa Homies y para que.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            Homies es una app para encontrar roomies y lugares para vivir en Colombia. Esta politica
            explica que informacion recogemos, como la usamos y como puedes eliminarla. Ultima
            actualizacion: 24 de octubre de 2026.
          </p>
        </header>

        <section className="glass rounded-3xl p-8 shadow-card space-y-6">
          <h2 className="text-2xl font-semibold text-ink">Datos que recopilamos</h2>
          <div className="grid md:grid-cols-2 gap-4 text-muted leading-relaxed">
            <ul className="space-y-2 list-disc list-inside">
              <li>Cuenta: correo electronico, contrasena (la guarda cifrada nuestro proveedor de autenticacion), nombre y telefono si decides agregarlo.</li>
              <li>Perfil: fecha de nacimiento (para confirmar que eres mayor de 18 anos), genero, ciudad, barrio, direccion actual si la escribes, presupuesto y fecha de mudanza.</li>
              <li>Convivencia: mascotas, si fumas, horarios, limpieza, visitas, bebidas, cocina, estrato y el genero con el que prefieres vivir.</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Fotos y descripcion: tus fotos de perfil, las fotos de tu espacio y los detalles del inmueble si ofreces un lugar (precio, tipo, tamano y comodidades).</li>
              <li>Actividad en la app: los perfiles que te gustan o descartas, tus matches y los mensajes que envias en el chat.</li>
              <li>Dispositivo: un identificador para enviarte notificaciones push y tus ajustes de notificaciones.</li>
            </ul>
          </div>
          <p className="text-muted leading-relaxed">
            No accedemos al GPS de tu telefono, a tus contactos, a tu microfono ni a tu camara. La ubicacion
            que usamos es la ciudad y el barrio que tu escribes. Solo accedemos a tu galeria cuando eliges una
            foto para subir. No mostramos publicidad ni usamos herramientas de analitica de terceros.
          </p>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/75 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Como usamos la informacion</h2>
          <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
            <li>Crear y mantener tu cuenta e iniciar sesion.</li>
            <li>Mostrarte perfiles y lugares compatibles con tus preferencias.</li>
            <li>Permitir los matches y el chat entre usuarios.</li>
            <li>Enviarte notificaciones de nuevos matches y mensajes.</li>
            <li>Proteger la plataforma contra abusos y atender tus solicitudes de soporte.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/90 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Que ven otros usuarios</h2>
          <p className="text-muted leading-relaxed">
            Tu perfil (nombre, edad, fotos, ciudad, barrio, descripcion, preferencias de convivencia y, si
            ofreces un lugar, los datos del inmueble) es visible para otros usuarios de Homies, porque ese es
            el objetivo de la app. Los mensajes del chat solo los ven las personas de esa conversacion.
          </p>
        </section>

        <section className="glass rounded-3xl p-8 shadow-card space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Con quien compartimos los datos</h2>
          <p className="text-muted leading-relaxed">
            No vendemos tu informacion ni la compartimos con anunciantes. Solo la procesan los proveedores que
            hacen funcionar la app:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
            <li>Supabase: base de datos, inicio de sesion y almacenamiento de fotos.</li>
            <li>Expo y Google Firebase Cloud Messaging: envio de notificaciones push.</li>
            <li>Google Maps: mostrar en el mapa la zona de un inmueble.</li>
            <li>Autoridades, solo cuando la ley lo exija.</li>
          </ul>
          <p className="text-muted leading-relaxed">
            Todos los datos viajan cifrados (HTTPS) entre tu telefono y estos servicios.
          </p>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/85 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-ink">Conservacion y eliminacion</h2>
          <p className="text-muted leading-relaxed">
            Guardamos tus datos mientras tu cuenta este activa. Puedes eliminar tu cuenta en cualquier momento
            desde la app, en Cuenta &gt; Eliminar cuenta. Al hacerlo se borran tu perfil, tus likes, matches y
            mensajes. Las fotos que subiste se eliminan en un plazo maximo de 30 dias. Tambien puedes pedir la
            eliminacion sin entrar a la app siguiendo los pasos de{" "}
            <a className="underline" href="/delete-account">esta pagina</a>.
          </p>
        </section>

        <section className="rounded-3xl border border-ink/5 bg-white/95 p-8 space-y-3">
          <h2 className="text-2xl font-semibold text-ink">Tus derechos</h2>
          <ul className="list-disc list-inside space-y-2 text-muted leading-relaxed">
            <li>Consultar y corregir tus datos editando tu perfil en la app.</li>
            <li>Pedir una copia o la eliminacion de tus datos escribiendo a{" "}
              <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
            <li>Desactivar las notificaciones o el acceso a la galeria desde los ajustes de tu telefono.</li>
            <li>Presentar reclamos ante la Superintendencia de Industria y Comercio, segun la Ley 1581 de 2012.</li>
          </ul>
          <p className="text-muted leading-relaxed">
            Homies es solo para mayores de 18 anos. Si cambiamos esta politica, actualizaremos la fecha de
            esta pagina. Para cualquier pregunta escribe a{" "}
            <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
