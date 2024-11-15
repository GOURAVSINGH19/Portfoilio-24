import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function Paragraph({ children }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start .8", "start .25"],
  });

  const words = children.split(" ");
  return (
    <h1 ref={container} class="paragraph ">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            children={children}
          >
            {word}
          </Word>
        );
      })}
    </h1>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <>
      <div class="text-[1.5rem] md:text-[3rem] md:tracking-widest ">
        <h1 class="shadow m-2">{children}</h1>
        <motion.h1 class=" leading-normal  m-2" style={{ opacity: opacity }}>
          {children}
        </motion.h1>
      </div>
    </>
  );
};


