import React from "react";
import tasks from "../assets/edit.png";

const NewsComponent = ({ setSourceName, setDescription, setImage, setUrl }) => {
  return (
    <div className="border-2 flex border-transparent rounded-lg shadow-slate-500 shadow-lg p-2">
      <div className="flex flex-1 pl-2 flex-col">
        <h4 className="font-semibold">{setSourceName}</h4>
        <p className="w-[3/5] flex-1 pt-2">{setDescription}</p>
        <a className="underline" href={setUrl}>
          Read More...
        </a>
      </div>
      <img
        className=" pl-4 pt-2 w-[30%] h-[80%]"
        src={setImage}
        alt="code.png"
      />
    </div>
  );
};

export default NewsComponent;
