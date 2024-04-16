const Nav = () => {
  return (
    <div>
      {/* <div className="flex items-center">
        <ul className="text-white flex font-semibold">
          <li className="px-8">Home</li>
          <li className="px-8">Education</li>
          <li className="px-8">Project</li>
          <li className="px-8">Contact</li>
        </ul>
        <div className="bg-white ml-4 rounded-sm flex items-center px-2 py-1 hover:opacity-75">
          <GoRocket className="text-black" />
          <button className="text-black font-semibold flex px-1">
            Hire me
          </button>
        </div>
      </div> */}
      <div className="bg-black text-white">
        <div className="flex">
          <ul className="my-4 w-full flex flex-col items-center">
            <li className="my-2 px-4 text-xl font-thin cursor-pointer text-slate-300 hover:text-white">Home</li>
            <li className="my-2 px-4 text-xl font-thin cursor-pointer text-slate-300 hover:text-white">Education</li>
            <li className="my-2 px-4 text-xl font-thin cursor-pointer text-slate-300 hover:text-white">Project</li>
            <li className="my-2 px-4 text-xl font-thin cursor-pointer text-slate-300 hover:text-white">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
