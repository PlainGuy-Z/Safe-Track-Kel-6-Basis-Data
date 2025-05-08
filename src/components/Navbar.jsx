import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="h-[10vh] bg-slate-800 flex flex-col sm:flex-row ">
      {/* Left Nav  */}
      <div className="flex items-center bg-slate-900 h-full w-full sm:w-auto relative sm:pr-10 animate__animated animate__fadeInTopLeft animate__delay-1s" style={{ clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0% 100%)' }}>
        <ul className="flex items-center p-0 m-0 list-none px-5 h-full">
          <li className="text-white flex items-center hover:text-yellow-600 transition-all duration-700 ease-in-out delay-200">
            <img src="s.png" className="h-[30px] w-[50px] block" alt="picture" />
          </li>
          <li className="flex items-center font-bold bg-gradient-to-r from-red-600 to-indigo-800 bg-clip-text  hover:text-rose-900 transition-all duration-500 easy-in-out delay-200 text-transparent ml-2">
            <h3 className="text-xl">SafeTrack</h3>
          </li>
        </ul>
      </div>

      {/* Right Nav */}
      <div className="flex-1 flex justify-end animate__animated animate__fadeInTopRight animate__delay-1s">
        <div className="flex items-center bg-slate-900 h-full w-full sm:w-auto relative sm:pl-10" style={{ clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <ul className="flex items-center justify-center sm:justify-end gap-2 p-0 m-0 list-none font-sans text-xs px-5 h-full w-full">
            <li className="text-white flex items-center gap-2">
              <Link to="/login" href="#"
                className="bg-gradient-to-r from-red-600 to-indigo-800 bg-clip-text text-transparent text-2xl px-3 py-2 font-bold no-underline hover:text-red-900  transition-all duration-500 ease-in-out delay-200">Login</Link>
              <Link to="/register" href="#"
                className="bg-gradient-to-r from-red-600 to-indigo-800 bg-clip-text text-transparent text-2xl px-3 py-2 font-bold no-underline hover:text-red-900  transition-all duration-500 ease-in-out delay-200">Daftar</Link>         
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Navbar;