import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";

import siteLogo from "../../src/assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const controls = useAnimation();

  const pathVariants = {
    normal: {
      x: 0,
      y: 0,
      rotate: 0,
    },
    animate: {
      x: [0, 3, 0],
      y: [0, -3, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="bg-white fixed top-0 left-0 right-0 z-[999]">
        <div className="max-w-[90%] mx-auto">
          <div className="flex justify-between px items-center py-6 md:justify-start px-5 lg:px-0">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img className="h-[27px] w-[147px]" src={siteLogo} alt="" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex gap-[6px]">
              <NavLink
                to="aboutus"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-brand-blue text-white" : ""
                  } transition-all duration-300 ease-in-out text-base leading-6 font-normal hover:bg-brand-blue hover:text-white py-[10px] px-[20px] rounded-full font-lato`
                }
              >
                Expertises
              </NavLink>
              <NavLink
                to="aboutus"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-brand-blue text-white" : ""
                  } transition-all duration-300 ease-in-out text-base leading-6 font-normal hover:bg-brand-blue hover:text-white py-[10px] px-[20px] rounded-full font-lato`
                }
              >
                Clients
              </NavLink>
              <NavLink
                to="driver"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-brand-blue text-white" : ""
                  } transition-all duration-300 ease-in-out text-base leading-6 font-normal hover:bg-brand-blue hover:text-white py-[10px] px-[20px] rounded-full font-lato`
                }
              >
                Consultants
              </NavLink>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-brand-blue text-white" : ""
                  } transition-all duration-300 ease-in-out text-base leading-6 font-normal hover:bg-brand-blue hover:text-white py-[10px] px-[20px] rounded-full font-lato`
                }
              >
                Nous rejoindre
              </NavLink>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-[8px]">
              <NavLink
                to="/suggestion"
                className="whitespace-nowrap text-[16px] leading-[20px] font-bold bg-white text-brand-blue hover:bg-brand-blue/90 hover:text-white border border-brand-blue py-[10px] px-[20px] rounded-full font-lato transition-all duration-300 ease-in-out"
              >
                Discuter d'un projet
              </NavLink>
              <Link
                to="suggestion"
                className="whitespace-nowrap text-base leading-6 font-normal bg-white text-brand-blue hover:bg-brand-blue/90 hover:text-white border border-brand-blue rounded-full font-lato transition-all duration-300 ease-in-out"
              >
                <div
                  className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
                  onMouseEnter={() => controls.start("animate")}
                  onMouseLeave={() => controls.start("normal")}
                >
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    variants={pathVariants}
                    animate={controls}
                  >
                    <path
                      d="M6 18L18 6M18 6H9M18 6V15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 z-[999]">
            <div className="pt-5 pb-6 px-5 z-[999]">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={siteLogo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-full hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Expertises
                    </span>
                  </NavLink>
                  <NavLink
                    to="aboutus"
                    className="-m-3 p-3 flex items-center rounded-full hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Clients
                    </span>
                  </NavLink>
                  <NavLink
                    to="driver"
                    className="-m-3 p-3 flex items-center rounded-full hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Consultants
                    </span>
                  </NavLink>
                  <NavLink
                    to="services"
                    className="-m-3 p-3 flex items-center rounded-full hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Nous rejoindre
                    </span>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 w-full pt-0 flex flex-col">
              <NavLink
                to="/suggestion"
                className="w-full whitespace-nowrap text-[16px] leading-[20px] font-bold bg-white text-brand-blue hover:bg-brand-blue/90 hover:text-white border border-brand-blue py-[10px] px-[20px] rounded-full font-lato transition-all duration-300 ease-in-out flex justify-center"
              >
                Discuter d'un projet
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
