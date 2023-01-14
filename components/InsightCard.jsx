'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <Image
      src={imgUrl}
      alt="planet-01"
      className="flex-1 md:w-[200px] w-full h-[200px] rounded-[32px] object-cover"
      loading="lazy"
      width={150}
      height={150}
      
    />
    <div className="w-full flex-5 flex justify-between items-center">
      <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[80%] md:ml-[62px] flex flex-col">
        <span className="font-normal lg:text-[2rem] text-[2rem] text-white">
          {title}
        </span>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[90px] h-[90px] rounded-[50%] bg-transparent border-[1px] border-white"
      >
        <Image
          src="/arrow.svg"
          alt="arrow"
          className="flex-1 w-[40%] h-[40%] object-contain"
          loading="lazy"
          width={100}
          height={100}
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
