import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blob from "../Components/Project/Blob";
import Btn from "../Components/Btn/Roundedbtn";
import Magnetic from "../Components/Magnetic/Magnetic";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const ref = useRef(null);
  let tl = gsap.timeline();

  const clickhandle = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const clickabout = () => {
    window.scrollTo({ top: "100%", behavior: "smooth" });
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "10% 80%",
        end: "80% 80%",
        scrub: true,
      },
    });
    tl.from(".animate-bg", {
      borderRadius: "0em",
      height: " 105.493%",
      width: " 109.801%",
      ease: "linear",
    });
    tl.to(".animate-bg", {
      width: "95%",
      height: "95%",
      borderRadius: "1em",
      ease: "linear",
    });
    tl.to(".clip-animate-text", {
      translateY: 0,
      duration: 0.7,
      stagger: {
        amount: 0.8,
        from: "start",
        ease: "power2.inOut",
      },
      opacity: 1,
    });

    tl.to(
      ".clip-animate-text2",
      {
        translateY: 0,
        duration: 0.7,
        stagger: {
          amount: 0.8,
          from: "start",
          ease: "power2.inOut",
        },
        opacity: 1,
      },
      "-=0.8"
    );
  }, []);

  return (
    <footer
      ref={ref}
      className="w-full h-[100svh] text-white  relative flex justify-center items-center "
    >
      <div className="w-[100vw] h-[50vh] md:h-[100vh] absolute z-2 bottom-0 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <Blob />
      </div>
      <div className="w-full h-full absolute z-5 pb-[3rem] md:pl-[3rem] md:pr-[3rem] pt-[3rem] flex justify-center items-center pointer-events-none">
        <div className=" w-full h-full ">
          <div className="flex flex-col md:flex-row justify-between items-center w-full h-fit md:p-[1rem] gap-4">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h1 className="text-[1.3rem] md:text-[1.5rem]">
                Designer and Web Developer
              </h1>
              <span className="text-zinc-900 text-[1rem] md:text-[1.2rem]">
                Portfolio 2024 - 2025
              </span>
            </div>
            <div className="w-full md:w-1/3 flex flex-col md:justify-end items-center md:items-end">
              <h1 className="text-[1rem] md:text-[1.5rem] relative  pointer-events-auto">
                <span className="relative inline-block ">
                  Design by Gourav Singh
                  <div className="w-full h-[1px] bg-zinc-400 line"></div>
                </span>
              </h1>
              <span className=" text-gray-500 text-[1rem] md:text-[1.2rem]">
                @2024 - All Rights Reserved
              </span>
            </div>
          </div>
          <div className="w-full  h-[35rem] sm:h-[38rem]  md:h-[63svh]  lg:h-[68svh] flex flex-col justify-center items-center">
            <div className=" w-full   flex flex-col justify-center items-center text-white">
              <div className="flex overflow-hidden">
                {"INTERESTED IN".split("").map((char, index) => (
                  <h1
                    key={index}
                    className="] opacity-0 capitalize translate-y-full text-[2.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] clip-animate-text"
                  >
                    {char === " " ? "\u00A0" : char}
                  </h1>
                ))}
              </div>
              <div className="flex overflow-hidden">
                {"WORKING TOGETHER".split("").map((char, index) => (
                  <h1
                    key={index}
                    className="] opacity-0 translate-y-full capitalize text-[2rem] md:text-[7vw] lg:text-[8rem] clip-animate-text2"
                  >
                    {char === " " ? "\u00A0" : char}
                  </h1>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-fit  flex justify-between items-center md:p-[1rem] relative flex-col md:flex-row ">
            <div className="relative flex items-center justify-center gap-10 pointer-events-auto  ml-2 ">
              <Magnetic>
                <a href="/">
                  <h2 className="relative text-[1.3rem] ">Linkedin</h2>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="/">
                  <h2 className="relative text-[1.3rem] ">Github</h2>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="/">
                  <h2 className="relative text-[1.3rem] ">Instagram</h2>
                </a>
              </Magnetic>
            </div>
            <div className="w-fit flex flex-col  items-center  arrow pointer-events-auto mt-10">
              <div className="flex justify-center md:justify-end items-center gap-5 w-full mr-4">
                <div className="flex items-center gap-2 group">
                  <h1
                    onClick={clickhandle}
                    className="text-[1.5rem] ] capitalize cursor-pointer"
                  >
                    back to top
                  </h1>
                  <span className="overflow-hidden w-[.6rem] h-[.6rem] relative">
                    <img
                      src="https://cdn.prod.website-files.com/6017e817edf32734686c1b92/637908354ada244334983a19_arrow-top.svg"
                      loading="lazy"
                      height="12"
                      width="12"
                      alt="arrow pointing upwards"
                      className="back-top_arrow absolute transition-transform duration-300 group-hover:-translate-y-full"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/6017e817edf32734686c1b92/637908354ada244334983a19_arrow-top.svg"
                      loading="lazy"
                      height="12"
                      width="12"
                      alt="arrow pointing upwards"
                      className="back-top_arrow absolute translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                    />
                  </span>
                </div>
              </div>
              <div>
                <a href="/gouravsingh4495@gmail.com">
                  <h1 className="]  text-[1.5rem]  md:text-[1.5rem] clip-animate-text2 hover:text-zinc-700 cursor-pointer">
                    <span>→</span> gouravsingh4495@gmail.com
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#2f6063] animate-bg "></div>
    </footer>
  );
};

export default Footer;
