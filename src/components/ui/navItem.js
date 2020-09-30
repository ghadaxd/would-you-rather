import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const { path, title } = props;
  return (
    <li className="nav-item">
      <NavLink exact to={path} className="nav-link" activeClassName="active">
        {title}
      </NavLink>
    </li>
  );
};

export default NavItem;
