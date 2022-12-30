import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  location = location.pathname;
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState(false);
  return (
    <>
      <div className="flex items-center justify-around bg-slate-900 p-3">
        <div className="w-2/3">
          <NavLink
            to="/"
            className="text-slate-100 text-xl font-bold"
          >
            iNotebook
          </NavLink>
        </div>
        <div className="hidden justify-end sm:flex">
          <ul className="flex gap-5 text-xs">
            <li>
              <NavLink
                to="/"
                className={`${location === '/' ? 'bg-indigo-900' : 'bg-white bg-opacity-25'} tab py-2 px-3 text-slate-100 hover:bg-indigo-900 rounded-md uppercase font-semibold transition-all duration-200`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`${location === '/about' ? 'bg-indigo-900' : 'bg-white bg-opacity-25'} tab py-2 px-3 text-slate-100 hover:bg-indigo-900 rounded-md uppercase font-semibold transition-all duration-200`}
              >
                About
              </NavLink>
            </li>

            {!localStorage.getItem('token')
              ? <><li>
                  <NavLink
                    to="/login"
                    className={`${location === '/login' ? 'bg-indigo-900' : 'bg-white bg-opacity-25'} tab py-2 px-3 text-slate-100 hover:bg-indigo-900 rounded-md uppercase font-semibold transition-all duration-200`}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className={`${location === '/signup' ? 'bg-indigo-900' : 'bg-white bg-opacity-25'} tab py-2 px-3 text-slate-100 hover:bg-indigo-900 rounded-md uppercase font-semibold transition-all duration-200`}
                  >
                    Signup
                  </NavLink>
                </li></>
              : <li>
                <NavLink
                  to="/login"
                  onClick={()=>{localStorage.removeItem('token'); props.showAlert("Logged Out Successfully", "success")}}
                  className={`bg-white bg-opacity-25 tab py-2 px-3 text-slate-100 hover:bg-indigo-900 rounded-md uppercase font-semibold transition-all duration-200`}
                >
                  Logout
                </NavLink>
              </li>}
          </ul>
        </div>

        {/* Mobile Navbar */}

        <div className="flex items-center sm:hidden">
          {/* <!-- Mobile menu button--> */}
          <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setMobileMenuDropdown(!mobileMenuDropdown)}>
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
      <div className={`${mobileMenuDropdown ? "block" : 'hidden'} absolute w-full bg-slate-800 py-5 text-center sm:hidden z-20`}>
        <ul className="text-xs">
          <li>
            <NavLink
              to="/"
              className={`${location === '/' ? 'bg-indigo-900' : ''} tab py-2 px-3 text-slate-100 hover:bg-indigo-900 uppercase font-semibold transition-all duration-200 block`}
              onClick={() => { setMobileMenuDropdown(false) }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`${location === '/about' ? 'bg-indigo-900' : ''} tab py-2 px-3 text-slate-100 hover:bg-indigo-900 uppercase font-semibold transition-all duration-200 block`}
              onClick={() => { setMobileMenuDropdown(false) }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={`${location === '/login' ? 'bg-indigo-900' : ''} tab py-2 px-3 text-slate-100 hover:bg-indigo-900 uppercase font-semibold transition-all duration-200 block`}
              onClick={() => { setMobileMenuDropdown(false) }}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={`${location === '/signup' ? 'bg-indigo-900' : ''} tab py-2 px-3 text-slate-100 hover:bg-indigo-900 uppercase font-semibold transition-all duration-200 block`}
              onClick={() => { setMobileMenuDropdown(false) }}
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
