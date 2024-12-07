import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preload from "./Components/Preloader/Preloader";
import Lenis from "lenis";
import Pages from "./Components/Pages";
import { Leva } from "leva";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full min-h-full overflow-hidden font-[light]">
      <svg className="pointer-events-none absolute cursor-none overflow-hidden">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.7"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>
      <AnimatePresence mode="wait">{isLoading && <Preload />}</AnimatePresence>
      <Pages />
      <Leva hidden />
    </div>
  );
};

export default App;
