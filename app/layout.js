//Para componentes del cliente usamos use client
"use client";

//Importando componentes reutilizables de /components
import { Footer, Navbar } from "../components";
import "../styles/globals.css";

//Layout permite delimitar el diseño por cápsula de las páginas, en este caso la navegación principal
const RootLayout = ({ children }) => (
  <html lang="es">
    <head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&family=Quicksand:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <section className="bg-primary-black overflow-hidden">
        {/* Estructura visiual del sitio */}
        <Navbar /><div>{children}</div><Footer />
      </section>
    </body>
  </html>
);

export default RootLayout;
