'use client';

//Motion
import { motion } from 'framer-motion';
import { fadeIn, textContainer, textVariant2 } from '../utils/motion';

//Custom text es el componente que permite crear animaciones para los textos

//Animación de texto de animación que simula el teclado
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-[1.5rem] text-white font-bold uppercase my-6 ${textStyles}`}
  >
    {/* Iterando las letras que encontramos en el texto */}
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

//Animación de titulos
export const TitleText = ({ title, textStyles }) => (
  <motion.h3
    variants={fadeIn("up", "tween", 0.5, 1)}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] z-10 ${textStyles} text-white`}
  >
    {title}
  </motion.h3>
);
