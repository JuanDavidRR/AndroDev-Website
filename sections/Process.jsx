"use client";

import styles from "../styles";

import { procesosAndrodev } from "../constants";

import StartSteps from "../components/StartSteps";

//Motion
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import Image from "next/image";

const Process = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth}  flex lg:flex-row flex-col gap-8 justify-center items-center`}
    >
      {/* Sección izquierda */}
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 flex-col ${styles.flexCenter}`}
      >
        <section className="flex gap-5 items-center z-50">
          <div className="w-[100px] h-[2px] bg-primary-blue"></div>
          <h2 className="text-[1.5rem] font-[400] text-white">
            NUESTRO PROCESO
          </h2>
        </section>

        {/* Imagen descriptiva */}
        <Image
          src="/get-started.webp"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          loading="lazy"
          width={600}
          height={600}
        />
      </motion.div>
      {/* Sección Derecha */}
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex flex-col"
      >
        <motion.h2
          className="text-[1.7rem] lg:text-[2.5rem] text-white font-bold text-center"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          TRABAJEMOS JUNTOS
        </motion.h2>
        {/* Iterando los pasos del proceso */}
        <div className="mt-[31px] flex flex-col w-auto gap-[24px]">
          {procesosAndrodev.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Process;
