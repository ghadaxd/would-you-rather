export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";

export function setLoggedInUser(user) {
  sessionStorage.setItem("loggedInUserId", user.id);
  sessionStorage.setItem("loggedInUsername", user.name);
  sessionStorage.setItem("loggedInUserAvatar", user.avatarURL);

  return {
    type: SET_LOGGED_IN_USER,
    id: user.id,
  };
}
