import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homies | Match de roomies en Android",
  description:
    "Homies es una app móvil de match entre roomies, activa en Android con perfiles verificados, filtros de seguridad y planificación de mudanza.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body className="bg-sand text-ink antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
