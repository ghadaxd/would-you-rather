import { SET_LOGGED_IN_USER } from "../actions/setLoggedInUser";
import { UPDATE_USER_ANSWERS } from "../actions/updateUserAnswers";

export default function loggedInUser(state = null, action) {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return action.user;
    case UPDATE_USER_ANSWERS:
      const { qid, answer } = action.vote;
      return {
        ...state,
        answers: {
          ...state.answers,
          [qid]: answer,
        },
      };
    default:
      return state;
  }
}
