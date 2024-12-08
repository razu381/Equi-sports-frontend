import React, { useContext, useState } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { Tooltip } from "react-tooltip";
import Spinner from "./Spinner";
import { ThemeContext } from "../Root";

function Header() {
  let { user, LogOut, loading } = useContext(AuthContext);
  let [isUserImageHovered, setUserImageHovered] = useState(false);
  let { isLight } = useContext(ThemeContext);
  console.log(user);
  let li = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-equipments">All Sports Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/add-equipment">Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/my-equipments">My Equipment List</NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar ${isLight ? "equi-light-mode" : "equi-dark-mode"}`}>
      <div className="navbar-start z-50">
        <div className="dropdown ">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow py-5"
          >
            {li}
          </ul>
        </div>
        <Link
          to="/"
          className="font-heading font-extrabold lg:text-3xl text-equi-primary-500 italic"
        >
          Equi Sports
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <div className="max-w-20">
            <Spinner />
          </div>
        ) : (
          <>
            {user ? (
              <>
                <img
                  src={user?.photoURL}
                  className="w-10 rounded-full mr-2"
                  data-tooltip-id="username-tooltip"
                  data-tooltip-place="left"
                  data-tooltip-content={user?.displayName}
                />
                <Tooltip id="username-tooltip" />
                <Link
                  onClick={LogOut}
                  className="btn bg-equi-primary-500 text-white py-2 px-4 hover:bg-equi-primary-800"
                >
                  Logout
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="btn bg-equi-primary-500 text-white hover:bg-equi-primary-800"
              >
                Login
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
