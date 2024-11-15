import React from "react";
import "./projectcss/text.css";
export default function Text({ index, title, manageModal }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="project w-[80vw] flex justify-between items-center text-white"
    >
      <div className=" w:2/3 h-full bg-purple-900">
        <h2 className="text-[5rem] font-[light]">{title}</h2>
      </div>
      <div className="w-1/3 p-[1rem] bg-purple-200 h-[10rem]">
        <div className="p-[1.rem] w-full h-full flex justify-center">
          <h1 className="tech text-[1rem]">Tech</h1>
        </div>
      </div>
    </div>
  );
}
