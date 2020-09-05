export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";

export function setLoggedInUser(user) {
  // Saving user's id in a session, so that it will not be lost when the page reload.
  sessionStorage.setItem("loggedInUserId", user.id);

  return {
    type: SET_LOGGED_IN_USER,
    user,
  };
}
