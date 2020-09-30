export const ADD_QUESTION = "ADD_QUESTION";

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";

export function updateQuestions(vote) {
  return {
    type: UPDATE_QUESTIONS,
    vote,
  };
}
