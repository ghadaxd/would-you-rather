import React from "react";
import { connect } from "react-redux";

import Navbar from "../ui/navbar";
import UserInfoRecord from "../ui/userInfoRecord";

const Leaderboard = (props) => {
  return (
    <div className="fluid-container">
      <Navbar />
      <div className="container questionContainer mt-5 p-5">
        <div className="row bg-blue text-white d-flex justify-content-center">
          <h2>#WhoIsTheBest ...</h2>
        </div>

        <div className="row d-flex justify-content-center no-gutters">
          {props.users.map((user, index) => (
            <UserInfoRecord key={user.id} rank={index + 1} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

const sortUsers = (users) => {
  return users.sort(compare);
};

const compare = (a, b) => {
  const userAtotal = a.questions.length + Object.keys(a.answers).length;
  const userBtotal = b.questions.length + Object.keys(b.answers).length;

  let comparison = 0;
  if (userAtotal < userBtotal) {
    comparison = 1;
  } else if (userAtotal > userBtotal) {
    comparison = -1;
  }
  return comparison;
};

function mapStateToProps({ users }) {
  const sortedUsers = sortUsers(users);
  return {
    users: sortedUsers,
  };
}

export default connect(mapStateToProps)(Leaderboard);
