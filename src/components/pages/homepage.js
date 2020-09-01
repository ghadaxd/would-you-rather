import React from "react";
import { connect } from "react-redux";

class Homepage extends React.Component {
  state = {
    userid: null,
  };

  componentDidMount() {
    const { id } = this.props;

    this.setState({
      userid: id,
    });
  }

  render() {
    return (
      <div className="fluid-container">
        {/* TODO: Nav bar, that has three links */}
        {/* TODO: User's info component */}
        {/* TODO: Logout button */}
        {/* TODO: Questions container */}

        {/* <div>{this.state.userid}</div> */}
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser }) {
  return {
    id: loggedInUser || window.sessionStorage.getItem("userid"),
  };
}

export default connect(mapStateToProps)(Homepage);
