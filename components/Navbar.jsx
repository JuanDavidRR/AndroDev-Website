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
      document.getElementById("navbar").style.padding = "1rem 2.5rem";
      document.getElementById("navbar").style.background = "#0C7A8E";
      //document.getElementById("btn-nav").style.background = "#313131";
    } else {
      document.getElementById("navbar").style.padding = "2rem 2.5rem";
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
      className={`${styles.xPaddings} py-8 lg:py-8 md:py-20 fixed w-full z-[100] text-white`}
    >
      {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
      <div
        className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
      >
        {/* Logo de Inicio */}
        <h2 className="font-extrabold text-[1.5rem] md:text-[2rem] md:py-4 leading-[30.24px] z-[100]">
          <a href="#inicio">ANDRODEV</a>
        </h2>

        {/* Items de navegación */}
        <ul
          className={`${styles.navbar} ${
            active ? `${styles.navActive}` : `${styles.navInactive}`
          }`}
        >
          <li>
            <a className={`${styles.navItem}`} href="#inicio">
              INICIO
            </a>
          </li>
          <li>
            <a className={`${styles.navItem}`} href="#contacto">
              NOSOTROS
            </a>
          </li>
          <li>
            <a className={`${styles.navItem}`} href="#servicios">
              SERVICIOS
            </a>
          </li>
          <li>
            <a className={`${styles.navItem}`} href="#portfolio">
              PORTAFOLIO
            </a>
          </li>
          <li>
            <a className={`${styles.navItem}`} href="#contacto">
              | BLOG
            </a>
          </li>
          <li>
            <a className={`${styles.buttonCTA} lg:hidden`} href="#contacto">
              INICIA YA
            </a>
          </li>
        </ul>

        {/* Boton CTA Contacto */}
        <a className={`${styles.buttonCTA} hidden lg:flex`} href="#contacto">
          INICIA YA
        </a>
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
