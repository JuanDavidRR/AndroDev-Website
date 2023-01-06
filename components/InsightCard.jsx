'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="flex-1 md:w-[200px] w-full h-[200px] rounded-[32px] object-cover"
    />
    <div className="w-full flex-5 flex justify-between items-center">
      <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[80%] md:ml-[62px] flex flex-col">
        <h4 className="font-normal lg:text-[2rem] text-[2rem] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[90px] h-[90px] rounded-[50%] bg-transparent border-[1px] border-white"
      >
        <img
          src="/arrow.svg"
          alt="arrow"
          className="flex-1 w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
