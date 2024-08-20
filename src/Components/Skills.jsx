import React from "react";

const Skills = () => {
  return (
    <section className="bg-black flex justify-center">
      <div className=" text-white flex flex-col justify-center my-28">
        <article className=" w-[95%] m-auto p-1">
          <p className="font-nunito font-semibold uppercase  text-[#66FFCC] tracking-widest text-sm ">
            My Skills
          </p>
          <h2 className="font-dmserif font-extrabold  text-white  text-4xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
            Technologies I Work With
          </h2>
          <p className="opacity-80 p-1 mt-3 font-nunito lg:w-[60%] xl:w-[40%]">
            I've taken a number of online courses and I'm currently getting my
            hands dirty with <strong>Next Js</strong>. Here are a few
            technologies I've been working with recently:
          </p>
        </article>
        <ul className="p-2 mt-6 grid grid-cols-2 gap-8  w-[95%] m-auto font-nunito text-sm font-medium tracking-wide md:grid-cols-4">
          <li>HTML & CSS</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>React Js</li>
          <li>Node Js</li>
          <li>Express Js</li>
          <li>MongoDB</li>
          <li>Git & Github </li>
          <li>Python</li>
          <li>C++</li>
          <li>SQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
