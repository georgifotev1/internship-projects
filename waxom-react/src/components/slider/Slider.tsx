import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderProps } from "./types";

export default function Slider<T>({
  swiperProps,
  hasPagination,
  renderSlide,
  slides,
  children,
}: SliderProps<T>) {
  return (
    <Swiper
      modules={[...(hasPagination ? [Pagination] : []), Navigation]}
      loop
      allowTouchMove={true}
      spaceBetween={0}
      {...swiperProps}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={`Post card number-${index}`}>
          {renderSlide(slide, index)}
        </SwiperSlide>
      ))}
      {children && children}
    </Swiper>
  );
}
