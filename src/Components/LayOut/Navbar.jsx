import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Contact Us</NavLink>
      </li>
      <li>
        <NavLink>dashBoard</NavLink>
      </li>
      <li>
        <NavLink>Our Menu</NavLink>
      </li>
      <li>
        <NavLink>our Shop</NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar  max-w-7xl mx-auto text-white bg-black px-10 py-3 bg-opacity-30 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="flex flex-col text-2xl font-bold font">
            Bistro Boss{" "}
            <span className="text-xl tracking-widest">Restaurant</span>
          </Link>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <button className="font-bold">SignOut</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
