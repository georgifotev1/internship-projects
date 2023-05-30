import { Layout } from "./components/layout/Layout";
import Contact from "./sections/contact/Contact";

import Intro from "./sections/intro/Intro";
import Portfolio from "./sections/portfolio/Portfolio";
import Service from "./sections/service/Service";
import Skills from "./sections/skills/Skills";
import Team from "./sections/team/Team";
import Testimonial from "./sections/testimonial/Testimonial";

function App() {
  return (
    <>
      <Layout>
        <Intro />
        <Service />
        <Team />
        <Skills />
        <Portfolio />
        <Testimonial />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
