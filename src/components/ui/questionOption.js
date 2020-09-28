import React from "react";
import { connect } from "react-redux";

class QuestionOption extends React.Component {
  render() {
    const { option, users, user } = this.props;

    const numOfVotes = option.votes.length;
    const numOfUsers = users.length;
    const votesPercentage = Math.round((numOfVotes / numOfUsers) * 100);
    const userChoice = option.votes.find((vote) => vote === user.id);

    return (
      <div>
        <div>
          {userChoice && (
            <img
              className="mr-2 text-success"
              alt="User choice"
              src="/assets/greenCheck.svg"
            />
          )}
          {option.text}
          {userChoice && (
            <small className="bg-blue text-white ml-2">Your choice :)</small>
          )}
        </div>
        <div className="text-right">
          <small>
            {numOfVotes} out of {numOfUsers} votes
          </small>
        </div>
        <div className="progress mb-4">
          <div
            className={`progress-bar w-${votesPercentage} bg-blue`}
            role="progressbar"
            aria-valuenow={votesPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {votesPercentage}%
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, loggedInUser }) {
  return {
    users,
    user: loggedInUser,
  };
}

export default connect(mapStateToProps)(QuestionOption);
