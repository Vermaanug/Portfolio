import React from "react";

const Skills = () => {
  return (
    <section className="bg-black flex justify-center custom-lg:-ml-14">
      <div className="mx-2 mt-10 pt-20 flex flex-col gap-6 max-w-full lg:mb-10  ">
        <article className="p-2">
          <p className="font-nunito font-semibold uppercase  text-[#66FFCC] tracking-widest text-sm ">
            My Skills
          </p>
          <h2 className="font-dmserif font-extrabold  text-white  text-4xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
            Technologies I Work With
          </h2>
          <p className="opacity-80 mt-3  text-white font-nunito md:w-[55%] lg:w-[60%] xl:w-[60%]">
            I've taken a number of online courses and I'm currently getting my
            hands dirty with <strong>Next Js</strong>. Here are a few
            technologies I've been working with recently:
          </p>
        </article>
        <ul className="p-2 grid grid-cols-2 gap-8 text-white  font-nunito text-sm font-medium tracking-wide md:grid-cols-4">
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
