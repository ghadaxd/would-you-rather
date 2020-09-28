import { RECEIVE_QUESTIONS } from "../actions/receiveQuestions";
import { UPDATE_QUESTIONS } from "../actions/updateQuestions";
import { ADD_QUESTION } from "../actions/addQuestion";

export default function questions(state = [], action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return [...state, ...action.questions];
    case UPDATE_QUESTIONS:
      const { authedUser, qid, answer } = action.vote;
      const updated_questions = state.map((question) => {
        if (question.id === qid) {
          return {
            ...question,
            [answer]: {
              ...question[answer],
              votes: question[answer].votes.concat([authedUser]),
            },
          };
        }
        return question;
      });
      return updated_questions;
    case ADD_QUESTION:
      return [...state, action.question];
    default:
      return state;
  }
}
