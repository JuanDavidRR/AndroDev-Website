"use client";

import styles from "../styles";

//Motion
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

//Iconos svg
import { IoLogoJavascript } from "react-icons/io";
import { BsWordpress } from "react-icons/bs";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";

const About = () => (
  <section className={`${styles.paddings} text-white relative z-[10]`} id="nosotros">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* Titulos */}
      <motion.div
        className="section__title"
        variants={fadeIn("up", "tween", 0.2, 1)}
      >
        <section className="flex gap-5 items-center mb-6 z-50">
          <div className="w-[100px] h-[2px] bg-primary-blue"></div>
          <h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-[1.5rem] font-[400]"
          >
            NOSOTROS
          </h2>
        </section>
      </motion.div>

      <motion.h2
        className="text-[1.7rem] lg:text-[2.5rem] font-bold text-center"
        variants={fadeIn("up", "tween", 0.5, 1)}
      >
        ¿QUÉ ES ANDRODEV?
      </motion.h2>
      {/* Textos descriptivos */}

      <motion.section
        variants={fadeIn("up", "tween", 0.7, 1)}
        className="mt-[8px] text-center text-secondary-white"
      >
        <p
          className="py-5 font-normal text-[1.5rem]"
        >
          <span className="font-extrabold">AndroDev</span> es una
          agencia especializada en el desarrollo web que busca{" "}
          <span className="font-extrabold"> </span> de los pequeños,
          medianos negocios y los futuros emprendedores para que puedan alcanzar
          su máximo potencial.
        </p>

        <p
          className="py-5 font-normal text-[1.5rem]"
        >
          Estamos comprometidos con la economía digital que rige el mundo de
          hoy,
          <span className="font-extrabold">
            queremos promover la creación de empresa
          </span>
          proporcionando las herramientas necesarias para que esto pase.
        </p>

        <p
          className="py-5 font-normal text-[1.5rem]"
        >
          Al ser especialistas web nos enfocamos de brindarte todo el ecosistema
          adecuado para triunfar con tu sitio o aplicación web.{" "}
          <span className="font-extrabold">
            Podemos trabajar juntos para crear el sitio web perfecto para ti,
          </span>{" "}
          pero además de eso lo posicionamos gracias al SEO
        </p>
      </motion.section>

      {/* Sección iconos */}
      <motion.section
        variants={fadeIn("up", "tween", 1.5, 1)}
        className={`${styles.paddings} w-full flex flex-wrap gap-10 justify-around text-center mx-auto`}
      >
        <figure>
          <FaHtml5 className="mx-auto" size="50px" color="#fe4c1e" />
          <figcaption className="text-center">HTML</figcaption>
        </figure>
        <figure>
          <FaCss3 className="mx-auto" size="50px" color="#2299f8" />
          <figcaption className="text-center">CSS</figcaption>
        </figure>
        <figure>
          <IoLogoJavascript className="mx-auto" size="50px" color="#f7e018" />
          <figcaption className="text-center">JavaScript</figcaption>
        </figure>
        <figure>
          <BsWordpress className="mx-auto" size="50px" color="#1b769c" />
          <figcaption className="text-center">WordPress</figcaption>
        </figure>
        <figure>
          <FaReact className="mx-auto" size="50px" color="#61dafb" />
          <figcaption className="text-center">React</figcaption>
        </figure>
      </motion.section>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
