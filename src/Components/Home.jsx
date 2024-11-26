import React, { useEffect, useRef, useState } from "react";
import Middletext from "../Animation/Middletext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Downarrow from "../assets/Downarrow.svg";
import Avatar from "./Me/Canvas";
import Ani from "../assets/Ani.json";
import Lottie from "lottie-react";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerref = useRef(null);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Texting"); // Start with texting animation

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    if (!isAudioPlaying) {
      setCurrentAnimation("HipHop"); // Switch to dancing animation when audio starts
    } else {
      setCurrentAnimation("Texting"); // Optionally switch back to texting when audio stops
    }
  };
  const audioElementRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".clip-bg", {
      opacity: 0,
      scale: 1.3,
    });
    let secondTl = gsap.timeline();
    secondTl
      .to(".clip-bg", {
        opacity: 1,
        duration: 1,
        scale: 1,
        delay: 2.5,
        ease: "power4.out",
        stagger: {
          amount: 0.1,
        },
      })
      .to(
        ".middle-text",
        {
          opacity: 1,
          duration: 1,
          scale: 1,
          delay: 0.1,
          ease: "power4.out",
        },
        "a"
      )
      .to(
        ".nav",
        {
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          delay: 0.5,
        },
        "a"
      )
      .to(
        ".avatar",
        {
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          delay: 3,
          transform: "center",
        },
        "a"
      )
      .to(
        ".model",
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power4.out",
        },
        "a"
      );
  }, [containerref]);

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div ref={containerref} className="h-screen w-full  text-white  relative">
      <div className="w-full h-full overflow-hidden relative">
        <div className="w-full m-auto h-16 left-5 sm:left-10  top-2 lg:top-2 absolute z-[800]">
          <div class="lg:w-24 lg:h-12 w-[6rem] h-10 cursor-pointer nav opacity-0 relative flex gap-4 md:gap-5 items-center">
            <button
              onClick={toggleAudioIndicator}
              className=" w-42 h-10 flex items-center"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/loop.mp3"
                loop
              />
              <Lottie animationData={Ani} loop={true} />
            </button>
          </div>
        </div>
        <div className="w-full h-full relative  overflow-hidden">
          <div className="w-full h-full relative overflow-hidden p-[1rem]">
            <div className="h-full svg-2 bg-[#3f3a3f2f] clip-bg relative">
              <div className="w-full svg-2 h-full bg-[#1c1c1c] clip relative">
                <div className="w-full h-full flex items-center justify-center absolute">
                  <div className="z-10 opacity-0 pointer-events-none select-none  middle-text">
                    <Middletext />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit absolute bottom-4 right-6 sm:bottom-6 sm:right-10  flex gap-4 z-[10] justify-end items-center">
            <h1 className="sm:text-[20px] text-[25px] ">scroll</h1>
            <img
              src={Downarrow}
              alt="img"
              className="w-5 h-5 hover:translate-y-1 duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center   lg:w-full lg:h-full  pointer-events-auto absolute top-0   clip avatar">
          <div className="h-[40rem] w-[40rem] lg:w-full model lg:h-full opacity-0">
            <Avatar  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
