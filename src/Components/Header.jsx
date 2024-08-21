import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Nav from "./Nav";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" fixed top-0 left-0 right-0 bg-[#363636]  lg:bg-black p-4 z-50 ">
      <div className="bg-[#363636] rounded-lg p-1  justify-between lg:w-4/6 flex mx-auto  items-center">
        <div className="w-10 ml-6 cursor-pointer">
          <img src="/Face2.png" alt="Logo" className="rounded-full" />
        </div>
        <div className="p-2 mr-4">
          {isMenuOpen ? (
            <RxCross2
              className="text-white text-2xl lg:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <FaBarsStaggered
              className="text-white text-2xl lg:hidden"
              onClick={toggleMenu}
            />
          )}
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center text-white">
            <li className=" mx-2 p-2  font-nunito font-semibold cursor-pointer hover:text-green-500 hover:underline underline-offset-4 decoration-2 hover:transition-all duration-300">
              <Link to="about" smooth={true} duration={500} offset={-50}>
                About
              </Link>
            </li>
            <li className=" mx-2 p-2 font-nunito font-semibold cursor-pointer hover:text-green-500 hover:underline underline-offset-4 decoration-2 hover:transition-all duration-300 ">
              <Link to="skills" smooth={true} duration={500} offset={-50}>
                Skills
              </Link>
            </li>
            <li className="mx-2 p-2 font-nunito  font-semibold cursor-pointer hover:text-green-500 hover:underline underline-offset-4 decoration-2 hover:transition-all duration-300">
              <Link to="project" smooth={true} duration={500} offset={-50}>
                Project
              </Link>
            </li>
            <li className="ml-2 p-2 font-nunito  font-semibold cursor-pointer hover:text-green-500 hover:underline underline-offset-4 decoration-2 hover:transition-all duration-300 ">
              <Link to="contact" smooth={true} duration={500} offset={-50}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center text-white">
            <li className="p-2 mx-4 cursor-pointer  hover:rounded-full hover:bg-[#66FFCC] transition-all duration-300  group">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 bg-transparent group-hover:text-black"
                >
                  <path
                    fill="currentColor"
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                  />
                </svg>
              </a>
            </li>
            <li className="p-2 mx-4 cursor-pointer hover:rounded-full hover:bg-[#66FFCC] transition-all duration-300  group">
              <a href="https://github.com/Vermaanug">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="w-4 bg-transparent group-hover:text-black"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
            </li>
            <li className="p-2 mx-4 cursor-pointer hover:rounded-full hover:bg-[#66FFCC] transition-all duration-300  group">
              <a href="https://www.linkedin.com/in/anurag-verma-01240621a/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 bg-transparent group-hover:text-black"
                >
                  <path
                    fill="currentColor"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
    </header>
  );
};

export default Header;
