import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "LogOut Successful",
        text: "You LogOut successfully!!",
        icon: "success",
      });
    });
  };
  const links = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      <li>
        <Link>dashBoard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">our Shop</Link>
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
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
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

          <div className="flex items-center gap-3">
            {user ? (
              <>
                {" "}
                <button onClick={handleLogOut} className="font-bold">
                  LogOut
                </button>
              </>
            ) : (
              <>
                <Link to="/register">
                  <button className="font-bold">Register</button>
                </Link>
                <Link to="/login">
                  <button className="font-bold">Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
