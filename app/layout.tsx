import type { Metadata } from "next";
import { Inter, Open_Sans, Archivo } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LINEPROS ",
  description:
    "LinePros, a cutting-edge company, has developed the most advanced, comprehensive, and versatile online gambling software on the market. From pre-match sports betting to live betting, LinePros is your ultimate solution for creating your own sportsbook and online casino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="LinePros, a cutting-edge company, has developed the most advanced, comprehensive, and versatile online gambling software on the market. From pre-match sports betting to live betting, LinePros is your ultimate solution for creating your own sportsbook and online casino."
        />
        <meta
          name="description"
          lang="es"
          content="LinePros, una empresa de vanguardia, ha desarrollado el software de apuestas en línea más avanzado, completo y versátil del mercado. Desde apuestas deportivas previas al partido hasta apuestas en vivo, LinePros es tu solución definitiva para crear tu propio sportsbook y casino en línea."
        />
        <meta
          name="keywords"
          content="online gambling software, sportsbook software, online casino software, live betting odds, pre-match betting odds, mobile betting app, live casino integration, sports betting platform, customizable betting software, gambling software solutions, API integration for gambling, support for betting software, advanced betting software, real-time betting odds, best gambling software, online betting management tools, competitive betting odds, gambling software development, scalable betting platform, secure online gambling, innovative gambling technology, betting software customization, sports betting management, casino game integration, user-friendly betting interface, "
        />
        <meta
          name="keywords"
          lang="es"
          content=" software de apuestas en línea, software de sportsbook, software de casino en línea, cuotas de apuestas en vivo, cuotas de apuestas previas al partido, aplicación de apuestas móviles, integración de casino en vivo, plataforma de apuestas deportivas, software de apuestas personalizable, soluciones de software de apuestas, integración de API para apuestas, soporte para software de apuestas, software de apuestas avanzado, cuotas de apuestas en tiempo real, mejor software de apuestas, herramientas de gestión de apuestas en línea, cuotas de apuestas competitivas, desarrollo de software de apuestas, plataforma de apuestas escalable, apuestas en línea seguras, tecnología innovadora de ap
"
        />
      </Head>
      <body className={`${openSans.className} ${archivo.className}`}>
        {children}
      </body>
    </html>
  );
}
