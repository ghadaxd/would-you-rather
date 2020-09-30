import React from "react";
import { connect } from "react-redux";

const CurrentUser = (props) => {
  const { name, avatarURL } = props.user;

  return (
    <div>
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

function mapStateToProps({ loggedInUser }) {
  return {
    user: loggedInUser,
  };
}

export default connect(mapStateToProps)(CurrentUser);
