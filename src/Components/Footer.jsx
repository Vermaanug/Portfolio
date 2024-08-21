import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#1C1C1C] flex justify-center">
      <div className="flex p-4 justify-around items-center flex-row gap-5">
        <p className="text-white font-roboto font-bold text-[12px] mb-2">© 2024 Anurag Verma</p>
        <Link
          to="top"
          smooth={true}
          duration={500}
          className="text-white font-roboto font-bold text-[12px] mb-2  cursor-pointer hover:text-gray-400"
        >
          Scroll to Top
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
