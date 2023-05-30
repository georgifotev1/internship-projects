import "./video.css";

import { useEffect, useState } from "react";
import Section from "../../components/section/Section";

export default function Video() {
  const [time, setTime] = useState(new Date());
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  });

  const description = (
    <>
      Investigationes demonstraverunt lectores legere me lius quod ii legunt
      saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem
      consuetudium.
      <p className='current-time'>
        {time.toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </>
  );
  const heading = (
    <>
      <div onClick={() => setIsClicked(true)} className='play-video'></div>
      Waxom Video Presentation
    </>
  );
  return (
    <Section className='video' heading={heading} description={description}>
      {isClicked && (
        <div className='video-container'>
          <span className='close-video' onClick={() => setIsClicked(false)}>
            &#x2a2f;
          </span>
          <video controls autoPlay>
            <source src='/videos/video-mountain.mp4' type='video/mp4' />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
      )}
    </Section>
  );
}
