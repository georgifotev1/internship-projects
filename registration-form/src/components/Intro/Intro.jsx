import React from "react";
import "./intro.css";
import { useEffect, useState } from "react";

export const Intro = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 5000);
  }, []);

  return <div className="intro-message">{show ? <h1>Hello..</h1> : <></>}</div>;
};

export default Intro;
