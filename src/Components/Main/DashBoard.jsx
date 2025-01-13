import React from "react";
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaUser, FaUsers } from "react-icons/fa";
import { GiShoppingCart, GiStarsStack } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineMail, MdOutlineMenu } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import { FaUtensils } from "react-icons/fa6";
import useAdmin from "../../Hooks/useAdmin";
const DashBoard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 p-5 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                 <FaUtensils></FaUtensils> Add Items{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  {" "}
                 <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                <FaBook />
                 Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  {" "}
                  <GiShoppingCart></GiShoppingCart>My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <GiStarsStack />
                  Add A Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider">OR</div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              {" "}
              <MdOutlineMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <MdOutlineMail></MdOutlineMail> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
