import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Middletext() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set the initial position of the slider
    gsap.set(slider.current, { x: 0 });

    // Create the scroll animation
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className="relative overflow-hidden ">
      <div ref={slider} className="slider flex whitespace-nowrap w-full">
        <p
          ref={firstText}
          className="text-[100px] sm:text-[180px] md:text-[350px]"
        >
          Frontend Developer -
        </p>
        <p
          ref={secondText}
          className="text-[100px] sm:text-[180px] lg:text-[350px]"
        >
          Frontend Developer -
        </p>
      </div>
    </div>
  );
}
