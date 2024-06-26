import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className=" bg-slate-200 shadow-md">
        <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl">
              <span className=" text-blue-700">Smary</span>
              <span className=" text-slate-900">Tutor</span>
            </h1>
          </Link>

          <ul className="flex gap-3">
            <Link to="/">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                About
              </li>
            </Link>
            
              <select className="hidden sm:inline text-slate-700 hover:underline">
                <option value="" disabled selected>
                  Select Profile
                </option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            <li className="hidden sm:inline text-slate-700 hover:underline">
                Sign In
              </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
