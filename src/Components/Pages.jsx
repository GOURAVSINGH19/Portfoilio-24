import React from "react";
import Home from "./Home";
import About from "./About";
import Section from "./Section";
import Footer from "./Footer";

const Pages = () => {
  return (
    <div className="w-full min-h-full bg-[--bg]">
      <Home />
      <About />
      <Section />
      <Footer />
    </div>
  );
};

export default Pages;
