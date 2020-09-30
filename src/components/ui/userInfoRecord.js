import React from "react";
import UserInfoHeader from "./userInfoHeader";
import BlueCircle from "./blueCircle";

class UserInfoRecord extends React.Component {
  render() {
    const { user, rank } = this.props;

    const asked = user.questions.length;
    const answered = Object.keys(user.answers).length;
    const total = asked + answered;
    return (
      <div className="col-6 questionContainer text-center m-3 pb-2">
        <UserInfoHeader user={this.props.user} />

        <div className="row mt-2 mb-4">
          <BlueCircle type="Asked" num={asked} />
          <BlueCircle type="Answered" num={answered} />
          <BlueCircle type="Total" num={total} />
          <span className="separator"></span>
          <BlueCircle type="#Rank" num={rank} />
        </div>
      </div>
    );
  }
}

export default UserInfoRecord;
