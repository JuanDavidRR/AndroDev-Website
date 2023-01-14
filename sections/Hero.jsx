"use client";

import styles from "../styles";

//Motion
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

import { Particle } from "../components";

const Hero = () => {
  return (
    <section
      className={`${styles.yPaddings} flex flex-col justify-center items-center h-[100vh] text-white`}
      id="inicio"
    >
      {/* Cargando las partículas dinámicas */}
      {/* <Particle /> */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col text-center`}
      >
        {/* Sección de titulos */}
        <div className="flex pt-16 justify-center items-center flex-col relative z-0">
          <motion.h1
            variants={textVariant(1.1)}
            className={`${styles.slideTitle} py-10 lg:py-3`}
          >
            <span className="text-secondary-blue font-bold">ANDRODEV</span> ES TU
            AGENCIA DE DESARROLLO WEB
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h2 className={`${styles.heroHeading}`}>
              <span className="text-secondary-blue">TRANSFORMEMOS</span> <br /> TU
              NEGOCIO
            </h2>
          </motion.div>
        </div>
        {/* Slides suspendidos temporalmente */}
        {/* <section className="w-full m-auto py-10 px-4 relative group text-center">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w- h-full rounded-2xl bg-center bg-cover duration-500"
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="mx-auto w-[80%]"
            >
              <h2 className={styles.slideTitle}>{slides[currentIndex].title}</h2>
              <p>{slides[currentIndex].text}</p>
            </motion.div>
          </div>

          <div
            onClick={prevSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactLeft size={30} />
          </div>

          <div
            onClick={nextSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactRight size={30} />
          </div>

          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
          
        </section> */}
        {/* Copy descriptivo Hero */}
        <section className="lg:w-[70%] w-[80%] mx-auto flex flex-col items-center text-center py-8">
          <motion.p
            variants={textVariant(1.8)}
            className="text-[1.4rem] lg:text-[1.3rem] leading-6 md:leading-10 md:text-[2rem]"
          >
            Mediante nuestros servicios web prepara tu negocio para dar el
            siguiente paso: <strong>La prosperidad digital</strong>. Vamos
            juntos de menos a más y logremos los
            <strong>mejores resultados para tu negocio</strong>
          </motion.p>

          {/* CTA para formulario */}
          <a href="#contacto">
            <motion.button
              variants={textVariant(2)}
              className={`${styles.buttonCTA} my-10`}
            >
              INICIA AHORA
            </motion.button>
          </a>
          <motion.img
            variants={fadeIn("up", "tween", 0.3, 1)}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-0"
          />
        </section>
      </motion.div>
    </section>
  );
};

export default Hero;
