import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";

const ServiceCards = ({
  id,
  imgUrl,
  title,
  index,
  active,
  description,
  handleClick,
}) => (
  <motion.div
    //Iterando el orden de ejecución de animación por el index de cada elemento
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    //Evaluando cuando una tarjeta es seleccionada, esta tendrá x estilo
    className={`relative  ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[1] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      className={`absolute w-full h-full object-cover rounded-[24px] ${active === id ? "brightness-[70%]" : "brightness-[30%]"}`}
      fill
      loading="lazy"
    />
    {/* Estilo del contenido de tarjetas cuando no están activas y cuando sí */}
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-[10] lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) :    (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.84)] rounded-b-[24px] h-auto">
        <p className="text-[1rem] leading-8">{description}</p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ServiceCards;
