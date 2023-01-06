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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&family=Quicksand:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div className="bg-primary-black">
        {/* Estructura visiual del sitio */}
        <Navbar />
        {children}
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
