import React  from "react";
import Background from "./Background";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import useAOS from "../Hooks/useAos.jsx"

const Body = () => {

  useAOS({ duration: 1000 });

  return (
    <main>
      <section className=" p-8 bg-black h-screen ">
        <Background />
        <div className="text-center mt-48 lg:flex lg:text-left xl:w-2/3 m-auto 2xl:mt-72" data-aos="fade-right" >
          <div className="p-4 ">
            <p className="font-nunito uppercase font-semibold text-[#66FFCC] ml-4 tracking-widest">
              hi there , I am
            </p>
            <h2 className="font-dmserif font-bold uppercase text-white tracking-wider text-[32px] md:text-5xl xl:text-6xl 2xl:text-7xl">
              Anurag Verma
            </h2>
            <div className="flex flex-col justify-center items-center mt-1 md:p-1 lg:items-start">
              <p className="text-white font-nunito opacity-95 md:w-2/3">
                A Mumbai-based self-taught Full Stack Developer specializing in
                creating unique digital experiences through a seamless blend of
                frontend and backend skills.
              </p>
              <div className="mt-5 w-28 p-2 border-2 text-center border-[#66FFCC] text-[#66FFCC] cursor-pointer hover:bg-[#66FFCC]  hover:text-black ease-in-out duration-300 hover:scale-105">
                <a
                  href="mailto:Vermaanug1974@gmail.com"
                  className="font-nunito uppercase font-semibold tracking-widest "
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block  ">
            <img
              src="/Coding.png"
              alt="Boy Image"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
};

export default Body;
