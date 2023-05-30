import { ReactNode } from "react";
import { SwiperProps } from "swiper/react";
export interface SliderProps<T> {
  swiperProps: SwiperProps;
  hasPagination?: boolean;
  renderSlide: (slide: T, index: number) => ReactNode;
  slides: T[];
  children?: ReactNode;
}
  