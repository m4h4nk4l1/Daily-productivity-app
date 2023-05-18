import React from "react";
import tasks from "../assets/edit.png";

const NewsComponent = () => {
  return (
    <div className="border flex border-transparent rounded-lg shadow-slate-500 shadow-lg p-2">
      <div className="flex flex-1 pl-2 flex-col">
        <h4>Hindustan Times</h4>
        <p className="w-[3/5] flex-1 pt-2">
          Description of the news that comes from the NewsAPI and for eg: we get
          this long beautiful dreams and to achieve that we need to plan and
          take action seroiusly
        </p>
      </div>
      <img className=" pl-4 pt-2 w-[30%] h-[80%]" src={tasks} alt="code.png" />
    </div>
  );
};

export default NewsComponent;
