export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";

export function updateUserAnswers(vote) {
  return {
    type: UPDATE_USER_ANSWERS,
    vote,
  };
}
