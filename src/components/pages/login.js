import React from "react";
import { connect } from "react-redux";

import SelectList from "../ui/selectList";
import AppName from "../ui/appName";
import { initUsers } from "../../actions/initUsers";

class Login extends React.Component {
  componentDidMount() {
    this.props.users.length === 0 && this.props.dispatch(initUsers());
  }

  render() {
    return (
      <div className="login d-flex justify-content-center align-items-center flex-column">
        <AppName />
        <SelectList
          users={this.props.users}
          path={this.props.location.pathname}
        />
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
