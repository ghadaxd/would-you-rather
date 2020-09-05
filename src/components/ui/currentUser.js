import React from "react";
import { connect } from "react-redux";
import { _getUsers } from "../../utils/_DATA";
import { setLoggedInUser } from "../../actions/setLoggedInUser";

class CurrentUser extends React.Component {
  getUser = async (id) => {
    const data = await _getUsers();
    this.props.dispatch(setLoggedInUser(data[id]));
    return data[id];
  };

  render() {
    // Since the store get cleared on page reload, we need to check if the state in the store
    // has data or not, if not, then using user's id, we will get the user data and set the store state.
    const { name, avatarURL } =
      this.props.user !== null
        ? this.props.user
        : this.getUser(sessionStorage.getItem("loggedInUserId"));
    return (
      <div>
        <img
          src={avatarURL}
          alt="User avatar"
          width="32"
          height="32"
          className="mr-3"
        />
        {name}
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser }) {
  return {
    user: loggedInUser,
  };
}

export default connect(mapStateToProps)(CurrentUser);
