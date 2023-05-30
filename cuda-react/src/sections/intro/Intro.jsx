import React from "react";
import { Section } from "../../components/section/Section";
import "./intro.css";

export default function Intro() {
  return (
    <Section
      className='intro'
      titleH1
      title='Hi there! We are the new kids on the block and we build awesome websites and mobile apps.'
    >
      <a
        className='button work-with-us text-white w-auto'
        href='https://google.com'
      >
        WORK WITH US!
      </a>
    </Section>
  );
}
