import React from "react";
import netflix from "../assets/netflix-app3.png";
import cv from "../assets/cv-app.png";
import shoppingCart from "../assets/shopping-app2.png";
import anime from '../assets/anime.png'
import memories from '../assets/memories.png'
import freeCode from '../assets/freecode.png'
import commerce from '../assets/commerce.png'
import college from '../assets/college.png'

export default function Work() {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Title of the work section */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Grid of all of my projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">



          {/* Indivdual Card item/box */}
          <div
            style={{ backgroundImage: `url(${commerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-base font-bold text-white tracking-wider">
                E-Commerce Full Stack React JS Application, this app is deployed using Render. I used redux toolkit to handle my state values, and also used redux toolkit persist to persist my state. This app also has strapi and stripe configurations.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ecommerce-app-4n5y.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/favourflav2/E-Commerce-Backend-Render"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                     Backend Code
                  </button>
                </a>

                <a
                  href="https://github.com/favourflav2/E-Commerce-Render-FrontEnd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Frontend Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Indivdual Card item/box */}
          <div
            style={{ backgroundImage: `url(${college})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-sm font-bold text-white tracking-wider ">
              This app I incorporated the College Board api, with this a user can search a college and retrieve valuable data. If a user is logged in and authenticated they can save colleges and view them in their dashboard.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://college-app-frontend.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/favourflav2/Full-Stack-College-FrontEnd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Frontend Code
                  </button>
                </a>

                <a
                  href="https://github.com/favourflav2/Full-Stack-College-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend Code
                  </button>
                </a>
              </div>
            </div>
          </div>



          {/* Indivdual Card item/box */}
          <div
            style={{ backgroundImage: `url(${anime})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-sm font-bold text-white tracking-wider ">
                This is an anime app I deployed using render for my backend and netlify for my frontend. I used a lot of concepts from other projects I created from youtube. Using Mongdb to store users and authenticating users with jwt. Logged in users will be able to save animes to their dashboard pages.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://bestanimesfavourweb.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/favourflav2/Anime-Full-Stack-Netlify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Frontend Code
                  </button>
                </a>

                <a
                  href="https://github.com/favourflav2/Anime-Full-Stack-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend Code
                  </button>
                </a>
              </div>
            </div>
          </div>




            {/* Indivdual Card item/box */}
            <div
            style={{ backgroundImage: `url(${memories})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-sm font-bold text-white tracking-wider">
              This is a MERN stack app that utilizes Nodejs and Express for the backend and React for the front end. A user that is logged in will be authenticated using jsonwebtokens and then be able to like, edit, and delete posts.
 
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://memories-mern-app-favour.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/favourflav2/First-Frontend-Deploy-Memeories-Full-Stack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Frontend Code
                  </button>
                </a>
                <a
                  href="https://github.com/favourflav2/First-Backend-Deploy-Memeories-Full-Stack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          {/* Indivdual Card item/box */}
          <div
            style={{ backgroundImage: `url(${freeCode})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-sm font-bold text-white tracking-wider">
                I have completed the JavaScript Algorithms and Data Structures section from freecodecamp. I periodically go back and practice in between me working on building apps.
              </span>
              <div className="pt-8 text-center">
                {/* <a
                  href="https://bestanimesfavourweb.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/favourflav2/Anime-Full-Stack-Netlify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Frontend Code
                  </button>
                </a>

                <a
                  href="https://github.com/favourflav2/Anime-Full-Stack-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
