"use client";

import styles from "../styles";

import PortfolioItem from "../components/PortfolioItem";

import { portfolio } from "../constants";
//Motion
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Portfolio = () => {
  return (
    <section className={`${styles.paddings} text-white z-50`} id="portfolio">
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} product-list-text mx-auto flex flex-col`}
        id="portafolio"
      >
        <div
          className={`${styles.innerWidth} product-list-text mx-auto flex flex-col`}
        >
          <div className="section__title">
            <section className="flex gap-5 items-center mb-6 z-50">
              <div className="w-[100px] h-[2px] bg-primary-blue"></div>
              <h2 className="text-[1.5rem] font-[400]">PORTAFOLIO</h2>
            </section>
          </div>
          <motion.h2
            className="text-[1.7rem] lg:text-[2.5rem] text-white font-bold text-center"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            LO QUE PODEMOS HACER POR TI
          </motion.h2>{" "}
          <p className="product-list-description my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima
            ex, consequuntur repellendus culpa inventore quibusdam, quis dolores
            sit, rerum veritatis dolore voluptas. Porro quidem cumque sed rem
            atque fuga.
          </p>
        </div>
        <div className="w-full">
          {/* Iterando items del portafolio */}
          <ul className="portfolio-grid">
            {portfolio.slice(0, 6).map((product, index) => (
              <PortfolioItem key={product.id} {...product} index={index} />
            ))}
          </ul>
        </div>
      </motion.section>
    </section>
  );
};

export default Portfolio;
