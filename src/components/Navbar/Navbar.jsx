/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/storyOfUs"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-indigo-500 font-medium font-poppins"  : "font-medium font-poppins "
        } 
      >
       STORY OF US
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-indigo-500 font-medium font-poppins"  : "font-medium font-poppins "
        } 
      >
       SERVICES
      </NavLink>
      <NavLink
        to="/topInstitutions"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-indigo-500 font-medium font-poppins"  : "font-medium font-poppins "
        } 
      >
      TOP INSTITUTIONS
      </NavLink>
      <NavLink
        to="/touristsHub"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-indigo-500 font-medium font-poppins"  : "font-medium font-poppins "
        } 
      >
       TOURISTS HUB
      </NavLink>
      <NavLink
        to="/ourTeam"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-indigo-500 font-medium font-poppins"  : "font-medium font-poppins "
        } 
      >
       OUR TEAM
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-indigo-500 font-medium font-poppins"  : "font-medium font-poppins "
        } 
      >
       BLOG
      </NavLink>
      
      
    </>
  );

  return (
    <nav className=" fixed w-full mx-auto mt-4 z-[100] shadow-lg rounded-[25px] bg-transparent top-0">
      <div className="container px-6 lg:px-[32px] py-[14px] mx-auto md:flex md:justify-between md:items-center ">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="w-auto h-14"
              src="https://cdn.sanity.io/images/s37229yn/production/576084e1b9545990e38bc6ccee63646f2b0b0742-756x276.png?w=320&auto=format"
              alt="Logo"
            />
          </Link>

          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button">
              {!isOpen ? <RiMenuLine /> : <p>X</p>}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:flex-col md:items-center`}
        >
          <div className="flex flex-col gap-3 lg:gap-7 md:flex-row md:mx-6 items-center">
            {navLinks}
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-[13px] px-[32px] font-poppins text-white rounded-[12px]">
              LET'S TALK
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
