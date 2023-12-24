import React, { useContext, useEffect, useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUser,
  faMessage,
  faGear,
  faLock,
  faArrowRightFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../../../provider/Authprovider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {
        console.log(error.message);
      });
  };


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className=" sticky bg-base-200  top-0 z-30">
      <div className="navbar ml-4 md:ml-12 ">
        <img data-aos="fade-down" className="w-12 " src={1} alt="" />
        <Fade className='w-full     font-bold ml-2 ' delay={1e3} cascade damping={1e-1}>
         <p className='text-3xl md:text-4xl text-purple-500'> Product  <span className='text-xl text-gray-400 '>Pages</span></p>
           
        </Fade>
       

        <div className="">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 bg-base-100 rounded-md  w-52"
            >
              <p className="px-2 my-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </p>

             
             
          

                <p className="px-2 py-2">
                  <NavLink
                    to="/add-product"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                   AddProduct
                  </NavLink>
                </p>
             

              {user && (
                <p className="px-2 py-2">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Products
                  </NavLink>
                </p>
              )}
              {!user?.email ? (
                <>
                  <p className="px-2 py-2">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Login
                    </NavLink>
                  </p>
                </>
              ) : (
                <p className="px-2 ">
                  <NavLink>
                    {" "}
                    <button
                    onClick={logOut}
                    className="bg-purple-500 hover:bg-purple-600  font-bold p-2 text-white rounded-md"
                  >
                      Sign Out
                    </button>
                  </NavLink>
                </p>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-24">
            <p className="mx-4 my-4">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </p>
             
    
            

              <p className="mx-4  my-4">
              <NavLink
                to="/add-product"
                className={({ isActive }) =>
                  isActive ? "active" : "default"
                }
              >
           AddProduct
              </NavLink>
            </p>
        

            {user && (
              <p className="px-2 my-4">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                Products
                </NavLink>
              </p>
            )}

            {!user?.email ? (
              <>
                <p className="mx-4  my-4">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Login
                  </NavLink>
                </p>
              </>
            ) : (
              <p className="mx-4 my-2">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  <button
                    onClick={logOut}
                    className="bg-purple-500 hover:bg-purple-600  font-bold p-2 rounded-md text-white"
                  >
                    Sign Out
                  </button>
                </NavLink>
              </p>
            )}
          </ul>

         
        </div>
        <div className="navbar-end  lg:mr-20" >
        <div className="mt-4 mr-6 md:mr-12">
        {/* Toggle button here */}
         
          <label className="w-2 h-2 swap  ">
            <input className="w-0  bg-transparent "
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
             
            <MdDarkMode className="w-8 h-8 swap-on"> </MdDarkMode>
 
            <MdOutlineLightMode className="w-8 h-8 swap-off"></MdOutlineLightMode>
          </label>

          

          
      </div>

          {user && (
            <motion.div
            className="box"
            
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}>
            <img
              className=" ml-2 w-12 h-12 md:w-20 md:h-20  rounded-full"
              title={user?.displayName}
              src={user ? user.photoURL : ""}
            />
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
