//page.js es un componente por defecto que permite definir la página home

//Para componentes del cliente usamos use client
"use client";

import { Suspense, lazy } from "react";

import Hero from "../sections/Hero";

const About = lazy(() => import("../sections/About"));
const Services = lazy(() => import("../sections/Services"));
const Blog = lazy(() => import("../sections/Blog"));
const Portfolio = lazy(() => import("../sections/Portfolio"));
const Contact = lazy(() => import("../sections/Contact"));
const Process = lazy(() => import("../sections/Process"));

const Page = () => (
  <>
    <Hero />
    <Suspense fallback={<span>Cargando...</span>}>
      <div className="relative">
        <About />
        {/* <div className="gradient-03 z-0" /> */}
        <Services />
        {/* <div className="gradient-04 z-0" /> */}
        <Portfolio />
        <Process />
      </div>
      <div className="relative">
        {/* <div className="gradient-04 z-0" /> */}
      </div>
      <div className="relative">
        <Blog />
        <Contact />
        {/* <div className="gradient-04 z-0" /> */}
      </div>
    </Suspense>
  </>
);

export default Page;
