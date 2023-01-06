//page.js es un componente por defecto que permite definir la página home

//Para componentes del cliente usamos use client
'use client';

// Secciones del sitio reutilizables /sections
import About from "../sections/About";
import Services from "../sections/Services";
import Blog from "../sections/Blog";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";
import Process from "../sections/Process";
import Hero from "../sections/Hero";


const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Services />
      <div className="gradient-04 z-0" />

      <Portfolio />
      <Process />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <Blog />
      <Contact />
      <div className="gradient-04 z-0" />
    </div>
  </div>
);

export default Page;
