import React from 'react'

const Header = () => {
  return (
    <div className='  '>
      <div className="navbar fixed bg-gray-200 rounded-b-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href="#info">Travel Info</a></li>
              <li><a href="#place">Travel Place</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <a href='/' className=" text-red-600 font-bold text-sm lg:text-3xl">Saifur Enterprise</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-xl">
            <li><a href="#info">Travel Info</a></li>
            <li><a href="#place">Travel Place</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
