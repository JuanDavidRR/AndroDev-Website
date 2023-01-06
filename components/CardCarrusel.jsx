'use client'
import styles from "../styles";

export const Card = ({ title, description, selected, far, className, icon }) => (
  <div
    className={`
      w-[22rem] mx-auto h-[25rem] rounded-2xl flex flex-col justify-center overflow-hidden text-center p-[1.5rem] cursor-grab transition-all duration-100 bg-black text-white border-[1px] border-[#bababa66] 
        ${
          selected
            ? "scale-[1] bg-[#36363666]"
            : far
            ? "scale-[0.8] border-none bg-red-700"
            : "scale-[0.8] bg-white"
        }
        ${className}
    `}
  >
    <div className="flex-shrink overflow-y-auto flex-grow-1">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#363636] my-4 mx-auto`}
    >
      {icon}
    </div>
      <h2
        className={`className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white"
        ${selected ? "lg:text-xl" : far ? "lg:text-lg" : "lg:text-lg"}`}
      >
        {title}
      </h2>
      <p className="text-center">{description}</p>
    </div>
  </div>
);

export default Card;
