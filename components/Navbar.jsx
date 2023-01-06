"use client";

import React, { useEffect, useState } from "react";

import styles from "../styles";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";

import Link from "next/link";

const Navbar = () => {
  //Manejo del estado para abrir el menú en dispositivos móviles
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  //Función para efecto del color variable en el navbar
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar").style.padding = "7px 20px";
      document.getElementById("navbar").style.background = "#139cb5";
      //document.getElementById("btn-nav").style.background = "#313131";
    } else {
      document.getElementById("navbar").style.padding = "30px 20px";
      document.getElementById("navbar").style.background = "transparent";
      document.getElementById("navbar").style.transition = "0.4s";
      //document.getElementById("btn-nav").style.background = "#139cb5";
    }
  }

  //Cargando la función color del navbar al momento de realizar la acción de scroll
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <motion.nav
      id="navbar"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 fixed w-full z-[100] text-white`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
      >
        {/* Logo de Inicio */}
        <h2 className="font-extrabold text-[24px] leading-[30.24px] z-[100]">
          <Link href="#inicio">ANDRODEV</Link>
        </h2>
        
        {/* Items de navegación */}
        <ul
          className={`${styles.navbar} ${
            active ? `${styles.navActive}` : `${styles.navInactive}`
          }`}
        >
          <Link href="#inicio">
            <li>INICIO</li>
          </Link>
          <Link href="#nosotros">
            <li>NOSOTROS</li>
          </Link>
          <Link href="#servicios">
            <li>SERVICIOS</li>
          </Link>
          <Link href="#portfolio">
            <li>PORTAFOLIO</li>
          </Link>
          <Link href="/test">
            <li>BLOG</li>
          </Link>
        </ul>

        {/* Boton CTA Contacto */}
        <button className={`${styles.buttonCTA} hidden lg:flex md:flex`}>
          <Link href="#contacto">INICIA YA</Link>
        </button>
        {/* Boton menú Hamburguesa  */}
        <div onClick={handleClick} className="lg:hidden">
          {active ? (
            <AiOutlineClose size="30px" className="icon" />
          ) : (
            <AiOutlineMenuFold size="30px" className="icon" />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
