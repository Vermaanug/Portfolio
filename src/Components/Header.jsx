import { FaBars } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import Nav from "./Nav";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-black  flex justify-between items-center p-3 border-b border-white">
        <div className="text-2xl text-white font-semibold ml-4 lg:pl-32">
          <h1>Anurag.dev</h1>
        </div>
        <div>
          <FaBars className="mr-4 text-white text-xl lg:hidden" onClick={toggleMenu} />
          <div className="hidden lg:flex items-center  mr-20">
            <ul className="flex font-semibold">
              <li className="px-8 cursor-pointer text-slate-300 hover:text-white">
                Home
              </li>
              <li className="px-8 cursor-pointer text-slate-300 hover:text-white">
                Education
              </li>
              <li className="px-8 cursor-pointer text-slate-300 hover:text-white">
                Project
              </li>
              <li className="px-8 cursor-pointer text-slate-300 hover:text-white">
                Contact
              </li>
            </ul>
            <div className="bg-white ml-4 rounded-sm flex items-center px-2 py-1 hover:opacity-75">
              <GoRocket className="text-black" />
              <button className="text-black font-semibold flex px-1">
                Hire me
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && <Nav />}
    </div>
  );
};

export default Header;
