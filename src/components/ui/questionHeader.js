import React from "react";
import { connect } from "react-redux";

const questionHeader = (props) => {
  const { name, avatarURL } = props.users.find(
    (user) => user.id === props.author
  );

  return (
    <div className="userContainer pb-2">
      <img
        src={avatarURL}
        alt="User avatar"
        width="52"
        height="52"
        className="mr-3 p-1 userAvatar"
      />
      {name} say:
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(questionHeader);
