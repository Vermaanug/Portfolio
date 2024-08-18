import React from "react";
import Background from "./Background";

const Body = () => {
  return (
    <div >
      <Background />
      <div className="h-svh p-8 bg-black ">
        <div className="text-center mt-36 lg:flex lg:text-left xl:w-2/3 m-auto lg:mt-48 ">
          <div className="p-4">
            <p className="font-nunito uppercase font-semibold text-[#66FFCC] ml-4 tracking-widest">
              hi there , I'm
            </p>
            <h2 className="font-dmserif font-bold uppercase text-white tracking-wider text-4xl md:text-5xl xl:text-7xl">
              Anurag Verma
            </h2>
            <div className="flex flex-col justify-center items-center mt-1 md:p-1 lg:items-start">
              <p className="text-white font-nunito md:w-2/3">
                A Mumbai-based self-taught Full Stack Developer specializing in
                creating unique digital experiences through a seamless blend of
                frontend and backend skills
              </p>
              <div className="mt-5 w-28 p-2 border-2 text-center border-[#66FFCC] text-[#66FFCC] cursor-pointer hover:bg-[#66FFCC]  hover:text-black ease-in-out duration-300 hover:scale-105">
                <a
                  href="#"
                  className="font-nunito uppercase font-semibold tracking-widest "
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block ">
            <img src="/LaptopBoy.png" alt="Boy Image" className="lg:-mt-6 xl:mt-10 2xl:-mt-6 "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
