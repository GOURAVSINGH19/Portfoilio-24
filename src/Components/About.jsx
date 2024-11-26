import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Paragraph from "./Words/Words";
import Marquee from "react-fast-marquee";
import Earth from "./World/Earth";
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
    <div ref={textRef} className=" min-h-[50rem] relative  p-[1.5rem]">
      <div className="flex justify-center  md:p-[1.5rem] flex-col md:flex-row w-full mb-20">
        <div className="md:w-1/3 flex md:flex-col md:justify-start justify-between w-full">
          <h1 className="text-[2rem] w-fit h-fit  text-zinc-300  md:text-zinc-700 hover:text-zinc-300 duration-300 ease-linear md:mb-10">
            About
          </h1>
          <h1 className="text-zinc-300 text-[1vw]">New Delhi , India</h1>
          <div className="w-[10rem] h-[10rem] md:w-[20vw] md:h-[20vw] absolute top-[10rem] left-0">
            <Earth />
          </div>
        </div>
        <div className="w-full md:w-2/3 flex justify-start items-center flex-col mt-10">
          <div className="w-full overflow-hidden text">
            <Paragraph>
              I'm a frontend developer with a passion for 3D animation and
              designing immersive 3D websites. I love bringing ideas to life
              with engaging visuals and interactive experiences.
            </Paragraph>
          </div>
          <div className="w-full ">
            <h1 className="text-[1.5rem] md:text-[1.8rem] text-zinc-300  md:text-zinc-500 mt-10  md:hover:text-zinc-400 transform duration-700 ease-in-out ml-2 md:ml-2">
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </h1>
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-screen-lg md:max-w-screen-2xl h-20 text-[#9a949975] ">
        <Marquee
          pauseOnHover
          direction="right"
          gradient
          gradientColor="#161616bc"
          gradientWidth={100}
          autoFill
        >
          <span className=" text-[1.5rem] font-800 md:text-[2rem] ml-10">
            React
          </span>
          <span className=" text-[1.5rem] font-800 md:text-[2rem] ml-10">
            Node
          </span>
          <span className=" text-[1.5rem] font-800 md:text-[2rem] ml-10">
            Express
          </span>
          <span className=" text-[1.5rem] font-800 md:text-[2rem] ml-10">
            Next.js
          </span>
          <span className=" text-[1.5rem] font-800 md:text-[2rem] ml-10">
            MongoDB
          </span>
          <span className=" text-[1.5rem] font-800 md:text-[2rem] ml-10">
            Three.js
          </span>
          <span className=" text-[1.5rem] font-800 md:text-[2rem] ml-10">
            Redux
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default About;
