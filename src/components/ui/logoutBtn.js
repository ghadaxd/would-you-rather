import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../actions/users";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
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
  );
};

export default LogoutBtn;
