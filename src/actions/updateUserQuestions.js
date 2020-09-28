export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";

export function updateUserQuestions(qid) {
  return {
    type: UPDATE_USER_QUESTIONS,
    qid,
  };
}
