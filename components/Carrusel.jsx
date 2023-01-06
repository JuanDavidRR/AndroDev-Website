

import React, { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Carrousel = ({
  children,
  className,
  slidesPerView = 1.25,
  spaceBetween = 0,
  bulletsDirection = "horizontal",
  breakpoints,
  centeredSlides = true,
  bulletClassName,
  classNameContainer,
  navigation,
  nSlides,
  onSlideChange = () => {},
}) => {
  // Hooks
  const [swiper, setSwiper] = useState();

  // Handlers
  const swipeTo = (index) => {
    if (!swiper) return;
    if (index === 0) index = 1;
    else index = 0;
  };

  // Component
  return (
    <div className={classNameContainer}>
      {/* Slider */}
      <Swiper
        className={"carrousel " + className}
        centeredSlides={centeredSlides}
        draggable
        onSwiper={setSwiper}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSlideChange={
          onSlideChange
            ? (swiper) => onSlideChange(swiper.activeIndex)
            : undefined
        }
        modules={[Pagination]}
        breakpoints={breakpoints}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
       {React.Children.map(children, (item, i) => (
          <SwiperSlide onClick={() => swipeTo(i)} className='container-item' >{item}</SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      {
        navigation &&
        <div className='container-arrow'>
          <GoChevronLeft size={60} onClick={() => swipeTo((swiper.realIndex || 0))} className='arrow-right'/>
          <GoChevronRight size={60} onClick={() => swipeTo((swiper.realIndex || 0))} className='arrow-left'/>
        </div>
      }
    </div>
  );
};

export default Carrousel;
