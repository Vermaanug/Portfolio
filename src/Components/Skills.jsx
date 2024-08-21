import React from "react";
import useAOS from "../Hooks/useAos.jsx"

const Skills = () => {

  useAOS({ duration: 1000 });

  return (
    <section id="skills" className="relative z-10 bg-black flex justify-center custom-lg:-ml-14">
      <div className="mx-2 mt-10 pt-20 flex flex-col gap-6 max-w-full lg:mb-10  "  data-aos="fade-up">
        <article className="p-2">
          <p className="font-nunito font-semibold uppercase  text-[#66FFCC] tracking-widest text-sm ">
            My Skills
          </p>
          <h2 className="font-dmserif font-extrabold  text-white  text-4xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
            Technologies I Work With
          </h2>
          <p className="text-opacity-90 mt-3  text-white font-nunito md:w-[55%] lg:w-[60%] xl:w-[60%]">
            I've taken a number of online courses and I'm currently getting my
            hands dirty with <strong>Next Js</strong>. Here are a few
            technologies I've been working with recently:
          </p>
        </article>
        <ul className="p-2 grid grid-cols-2 gap-8 text-black  font-serif text-sm font-semibold tracking-wide md:grid-cols-4 " data-aos="fade-up">
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">React Js</li>
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">Tailwind CSS</li>
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">JavaScript</li>
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">Node Js</li>
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">Express Js</li>
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">MongoDB</li>
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">Git & Github </li>
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">Python</li>
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">C++</li>
          <li className="bg-[#ffffff] text-center  rounded-sm px-2 py-[1px] lg:py-[6px]">SQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
