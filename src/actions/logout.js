export const LOGOUT = "LOGOUT";

export function logout() {
  sessionStorage.removeItem("loggedInUsername");
  sessionStorage.removeItem("loggedInUserAvatar");
  sessionStorage.removeItem("loggedInUserId");

  return {
    type: LOGOUT,
  };
}
