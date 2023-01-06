"use client";

import React, { useState } from "react";
import { CardCarrusel } from "../components";
import Carrousel from "../components/Carrusel";
import { cardsData } from "../constants";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const Advantage = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section className={`${styles.paddings} text-white z-50 mx-auto`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <h2>NOSOTROS</h2>
        <h3 className="section__subtitle">La Agencia que se ajusta a ti</h3>
        <div id="advantage">
          <Carrousel
            onSlideChange={setSelected}
            breakpoints={{
              300: {
                slidesPerView: 1.5,
                initialSlide: 2,
              },
              460: {
                slidesPerView: 1.7,
                initialSlide: 2,
              },
              580: {
                slidesPerView: 2,
                initialSlide: 2,
              },
              720: {
                slidesPerView: 2,
                initialSlide: 2,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 30,
                initialSlide: 2,
              },
              900: {
                slidesPerView: 2.5,
                spaceBetween: 30,
                initialSlide: 2,
              },
              1020: {
                slidesPerView: 3,
                spaceBetween: 0,
                initialSlide: 2,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
                initialSlide: 2,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 1,
                initialSlide: 2,
              },
              1366: {
                slidesPerView: 3,
                spaceBetween: 0,
                initialSlide: 2,
              },
            }}
          >
            {cardsData.map((card, i) => {
              const [isLeft, isRight] = [i < selected - 1, i > selected + 1];
              const isFar = isLeft || isRight;

              return (
                <CardCarrusel
                  key={"card-" + i}
                  title={card.title}
                  description={card.description}
                  selected={selected === i}
                  far={isFar}
                  img={card.img}
                  className={`${
                    isLeft && "lg2:translate-x-16 xl2:translate-x-12"
                  } ${isRight && "lg2:-translate-x-16 xl2:-translate-x-12"}`}
                />
              );
            })}
          </Carrousel>
        </div>
      </motion.div>
    </section>
  );
};

export default Advantage;
