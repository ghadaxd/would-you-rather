export const LOGOUT = "LOGOUT";

export function logout() {
  sessionStorage.removeItem("loggedInUserId");

  return {
    type: LOGOUT,
  };
}
