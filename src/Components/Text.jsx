import React, { useEffect, useRef, useState } from "react";
import "./projectcss/text.css";
import Downarrow from "../assets/Downarrow.svg";
import AnimatedText from "./HoverText/HoverText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Text({ index, title, techStack, liveLink }) {
  const ref = useRef(null);
  const [Text, setText] = useState([title]);
  console.log(Text);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        end: "2% 80%",
        markers: true,
        scrub: 1,
      },
    });

    tl.to(".text-ani", {
      translateY: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
    });
  });
  return (
    <div ref={ref} className="w-screen p-[1rem] text-white  relative ">
      <div className="page p-[1rem] relative overflow-hidden">
        <div className="overflow-hidden ">
          {Text.map((text, i) => (
            <h1
              key={i}
              className="text-[10rem] absolute top-0 right-[5vw] w-fit text-ani translate-y-full "
            >
              {text}
            </h1>
          ))}
        </div>
        <div className="w-[800px] h-full flex  flex-col  justify-center items-center">
          <div className="w-[45vw] h-[500px] flex items-center justify-center bg-white ">
            <img
              src="https://via.placeholder.com/250"
              alt="Phone Show"
              className="w-[200px] h-[200px]"
            />
          </div>
          <div className="w-full mt-10 text-white flex items-center justify-between">
            <span className="w-fit flex items-center gap-3">
              {techStack.map((tech, i) => (
                <span
                  className="px-2 py-3 w-[120px] tracking-widest rounded-3xl text-center"
                  key={i}
                >
                  <AnimatedText>{tech}</AnimatedText>
                </span>
              ))}
            </span>
            <a href={liveLink} className="mr-10 relative">
              <span className="text-[1.4rem]   rounded-3xl relative flex items-center justify-center gap-2">
                live
                <span className="bg-purple-600  px-2 py-2 rounded-full hover:-translate-y-1 duration-300 ease-in-out">
                  <img
                    src={Downarrow}
                    alt="img"
                    className="w-5 h-5  rotate-[-120deg]"
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="h-full relative w-full bg-purple-400">
          <div className="page p-[1rem] overflow-hidden">
            <div className="overflow-hidden h-[9vw]">
              <h1 className="text-[10rem] w-fit text-ani  absolute top-0"></h1>
            </div>
            <div className="w-fit h-full  justify-center items-center">
              <div className="w-[45vw] h-[500px] flex items-center justify-center bg-white ">
                <img
                  src="https://via.placeholder.com/250"
                  alt="Phone Show"
                  className="w-[200px] h-[200px]"
                />
              </div>
              <div className="mx-auto  max-w-screen-md mt-10 text-white flex items-center justify-between ">
                <span className="w-fit flex items-center gap-3">
                  <AnimatedText>React</AnimatedText>
                </span>
                <a href="/" className="mr-10 relative">
                  <span className="text-[1.4rem]   rounded-3xl relative flex items-center justify-center gap-2">
                    live
                    <span className="bg-purple-600  px-2 py-2 rounded-full hover:-translate-y-1 duration-300 ease-in-out">
                      <img
                        src={Downarrow}
                        alt="img"
                        className="w-5 h-5  rotate-[-120deg]"
                      />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
