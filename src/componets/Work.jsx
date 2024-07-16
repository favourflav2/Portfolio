import React from "react";
import carLoan from "../assets/carLoan.png";
import foodApp from "../assets/foodApp.png";
import nikeApp from "../assets/nikeApp.png";
import huluApp from "../assets/hulu.png";


export default function Work() {
  return (
    <div name="work" className="bg-[#0a192f] w-full  text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Title of the work section */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
          <p className="py-6">// Check out of my recent work</p>
        </div>

        {/* Data Scrape / Car Loan App */}
        <div className="w-full h-auto flex flex-col items-center justify-center mb-10">
          {/* About */}
          <p>
            I built this application so people can have a place where they can visually see the relationship between interest and time. They will be
            able to determine if that car loan and or mortgage is worth it, because they will be able to run the numbers. And ultimately also have the
            chance to see how much that loan will cost them over that period of time, and hopefully make a better informed decision.
          </p>

          {/* content */}
          <div className="h-auto lg:w-[50%] md:w-[70%] w-full 2xl:w-[45%] flex flex-col">
            {/* Indivdual Card item/box */}
            <div
              style={{ backgroundImage: `url(${carLoan})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative"
            >
              {/* Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-sm font-bold text-white tracking-wider p-2">
                  This application is a calculator that uses future value, present value, cost of debt, and other equations to find how much something
                  cost. You will be able to visually see how time and interest play a crucial part on the type of loans you choose and the type of
                  investments you decide.
                </div>
                <div className="pt-8 text-center">
                  <a href="https://thefinancecalculator.org/" target="_blank" rel="noopener noreferrer">
                    <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Deployed Site</button>
                  </a>
                  <a href="https://github.com/favourflav2/CarLoan/tree/main" target="_blank" rel="noopener noreferrer">
                    <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Backend Code</button>
                  </a>

                  <a href="https://github.com/favourflav2/CarLoan/tree/main" target="_blank" rel="noopener noreferrer">
                    <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Frontend Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Title of the work section */}
         <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 text-gray-300 border-pink-600">Other Work</p>
          <p className="py-6">// Check out some of my other work</p>
        </div>

        <p className="text-red-400 text-sm mb-4">
          The Nike clone, Food App, and Hulu clone are all deployed on render. Web Services on the free instance type which I am using are
          automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can
          process the request. So, this will cause a delay in the response of the first request after a period of inactivity while the instance spins
          up.{" "}
        </p>

        {/* Grid of all of my projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 h-full ">
          {/* Indivdual Card item/box */}
          <div
            style={{ backgroundImage: `url(${nikeApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-sm font-bold text-white tracking-wider p-2">
                This is a Nike clone, another E-commerce application that is a full-stack application. A user will be able to create an account and be
                able to order items and have those ordered items saved to a database. A user will also be able to save their favorite items.
              </div>
              <div className="pt-8 text-center">
                <a href="https://nike-eccomerce-wtls.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/favourflav2/Nike_App_Docker/tree/main/server" target="_blank" rel="noopener noreferrer">
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Backend Code</button>
                </a>

                <a href="https://github.com/favourflav2/Nike_App_Docker/tree/main/client" target="_blank" rel="noopener noreferrer">
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Frontend Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Indivdual Card item/box */}
          <div
            style={{ backgroundImage: `url(${huluApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-sm font-bold text-white tracking-wider p-2">
                This is a Hulu clone using ThemovieDB API. A logged in user will be able to save movies and or tv shows to their saved items. And also
                be able to change their email and name. Please have a look around.
              </div>
              <div className="pt-8 text-center">
                <a href="https://bulu.onrender.com/Home" target="_blank" rel="noopener noreferrer">
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/favourflav2/HuluApp/tree/main/server" target="_blank" rel="noopener noreferrer">
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Backend Code</button>
                </a>

                <a href="https://github.com/favourflav2/HuluApp/tree/main/client" target="_blank" rel="noopener noreferrer">
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Frontend Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Indivdual Card item/box */}
          <div
            style={{ backgroundImage: `url(${foodApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-sm font-bold text-white tracking-wider p-2">
                This is a food ordering app, a user will be able to select what they want to buy. Then be redirected to a stripe checkout session.
              </div>
              <div className="pt-8 text-center">
                <a href="https://food-app-frontend-cbb2.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a href="https://github.com/favourflav2/Food-App-Backend" target="_blank" rel="noopener noreferrer">
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Backend Code</button>
                </a>

                <a href="https://github.com/favourflav2/Food-App-Frontend" target="_blank" rel="noopener noreferrer">
                  <button className="text-center  rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Frontend Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
