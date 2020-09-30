import { _saveQuestionAnswer } from "../utils/_DATA";
import { updateQuestions } from "./questions";
import { updateUsers, updateUserAnswers } from "./users";

export function voteForQuestion(vote) {
  return (dispatch) => {
    return _saveQuestionAnswer(vote).then((data) => {
      dispatch(updateQuestions(vote));
      dispatch(updateUsers(vote));
      dispatch(updateUserAnswers(vote));
    });
  };
}
