export const UPDATE_USERS = "UPDATE_USERS";

export function updateUsers(vote) {
  return {
    type: UPDATE_USERS,
    vote,
  };
}
