import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import crypto from "../assets/crypto-market.png";
import project1 from "../assets/project1.png";
import javascriptproject from "../assets/javascript-project.png";
const Projects = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight, transition: { duration: 0.2 } }}
      className="bg-gradient-to-b min-h-screen from-cyan-100 to-blue-400 text-md text-black font-shan"
    >
      <div className="mx-40 h-[100%]">
        <h2 className="font-semibold text-3xl mb-8 pt-8">
          Projects I'm proud of
        </h2>

        {/* project 1 */}

        <section class="pt-8 flex mb-8 flex-row-reverse">
          <div className="text ml-8 flex flex-col">
            <h4 className="text-xl font-semibold">Crypto Explorer site</h4>
            <p className="">
              Description of the project. This should be fairly concise while
              also describing the key components that you developed or worked
              on. It can be as long as you need it to be but should at least be
              a few sentences long. Be sure to include specific links anywhere
              in the description. Live link to the project{" "}
              <a
                className="underline decoration-auto hover:no-underline"
                href="https://642d8bcddb12244c5445799f--cryto-explorer-m4h4nk4l1.netlify.app/"
              >
                netlify
              </a>
              .
            </p>
            <h4 className="font-semibold">Technologies used include:</h4>
            <ul>
              <li>ReactJS</li>
              <li>Tailwind Css</li>
              <li>Context-Api</li>
            </ul>
          </div>
          <img
            src={crypto}
            width="700"
            height="380"
            alt="Screenshot of code."
            className=" p-4  border-purple-600 rounded-2xl border-l-4"
          />
        </section>

        {/* project 2 */}

        <section className="pt-8 flex mb-8 flex-row">
          <div>
            <h3 className="text-xl font-semibold">Construction Materials</h3>
            <p>
              It is a online purchasing construction material ecommerce site
              where you can purchase different construction materials of
              different brands listed. It is a frontend website you can access
              it{" "}
              <a
                className="underline decoration-auto hover:no-underline"
                href="https://github.com/m4h4nk4l1/reactJS-construction"
              >
                Here
              </a>
              .
            </p>
            <h4 className="font-semibold">Technologies used include:</h4>
            <ul>
              <li>reactJS</li>
              <li>Bootstrap</li>
              <li>Json-server</li>
            </ul>
          </div>
          <img
            src={project1}
            width="700"
            height="380"
            alt="Screenshot of the Wall of Wonder."
            className=" p-4  border-purple-600 rounded-2xl border-r-4"
          />
        </section>

        {/* project 3 */}

        <section className="pt-8 mb-8 flex flex-row-reverse">
          <div className="ml-8">
            <h3 className="text-xl font-semibold">
              Multiple Javascript Features
            </h3>
            <p>
              It is a online purchasing construction material ecommerce site
              where you can purchase different construction materials of
              different brands listed. It is a frontend website with
              <a
                className="underline decoration-auto hover:no-underline"
                href="https://github.com/m4h4nk4l1/reactJS-construction"
              >
                Link
              </a>
              .
            </p>
            <h4 className="font-semibold">Technologies used include:</h4>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
            </ul>
          </div>
          <img
            src={javascriptproject}
            width="700"
            height="380"
            alt="Screenshot of the Wall of Wonder."
            className=" p-4  border-purple-600 rounded-2xl border-l-4"
          />
        </section>

        {/* coming soon section with logo */}

        <div className="flex flex-col h-screen bg-center bg-cover ">
          <div className="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600 border-4 border-black bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="h-24 w-24 text-indigo-600"
              viewBox="0 0 16 16"
            >
              <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
            </svg>

            <h1 className="text-3xl font-bold uppercase text-black transition duration-500">
              Coming Soon
            </h1>
            <h2 className="text-lg text-black font-semibold">
              I Building more. Checkout later.......
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
          </div>
        </div>
      </div>

      <Link to="/projects"></Link>
    </motion.div>
  );
};

export default Projects;
