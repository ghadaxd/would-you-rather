import React from "react";
import SelectList from "../ui/selectList";
import { connect } from "react-redux";
import { initUsers } from "../../actions/initUsers";

class Login extends React.Component {
  componentDidMount() {
    this.props.dispatch(initUsers());
  }

  render() {
    return (
      <div className="login d-flex justify-content-center align-items-center flex-column">
        <div className="appName text-white">
          <div className="text-left">Would</div>
          <div className="text-center">You</div>
          <div className="text-right">Rather?</div>
        </div>

        <SelectList users={this.props.users} />
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
