import React from "react";

const CurrentUser = () => {
  const username = sessionStorage.getItem("loggedInUsername");
  const userAvatar = sessionStorage.getItem("loggedInUserAvatar");

  return (
    <div>
      <img
        src={userAvatar}
        alt="User avatar"
        width="32"
        height="32"
        className="mr-3"
      />
      {username}
    </div>
  );
};

export default CurrentUser;
