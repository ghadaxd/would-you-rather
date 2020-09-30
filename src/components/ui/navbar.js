import React from "react";

import CurrentUser from "../ui/currentUser";
import LogoutBtn from "./logoutBtn";
import NavItem from "./navItem";

const Navbar = () => {
  const NavItems = [
    { path: "/homepage", title: "Home" },
    { path: "/add", title: "Add Question" },
    { path: "/leaderboard", title: "Leader Board" },
  ];
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
          {NavItems.map((navitem, index) => (
            <NavItem key={index} path={navitem.path} title={navitem.title} />
          ))}
        </ul>

        <CurrentUser />
        <LogoutBtn />
      </div>
    </nav>
  );
};

export default Navbar;
