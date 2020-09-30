import React from "react";

const userInfoHeader = (props) => {
  const { name, avatarURL } = props.user;
  return (
    <div className="bg-blue rounded-top p-2">
      <img
        src={avatarURL}
        alt="User avatar"
        width="32"
        height="32"
        className="mr-3"
      />
      <span className="text-white">{name}</span>
    </div>
  );
};

export default userInfoHeader;
