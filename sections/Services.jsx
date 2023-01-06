"use client";

import styles from "../styles";

import { useState } from "react";

//Motion
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

import { webservices, seoWords } from "../constants";
import { TypingText } from "../components";

import ExploreCard from "../components/ServiceCards";

const Services = () => {
  const [active, setActive] = useState("world-2");
  const [seoActive, setSeoActive] = useState("seo-4");

  return (
    <section className={`${styles.paddings} text-white z-50`} id="servicios">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.5)}
          className="section__title"
        >
          <section className="flex gap-5 items-center mb-6 z-50">
            <div className="w-[100px] h-[2px] bg-primary-blue"></div>
            <h2 className="text-[1.5rem] font-[400]">SERVICIOS</h2>
          </section>
        </motion.div>
        <section className="text-center w-full lg:w-[70%] mx-auto">
          <TypingText title="HAZ CRECER TU NEGOCIO" textStyles="text-center" />
          <motion.p
            className=" text-[1.2rem]"
            variants={fadeIn("up", "tween", 0.4, 1)}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            nesciunt suscipit animi vel obcaecati fuga beatae voluptate
            cupiditate neque, officiis sed architecto repellat pariatur cumque
            rerum fugiat nam perferendis iusto!
          </motion.p>
        </section>

        {/* Sección desarrollo web */}
        <motion.h2
          className="text-[1.7rem] lg:text-[2.5rem] text-white font-bold text-center mt-16"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          DESARROLLO WEB
        </motion.h2>
        {/* Iterando items de desarrollo web */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[90vh] gap-5">
          {webservices.map((word, index) => (
            <ExploreCard
              key={word.id}
              {...word}
              active={active}
              index={index}
              handleClick={setActive}
            />
          ))}
        </div>

        {/* Sección Posicionamiento web */}
        <motion.h2
          className="text-[1.7rem] mt-36 lg:text-[2.5rem] text-white font-bold text-center"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          POSICIONAMIENTO SEO
        </motion.h2>
        {/* Iterando items de SEO */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[90vh] gap-5">
          {seoWords.map((word, index) => (
            <ExploreCard
              key={word.id}
              {...word}
              active={seoActive}
              index={index}
              handleClick={setSeoActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
