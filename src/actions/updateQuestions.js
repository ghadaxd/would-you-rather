export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

export function updateQuestions(vote) {
  return {
    type: UPDATE_QUESTIONS,
    vote,
  };
}
