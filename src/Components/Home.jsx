import React, { useEffect, useRef, useState } from "react";
import Middletext from "../Animation/Middletext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menubtn from "../Components/Btn/Menubtn";
// import svg from "../../assets/arrow.svg";
import Downarrow from "../assets/Downarrow.svg";
import Avatar from "./Me/Canvas";
import NavPage from "./NavPage";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [Navpage, setNavpage] = useState(false);
  const containerref = useRef(null);

  const handleNavpage = () => {
    setNavpage(!Navpage);
  };

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

  return (
    <div ref={containerref} className="h-screen w-full  text-white  relative">
      <div className="w-full h-full overflow-hidden relative">
        <div className="w-full m-auto h-16 left-5 sm:left-10  top-2 lg:top-2 absolute z-[800]">
          <div class="lg:w-24 lg:h-12 w-[6rem] h-10 cursor-pointer nav opacity-0 relative flex gap-4 md:gap-5 items-center">
            <h1 className="text-[2rem] md:text-[1.5rem]">work</h1>
            <span className="w-2 h-2 bg-[--green] rounded-full mt-2"></span>
          </div>
          <div className="fixed w-full " onClick={handleNavpage}>
            <Menubtn />
          </div>
        </div>
        {Navpage && (
          <div className="w-screen h-screen fixed top-0 left-0 bg-purple-200 z-[30]">
            <NavPage />
          </div>
        )}
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
            {/* <Avatar /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
