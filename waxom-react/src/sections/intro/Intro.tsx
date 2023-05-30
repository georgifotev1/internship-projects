import "./intro.css";
import Slider from "../../components/slider/Slider";
import { Slide } from "./types";

export default function Intro() {
  const slides: Slide[] = [
    {
      backgroundImage: require("../../assets/slider-imgs/Waxom-Hemepage.png"),
      heading: "Portfolio PSD Template",
      description:
        "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
      button: { content: "GET STARTED", color: "green" },
    },
    {
      backgroundImage: require("../../assets/slider-imgs/wallpaper-2.jpg"),
      heading: "Amazing Revolution Slider",
      description:
        " Revolution Slider gives you unlimited possibilities. Add any content with a drag &amp; drop interface!",
    },
    {
      backgroundImage: require("../../assets/slider-imgs/wallpaper-3.jpg"),
      heading: "Fully Responsive Design",
      description:
        "Waxom is perfect solution for your professional Business or Corporate website.",
    },
    {
      backgroundImage: require("../../assets/slider-imgs/wallpaper-4.jpg"),
      heading: "Awesome Portfolio Theme",
      description:
        "Claritas est etiam processus dynamicus, qui sequitur mutationem lectorium. Mutationem consuetudium lectorium.",
      button: { content: "GET STARTED", color: "green" },
    },
    {
      backgroundImage: require("../../assets/slider-imgs/wallpaper-5.jpg"),
      heading: "Business Theme",
      description:
        "Waxom is perfect solution for your professional Business or Corporate website.",
      button: { content: "GET STARTED", color: "blue" },
    },
  ];

  return (
    <Slider
      swiperProps={{
        navigation: true,
        slidesPerView: 1,
        pagination: {
          clickable: true,
        },
        className: "intro-swiper",
      }}
      hasPagination
      slides={slides}
      renderSlide={(slide) => (
        <div
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          className="slider"
        >
          <div className="overlay"></div>
          <div className="slider-intro">
            <h3>Unique and Modern Design</h3>
            <h1>{slide.heading}</h1>
            <p>{slide.description}</p>
            {slide.button && (
              <a className={`button button-${slide.button.color}`} href="#home">
                {slide.button.content}
              </a>
            )}
          </div>
        </div>
      )}
    ></Slider>
  );
}
