"use client";

import styles from "../styles";

//Motion
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

import { blogArticles } from "../constants";
import { lazy, Suspense } from "react";

const InsightCard = lazy(() => import("../components/InsightCard"));

const Blog = () => (
  <section className={`${styles.paddings} relative z-10 text-white`} id="blog">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="section__title">
        <section className="flex gap-5 items-center mb-6 z-50">
          <div className="w-[100px] h-[2px] bg-primary-blue"></div>
          <h2 className="text-[1.5rem] font-[400]">BLOG</h2>
        </section>
      </div>

      <motion.h2
        className="text-[1.7rem] lg:text-[2.5rem] text-white font-bold text-center"
        variants={fadeIn("up", "tween", 0.2, 1)}
      >
        ACTUALÍZATE EN TECNOLGÍA
      </motion.h2>

      {/* Iterando entradas del blog */}
      <Suspense fallback={<span>Cargando...</span>}>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {blogArticles.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </Suspense>
    </motion.div>
  </section>
);

export default Blog;
