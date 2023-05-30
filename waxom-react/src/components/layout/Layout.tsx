import "./theme.css";
import "./layout.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Intro from "../../sections/intro/Intro";
import Services from "../../sections/services/Services";
import Ideas from "../../sections/ideas/Ideas";
import Purchase from "../../sections/purchase/Purchase";
import Projects from "../../sections/projects/Projects";
import Video from "../../sections/video/Video";
import Mobiles from "../../sections/mobiles/Mobiles";
import Counters from "../../sections/counters/Counters";
import Posts from "../../sections/posts/Posts";
import Partners from "../../sections/partners/Partners";



export const Layout = () => {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <Ideas />
      <Purchase />
      <Projects />
      <Video />
      <Mobiles />
      <Counters />
      <Posts />
      <Partners />
      <Footer />
    </>
  );
};
