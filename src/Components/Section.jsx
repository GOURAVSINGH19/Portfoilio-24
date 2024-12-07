import { useState, useEffect, useRef } from "react";
import Downarrow from "../assets/Downarrow.svg";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./projectcss/section.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhoneShow from "./PhoneShow";
import AnimatedText from "./HoverText/HoverText";

gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    title: "Movie Website",
    src: "c2montreal.png",
    color: "#000000",
    techStack: ["React", "TypeScript"],
    liveLink: "/live",
    top: "0",
    left: "20rem",
  },
  {
    title: "BobMixercopy",
    src: "officestudio.png",
    color: "#8C8C8C",
    techStack: ["React", "TypeScript"],
    liveLink: "/live",
    top: "0",
    right: "20rem",
  },
  {
    title: "Metaverse",
    src: "locomotive.png",
    color: "#EFE8D3",
    techStack: ["React", "TypeScript"],
    liveLink: "/live",
    top: "0",
    left: "40rem",
  },
];

export default function Section() {
  const targetref = useRef();
  const imgRef = useRef();

  const text = "selected work / ";

  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(".text-ani-1", {
      translateY: 0,
      duration: 1.9,
      ease: "power4.out",
      stagger: 0.2,
      opacity: 1,
      scrollTrigger: {
        trigger: ".text-body",
        start: "top 80%",
        end: "5% top",
        scrub: 1,
      },
    })
      .to(".text-ani-2", {
        translateY: 0,
        duration: 1.9,
        ease: "power4.out",
        stagger: 0.2,
        opacity: 1,
        scrollTrigger: {
          trigger: ".text-body-2",
          start: "top 80%",
          end: "5% top",

          scrub: 1,
        },
      })
      .to(".text-ani-3", {
        translateY: 0,
        duration: 1.9,
        ease: "power4.out",
        stagger: 0.2,
        opacity: 1,
        scrollTrigger: {
          trigger: ".text-body-3",
          start: "top 80%",
          end: "5% top",

          scrub: 1,
        },
      })
    

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={targetref} className="relative ">
      <div className="w-full h-fit  p-[.5rem] mb-[2rem] md:mb-[3rem] overflow-hidden">
        <h1 className="text-white ml-5  heading ">
          {text.split("").map((char, index) => (
            <motion.span
              className=" text-[5rem] md:text-[7rem] lg:text-[10rem] cursor-default drop-shadow-lg "
              key={index}
            >
              {char}
            </motion.span>
          ))}
          <sup className="text-white text-[4rem] md:text-[7vw]">3</sup>
        </h1>
      </div>

      <div
        ref={imgRef}
        className=" w-full h-full hidden md:flex text-white  relative  p-[1rem]"
      >
        <div className="w-full h-full bg-purple-300 absolute left-0 bottom-0 right-0 top-0 img-container">
          <div className="h-[100vsh] sticky top-0">
            h
          </div>
        </div>
        <div className=" w-full  mg-top z-2 bg-zinc-500 overflow-hidden pointer-events-none">
          <div className="p-[1rem] overflow-hidden flex items-start gap-10 mb-[10rem] text-body scrool">
            <div className="w-fit h-full relative">
              <div className="w-full flex items-center justify-center ">
                <img
                  data-webgl-media
                  src="https://images.unsplash.com/photo-1732761611203-4833fe631a67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
                  alt="Phone Show"
                  className="w-[40vw] h-[500px] img-1"
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
            <div className="text-start  overflow-hidden">
              <h1 className=" ml-5  heading ">
                {"MovieWeb".split("").map((char, index) => (
                  <span
                    className="text-[12rem] opacity-[.1] inline-block text-ani-1 translate-y-full "
                    key={index}
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          <div className="p-[1rem] overflow-hidden relative text-body-2 mb-[10rem] scrool">
            <div className="flex  justify-between items-center ">
              <div className="w-[50vw] flex items-center justify-center relative overflow-hidden  ">
                <h1 className="ml-5 heading">
                  {"Bobmixer".split("").map((char, index) => (
                    <span
                      className="text-[12rem] opacity-[.1] inline-block text-ani-2 translate-y-full "
                      key={index}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
              </div>

              <div className="w-fit h-full">
                <div className="w-full flex items-center justify-start ">
                  <img
                    data-webgl-media
                    src="https://plus.unsplash.com/premium_photo-1732319199696-a75f76b55a54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
                    alt="Phone Show"
                    className="w-[40vw] h-[500px] mr-10 img-2"
                  />
                </div>
                <div className="mx-auto  w-full max-w-screen-md mt-10 text-white flex items-center justify-between ">
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

          <div className="p-[1rem] overflow-hidden relative text-body-3 scrool">
            <div className="overflow-hidden relative mb-2">
              <h1 className="heading ml-5">
                {"Research Mangement".split("").map((char, index) => (
                  <span
                    className="text-[10rem] opacity-[.1] inline-block text-ani-3 translate-y-full "
                    key={index}
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="w-full h-full  justify-center items-center">
              <div className="w-full flex items-center justify-center ">
                <img
                  data-webgl-media
                  src="https://plus.unsplash.com/premium_photo-1730475800647-cacc33d43e55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                  alt="Phone Show"
                  className="w-[45vw] h-[500px] img-3"
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

      <div className="body relative md:hidden">
        {projects.map((project, index) => {
          return (
            <PhoneShow
              index={index}
              title={project.title}
              key={index}
              techStack={project.techStack}
              liveLink={project.liveLink}
            />
          );
        })}
      </div>

      <div className="w-full h-32"></div>
    </section>
  );
}
