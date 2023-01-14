"use client";

//Importando motion
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from '../utils/motion';


const PortfolioItem = ({ title, img, description, link, index }) => {
  return (
    <motion.li
      variants={fadeIn("right", "spring", index * 0.3, 0.5)}
      className="product-wrap"
    >
      {/* Marco contenedor de PC  */}
      <article className="product">
        {/* Botones marcO */}
        <div className="product-browser">
          <div className="product-circle"></div>
          <div className="product-circle"></div>
          <div className="product-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <Image className="product-image" src={img} alt={title} loading="lazy" width={500} height={1000}/>
        </a>
      </article>
      {/* Información de cada proyecto */}
      <div className="product-info">
        <span className="text-[1.3rem] font-bold uppercase">{title}</span>
        <p>{description}</p>
      </div>
    </motion.li>
  );
};

export default PortfolioItem;
