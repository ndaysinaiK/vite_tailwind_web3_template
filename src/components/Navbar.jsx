import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks1, navLinks2 } from "../constants";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { HiMenuAlt2 } from 'react-icons/hi'

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex mt-4 sm:mt-[48px]  items-center navbar">

      <div className="md:ml-[9%] flex items-center">
        <Link to="/">
          <p className="text-white text-xl sm:text-[25px] font-bold flex items-center justify-center">Template</p>
          
          </Link>

        <ul className="list-none md:flex hidden md:ml-[14rem] lg:ml-[23rem]  shadow-lg shadow-blue-300/40 hover:shadow-blue-300/30 justify-end items-center flex-1">
         <div className="flex bg-[#863A6F] p-4">
         {navLinks1.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-bold cursor-pointer text-[14px] ${active === nav.title ? "text-white" : "text-black"
                } ${index === navLinks1.length - 1 ? "mr-0" : "mr-8"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{(nav.title).toUpperCase()}</a>
            </li>

          ))}
         </div>

          <div className="flex bg-black p-4">
          {navLinks2.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-bold cursor-pointer text-[14px] ${active === nav.title ? "text-white" : "text-gray-300"
                } ${index === navLinks2.length - 1 ? "mr-0" : "mr-8"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{(nav.title).toUpperCase()}</a>
            </li>

          ))}
          </div>


          {/*<li>
            <Link to='/dashboard'>
              <p className='text-white mt-8 sm:mt-0 sm:ml-10 bg-slate-900 p-2 rounded-lg text-center cursor-pointer hover:bg-slate-900 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/60 rounded-lg font-poppins font-normal cursor-pointer text-[16px]'>
                Launch App
              </p>

            </Link>
              </li>*/}

        </ul>
      </div>
      

      <div className="md:hidden flex flex-1 justify-end items-center">
        <div alt="menu" className="w-[28px] flex items-center justify-center text-white h-[28px] object-contain" onClick={() => setToggle(!toggle)}>
          {toggle ? <span className="text-2xl"><AiOutlineCloseCircle /> </span> : <span className="text-2xl"><HiMenuAlt2 /></span>}
        </div>

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-12 ss:top-14 sm:top-20 right-0 mx-4 my-2 min-w-[220px] rounded-md sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks1.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks1.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{(nav.title).toUpperCase()}</a>
              </li>
            ))}

            <li className="mt-4"></li>

            {navLinks2.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks2.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{(nav.title).toUpperCase()}</a>
              </li>
            ))}

            {/*<li >
              <Link to='/dashboard'>
                <p className='text-white mt-4 sm:mt-0 sm:ml-10 bg-slate-900 p-2 rounded-lg text-center cursor-pointer hover:bg-slate-900 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/60 rounded-lg font-poppins font-normal cursor-pointer text-[16px]'>
                  Launch App
                </p>
              </Link>
                </li>*/}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;