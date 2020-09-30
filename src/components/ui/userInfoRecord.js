import React from "react";
import UserInfoHeader from "./userInfoHeader";
import BlueCircle from "./blueCircle";

const UserInfoRecord = (props) => {
  const { user, rank } = props;

  const asked = user.questions.length;
  const answered = Object.keys(user.answers).length;
  const total = asked + answered;
  return (
    <div className="col-6 questionContainer text-center m-3 pb-2">
      <UserInfoHeader user={user} />

      <div className="row mt-2 mb-4">
        <BlueCircle type="Asked" num={asked} />
        <BlueCircle type="Answered" num={answered} />
        <BlueCircle type="Total" num={total} />
        <span className="separator"></span>
        <BlueCircle type="#Rank" num={rank} />
      </div>
    </div>
  );
};

export default UserInfoRecord;
