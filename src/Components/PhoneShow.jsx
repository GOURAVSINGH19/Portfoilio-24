import React from "react";
import Downarrow from "../assets/Downarrow.svg";

const PhoneShow = ({ title, techStack, liveLink }) => {
  return (
    <div className="w-screen  overflow-hidden p-[1rem] text-white">
      <div className="w-full h-full ">
        <h1 className="text-[4rem]  ">{title}</h1>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-[440px] flex items-center justify-center bg-white">
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
                  className="bg-purple-600 px-2 py-3 w-[100px] tracking-widest rounded-3xl text-center"
                  key={i}
                >
                  {tech}
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
    </div>
  );
};

export default PhoneShow;
