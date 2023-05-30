import "./posts.css";
import Section from "../../components/section/Section";
import image1 from "../../assets/posts/post1-img1.png";
import image2 from "../../assets/posts/post2-img1.png";
import image3 from "../../assets/posts/post-3-img-1.png";
import Card from "../../components/section-card/Card";
import Slider from "../../components/slider/Slider";

import { useEffect, useRef, useState } from "react";

export default function Posts() {
  const cards = [image1, image2, image3];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Section
      id="blog"
      className="posts"
      shell
      heading="Recent Posts."
      description="Investigationes demonstraverunt lectores legere me lius quod ii legunt
        saepius. Claritas est etiam processus dynamicus, qui sequitur
        mutationem consuetudium."
    >
      <div className="cards posts-cards">
        {isLoaded && (
          <Slider
            swiperProps={{
              navigation: {
                prevEl: prevRef.current!,
                nextEl: nextRef.current!,
              },
              slidesPerView: 3,
              breakpoints: {
                768: {
                  slidesPerView: 1,
                },
              },
              className: "posts-swiper",
            }}
            slides={cards}
            renderSlide={(slide, index) => (
              <Card
                className="post-card"
                linkProps={{ href: "home" }}
                imageProps={{
                  src: slide,
                  alt: `post-card-${index + 1}`,
                }}
                heading="Lorem ipsum dolor sit amet"
                description="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium."
              />
            )}
          ></Slider>
        )}

        <div className="post-nav-buttons">
          <div ref={prevRef} className="prev-arrow"></div>
          <div ref={nextRef} className="next-arrow"></div>
        </div>
      </div>
    </Section>
  );
}
