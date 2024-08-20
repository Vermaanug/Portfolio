import React from "react";

const Project = () => {
  return (
    <section className="bg-black flex justify-center ">
      <div className="mx-2 my-16 py-20 flex flex-col gap-6 max-w-full lg:max-w-6xl  ">
        <article className="p-2">
          <p className="font-nunito font-semibold uppercase  text-[#66FFCC] tracking-widest text-sm ">
            My Projects
          </p>
          <h2 className="font-dmserif font-extrabold  text-white  text-4xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
            Some Things I Built
          </h2>
          <p className="opacity-80 font-nunito text-white my-6   md:w-[55%] lg:w-[50%]">
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications I've have built
          </p>
        </article>
        <section className="p-2 flex flex-col gap-36 ">
          <article className="flex flex-col gap-6 sm:flex-row">
            <a href="https://netflixfr.onrender.com/">
              <img
                src="/Netflix.jpeg"
                alt="Project 1"
                className="block max-w-full lg:max-w-md"
              />
            </a>
            <div className="p-1 flex flex-col gap-3 ">
              <h3 className="text-white text-2xl font-nunito tracking-widest opacity-80 ">
                01
              </h3>
              <h2 className="font-serif font-extrabold text-3xl tracking-wide text-white">
                Netflix-Clone
              </h2>
              <p className="font-serif tracking-wide font-medium text-opacity-95 text-white">
                View trending, popular, and recommended movies/TV series before
                deciding what to watch. It also includes a search feature,
                enabling users to find their favorite movies easily.
              </p>
              <ul className="flex flex-wrap items-center gap-4 text-sm text-black font-serif font-medium mt-2">
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  React Js
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  Tailwind CSS
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  Redux
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  Node Js
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  Express Js
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  MongoDB
                </li>
              </ul>
              <ul className="flex flex-wrap items-center gap-10 py-2 px-1">
                <li className="font-nunito font-semibold text-white hover:text-[#66FFCC]">
                  <a href="https://netflixfr.onrender.com/">Live Site →</a>
                </li>
                <li className="font-nunito font-semibold text-white hover:text-[#66FFCC] ">
                  <a href="https://github.com/Vermaanug/Netflix/tree/main">Github →</a>
                </li>
              </ul>
            </div>
          </article>
          <article className="flex flex-col gap-6 sm:flex-row-reverse">
            <a href="#">
              <img
                src="/Book.jpeg"
                alt="Project 1"
                className="block max-w-full lg:max-w-md"
              />
            </a>
            <div className="p-1 flex flex-col gap-3 ">
              <h3 className="text-white text-2xl font-nunito tracking-widest opacity-80 ">
                02
              </h3>
              <h2 className="font-serif font-extrabold text-3xl tracking-wide text-white">
                BookScrap
              </h2>
              <p className="font-serif tracking-wide font-medium text-opacity-95 text-white">
                BookScrap is a dynamic platform for buying and selling pre-loved
                books. It provides a seamless user experience where individuals
                can list their old books for sale and browse through various
                listings.
              </p>
              <ul className="flex flex-wrap items-center gap-4 text-sm text-black font-serif font-medium mt-2">
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  HTML
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  CSS
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                Handlebars
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  Node Js
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  Express Js
                </li>
                <li className="bg-[#8C8C8C] text-center rounded-sm px-2 py-[1px]">
                  MongoDB
                </li>
              </ul>
              <ul className="flex flex-wrap items-center gap-10 py-2 px-1">

                <li className="font-nunito font-semibold text-white hover:text-[#66FFCC] ">
                  <a href="#">Github →</a>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Project;
