import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import todo from "../assets/todo.jpg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

const Todo = () => {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    function addTask(taskTitle){
      setTasks([...tasks,{
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }])
    }

    function handleSubmit(event){
      event.preventDefault();
      addTask(title);
    }

    function changeTitle(event){
      setTitle(event.target.value);

    }

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight, trasition: { duration: 0.2 } }}
      className="bg-gradient-to-b min-h-screen from-cyan-100 to-blue-400 bg-cover"
    >

      {/* header and logo section call it header component */}

      <section className="container  border-blue-400 w-[80%] h-[100%] border-2 mx-auto my-auto shadow-black shadow-xl ">
        <header className="flex flex-wrap my-6 items-center space-x-0 justify-center">
          <img className="w-20 h-auto" src={todo} alt="todo-icon" />
          <h2 className="font-shan text-2xl"> TODO </h2>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-row justify-center mb-6 ">
          <input
            type="text"
            className=" w-[60%] mr-4 text-start placeholder: pl-2 bg-blue-300 placeholder-slate-700 text-black font-shan rounded-sm"
            placeholder="Add a New Task" value={title} onChange={changeTitle}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-shan py-2 px-4 rounded flex align-middle items-center"
            type="submit" onAddTask={addTask}
          >
            Create <AiOutlinePlusCircle className="ml-1" size={20} />
          </button>
        </form>
      </section>

      {/* so this section is after the above section which has border and shadow  */}

      <section>
      
        {/* this section is header section where you can see the count of tasks */}

        <header className="flex flex-row justify-around content-around">
          <div className="flex flex-row space-x-2 mt-8">
            <p className="text-blue-900 text-lg font-shan font-semibold">
              Created Tasks
            </p>
            <span className="border rounded-full bg-blue-300 text-black px-1 border-slate-600">
              {" "}
              0{" "}
            </span>
          </div>
          <div className="flex flex-row space-x-2 mt-8">
            <p className="text-violet-900 text-lg font-shan font-semibold">
              Completed Tasks
            </p>
            <span className="border rounded-full bg-blue-300 text-black px-1 border-slate-500">
              {" "}
              0 of 10{" "}
            </span>
          </div>
        </header>

        {/* this section is for the tasks that we get we call task */}

        <section className="flex flex-col ">
          <div className="flex flex-row m-auto top-4 pl-5 bg-blue-300 font-shan space-y-4 overflow-auto border rounded-md border-slate-700 my-8 w-[60%]">
            <button>
              <BsFillCheckCircleFill />
            </button>
            {
              tasks.map((task) => (
                key={task.id}, task={task}
              ))
            }
            <p className="items-center ">{task.title}</p>
            <button>
              <TbTrash className="content-end " size={20} />
            </button>
          </div>
        </section>
      </section>

      <Link to="/todo"></Link>
    </motion.div>
  );
};

export default Todo;
