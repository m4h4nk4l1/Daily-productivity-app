import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import todo from "../assets/todo.jpg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import {RiCheckboxBlankCircleLine} from  "react-icons/ri"
import { TbTrash } from "react-icons/tb";

const LOCAL_STORAGE_KEY = 'todo:tasks';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])  

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  
  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      },
    ]);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    addTask(title);
    setTitle("");
  }
  
  function changeTitle(event) {
    setTitle(event.target.value);
  }
  
  function toggleTaskCompletedById(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }
  
  function deleteTaskById(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }
  
  
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b min-h-screen from-cyan-100 to-blue-400 bg-cover"
    >
      {/* header and logo section call it header component */}

      <section className="container  border-blue-400 w-[80%] h-[100%] border-2 mx-auto my-auto shadow-black shadow-xl ">
        <header className="flex flex-wrap my-6 items-center space-x-0 justify-center">
          <img className="w-20 h-auto" src={todo} alt="todo-icon" />
          <h2 className="font-shan text-2xl"> TODO </h2>
        </header>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row justify-center mb-6 "
        >
          <input
            type="text"
            className=" w-[60%] mr-4 text-start placeholder: pl-2 bg-blue-300 placeholder-slate-700 text-black font-shan rounded-sm"
            placeholder="Add a New Task"
            value={title}
            onChange={changeTitle}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-shan py-2 px-4 rounded flex align-middle items-center"
            type="submit"
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
              {taskQuantity}
            </span>
          </div>
          <div className="flex flex-row space-x-2 mt-8">
            <p className="text-violet-900 text-lg font-shan font-semibold">
              Completed Tasks
            </p>
            <span className="border rounded-full bg-blue-300 text-black px-1 border-slate-500">
              {completedTasks} of {taskQuantity}
            </span>
          </div>
        </header>

        {/* this section is for the tasks that we get we call task */}
        <>
          {tasks.map((task) => (
            <section className="flex flex-col" key={task.id}>
              <div className="flex flex-row m-auto py-3 bg-blue-300 font-shan justify-between overflow-auto hover:border-black hover:border-solid rounded-md border-2 border-blue-300 my-5 w-[60%]">
                <button className="pl-5" onClick={() => toggleTaskCompletedById(task.id)} >
                  {task.isCompleted ? <BsCheckCircleFill /> : <RiCheckboxBlankCircleLine/>}
                </button>
                <p contentEditable={true}>{task.title}</p>
                <button className="pr-3" onClick={ () => deleteTaskById(task.id)}>
                  <TbTrash  size={20} />
                </button>
              </div>
            </section>
          ))}
        </>
      </section>
      <Link to="/todo"></Link>
    </motion.div>
  );
};

export default Todo;
