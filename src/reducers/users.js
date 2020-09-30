import { RECEIVE_USERS, UPDATE_USERS } from "../actions/users";

export default function users(state = [], action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return [...state, ...action.users];
    case UPDATE_USERS:
      const { authedUser, qid, answer } = action.vote;
      const updated_users = state.map((user) => {
        if (user.id === authedUser) {
          return {
            ...user,
            answers: {
              ...user.answers,
              [qid]: answer,
            },
          };
        }
        return user;
      });
      return updated_users;
    default:
      return state;
  }
}
