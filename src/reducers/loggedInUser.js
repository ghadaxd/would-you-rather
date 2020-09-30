import {
  SET_LOGGED_IN_USER,
  UPDATE_USER_ANSWERS,
  UPDATE_USER_QUESTIONS,
} from "../actions/users";

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
    case UPDATE_USER_QUESTIONS:
      return {
        ...state,
        questions: [...state.questions, action.qid],
      };
    default:
      return state;
  }
}
