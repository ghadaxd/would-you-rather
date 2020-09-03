import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import CurrentUser from "../ui/currentUser";
import { logout } from "../../actions/logout";

const Navbar = (props) => {
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-light pl-5">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse row justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav col-10">
          <li className="nav-item">
            <NavLink
              exact
              to="/homepage"
              className="nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Add Question
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
        </ul>
        <CurrentUser />
        <Link
          onClick={() => {
            dispatch(logout());
          }}
          to="/"
        >
          <img
            src="/assets/logout.svg"
            alt="Logout icon"
            width="26"
            height="26"
            className="mr-3"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
