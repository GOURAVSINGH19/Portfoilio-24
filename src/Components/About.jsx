import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Paragraph from "./Words/Words";

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });

    tl.to(".text", {
      translateY: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 1,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div
      ref={textRef}
      className=" min-h-[50rem] relative  flex justify-center p-[1.5rem] flex-col md:flex-row"
    >
      <div className="md:w-1/3 flex md:flex-col md:justify-start justify-between w-full">
        <h1 className="text-[2rem] w-fit h-fit  text-zinc-300  md:text-zinc-700 hover:text-zinc-300 duration-300 ease-linear md:mb-10">
          About
        </h1>
        <div className="w-[10rem] h-[10rem] md:w-[15vw] md:h-[15vw] bg-purple-300"></div>
      </div>
      <div className=" w-2/3 flex justify-start items-center flex-col mt-10">
        <div className="w-full overflow-hidden">
          <Paragraph>
            I’m a frontend developer with a passion for 3D animation and
            designing immersive 3D websites. I love bringing ideas to life with
            engaging visuals and interactive experiences.
          </Paragraph>
        </div>
        <div className="w-full ">
          <h1 className="text-[1rem] md:text-[1.8rem] text-zinc-300  md:text-zinc-500 mt-10  hover:text-zinc-400 transform duration-700 ease-in-out ml-2 md:ml-2">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
