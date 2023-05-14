import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../Assests/WellLogo.png"
function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false)
  const [ison, setIsOn] = useState<boolean>(false);
  const location = useLocation()
  const navigate = useNavigate()
  let loggeduser = localStorage.getItem("wellfituser")
  let isAuth = localStorage.getItem("auth") || false;
  const showToastMessage = () => {
    toast.success('Successfully Logged out!!', {
      position: toast.POSITION.TOP_CENTER
    });
  };
  const handlelogout = () => {
    localStorage.clear()
    setToggle(!toggle)
    showToastMessage()
    navigate("/")

  }


  useEffect(() => {

  }, [location.search])

  return (

    <nav className="sticky top-0  border-gray-200 bg-teal-500 z-10 ">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img

            src={logo}
            className="h-8 mr-3"
            alt=" Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WellFit
          </span>
        </a>
        <div className="flex md:order-2">
          {isAuth ?
            <div>
              <span className="text-black font-bold mr-5 text-xl">Hi, {loggeduser}</span>
              <button
                type="button"
                onClick={handlelogout}
                className="text-white bg-black-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-10  bg-black dark:focus:ring-blue-800"
              >
                Sign Out
              </button>
            </div>
            :
            <Link to="/signin">
              <button
                type="button"
                className="text-white bg-black-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-10  bg-black dark:focus:ring-blue-800"
              >
                Sign In
              </button>
            </Link>}
          {!isAuth ?
            <Link to="/signup">
              <button
                type="button"
                className="text-white bg-black-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-black dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </Link> : null}
          <button
            onClick={() => setIsOn(!ison)}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-white-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="  items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a href="/" className="text-white">
                Home
              </a>
            </li>

            <li>
              <a href="/blogs" className="text-white">
                Blogs
              </a>
            </li>
            <li>
              <a href="/nutrition" className="text-white">
                Nutrition
              </a>
            </li>
            {isAuth ?
              <li>
                <a href="/exercise" className="text-white">
                  Exercises
                </a>
              </li> : null
            }

            <li>
              <a href="/customexercise" className="text-white">
                Workouts
              </a>
            </li>
            <li>
              <a href="/yoga" className="text-white">
                Yoga
              </a>
            </li>
            {/* <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div
        style={{ display: ison ? "block" : "none" }}
        className="absolute top-19  border-2 w-full bg-white p-8 rounded-2xl ml-5"
      >
        <a href="/">
          <p className="p-2  font-bold bg-teal-500 hover:text-white  rounded-xl">Home</p>
        </a>
        <a href="/blogs">
          <p className="p-2 mt-5 font-bold bg-teal-500 hover:text-white  rounded-xl">Blogs</p>
        </a>
        <a href="/nutrition">
          <p className="p-2 mt-5 font-bold bg-teal-500 hover:text-white  rounded-xl">Nutrition</p>
        </a>
        {isAuth ?
          <a href="/exercise">
            <p className="p-2 mt-5 font-bold bg-teal-500 hover:text-white  rounded-xl">Exercise</p>
          </a> : null}
        <a href="/customexercise">
          <p className="p-2 mt-5 font-bold bg-teal-500 hover:text-white  rounded-xl">Workout</p>
        </a>
        <a href="/yoga">
          <p className="p-2 mt-5 font-bold bg-teal-500 hover:text-white  rounded-xl">Yoga</p>
        </a>
      </div>
      <ToastContainer autoClose={2000} />
    </nav>
  );
}

export default Navbar;
