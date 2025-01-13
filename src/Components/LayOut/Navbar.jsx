import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../Hooks/useCart";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [cart] = useCart();
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
        <Link to="/">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">our Shop</Link>
      </li>
    </>
  );
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
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
        <div className="navbar-center">
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
                <Link to='/dashboard/cart'>
                  <button className="w-12 h-12 rounded-full bg-green-800 flex justify-center items-center">
                    <div>
                      <GiShoppingCart className="text-3xl relative text-white" />
                      <div className="absolute font-bold text-white ml-4 bg-red-700 w-6 h-6 rounded-full text-sm -mt-2">
                        {cart.length}
                      </div>
                    </div>
                  </button>
                </Link>
                <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                {/* <CgProfile className="w-10 h-10"/> */}
              </>
            ) : (
              <>
                <Link to="/register">
                  <button className="font-bold">Register</button>
                </Link>
                <Link to="/login">
                  <button className="font-bold">Login</button>
                </Link>
                <CgProfile className="w-10 h-10"/>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
