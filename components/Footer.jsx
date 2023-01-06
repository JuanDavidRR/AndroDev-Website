"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-[#333333bc] overflow-hidden z-[90]`}
  >
    <motion.div
      variants={footerVariants}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo AndroDev */}
          <h4 className="font-extrabold text-[24px] text-white">ANDRODEV</h4>
          <p className="font-normal text-[14px] text-white">
            Copyright © 2023 Metaversus. Todos los derechos reservedos.
          </p>
          {/* Redes sociales */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.footer>
);

export default Footer;
