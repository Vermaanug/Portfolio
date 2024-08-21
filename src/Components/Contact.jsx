import React from "react";
import useAOS from "../Hooks/useAos.jsx"

const Contact = () => {

  useAOS({ duration: 1000 });

  return (
    <section id="contact" className="relative z-10 bg-black flex justify-center custom-lg:-ml-28 xl:-ml-72 2xl:-ml-72" >
      <div className="mx-2 mt-10 flex flex-col gap-6 max-w-full lg:my-10  " data-aos="fade-up">
        <div className="p-2">
          <p className="font-nunito font-semibold uppercase  text-[#66FFCC] tracking-widest text-[11px] lg:text-sm ">
            Have a project? or just looking to hire?
          </p>
          <h2 className="font-dmserif font-extrabold  text-white  text-4xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
            Let's Work Together
          </h2>
          <p className="opacity-80 mt-3  text-white font-nunito md:w-[60%]  xl:w-[60%]">
            Feel free to reach out if you're looking to hire, just want to
            connect or see if we can build something amazing together.
          </p>
        </div>
        <div className="mb-10">
          <a
            href="mailto:Vermaanug1974@gmail.com"
            className="p-2 font-nunito font-semibold text-white hover:text-[#66FFCC] hover:underline underline-offset-4 decoration-2 hover:transition-all duration-300"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
