import React from "react";

const About = () => {
  return (
    <section className="bg-[#1C1C1C]">
      <div className="flex flex-col py-10 md:flex-row p-4 xl:gap-6 xl:py-32">
        <div className=" flex-1 md:p-4 ">
          <img
            src="/LaptopBoy.png"
            alt="Boy"
            className="w-full h-full object-cover lg:w-96 p-5 ml-auto"
          />
        </div>
        <div className="pt-10 flex-1 md:p-4 lg:pt-14 ">
          <p className="font-nunito uppercase font-semibold text-[#66FFCC] tracking-widest ml-4 text-sm">
            Who is Anurag Verma
          </p>
          <h2 className="font-dmserif font-bold uppercase text-white tracking-wide text-[32px]  ml-3">
            A bit About Me
          </h2>
          <div className="px-3 xl:w-2/3 2xl:w-1/2">
            <p className="text-white font-serif text-left tracking-wide">
              I'm a passionate, self-taught Full Stack Developer with a strong
              background developing outstanding digital experiences.
            </p>
            <p className="block mt-4 text-white font-serif">
              Through my studies and hands-on experience, I've developed a solid
              grasp of web development concepts and have dedicated significant
              time to applying these ideas in real-world scenarios
            </p>
            <p className="block mt-4 text-white font-serif">
              When I'm not immersed in building and learning, you might find me
              watching  cricket or movies , always thinking about how to make
              things better 😉.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
