import "./Menubtn.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Magnetic from "../Magnetic/Magnetic";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const target = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".header", {
      scale: 1,
      duration: 0.4,
      display: "block",
      scrollTrigger: {
        trigger: target.current,
        start: "10% top",
        end: "20% top",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <div className="main" ref={target}>
        <div className="header md:hidden absolute top-5 right-20 px-5 z-10 scale-0">
          <Magnetic>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="button1 bg-[#455be9b8] duration-700 ease-in-out  hover:bg-[#455ce9] w-[5vw] h-[5vw]"
            >
              <div
                className={`${"burger"} ${isActive ? "burgerActive" : ""}`}
              ></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
