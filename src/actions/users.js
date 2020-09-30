export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";

export function setLoggedInUser(user) {
  return {
    type: SET_LOGGED_IN_USER,
    user,
  };
}

export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";

export function updateUserAnswers(vote) {
  return {
    type: UPDATE_USER_ANSWERS,
    vote,
  };
}

export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";

export function updateUserQuestions(qid) {
  return {
    type: UPDATE_USER_QUESTIONS,
    qid,
  };
}

export const UPDATE_USERS = "UPDATE_USERS";

export function updateUsers(vote) {
  return {
    type: UPDATE_USERS,
    vote,
  };
}

export const LOGOUT = "LOGOUT";

export function logout() {
  return {
    type: LOGOUT,
  };
}
