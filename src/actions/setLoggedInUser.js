export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";

export function setLoggedInUser(id) {
  window.sessionStorage.setItem("userid", id);
  return {
    type: SET_LOGGED_IN_USER,
    id,
  };
}
