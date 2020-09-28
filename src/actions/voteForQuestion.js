import { _saveQuestionAnswer } from "../utils/_DATA";
import { updateQuestions } from "./updateQuestions";
import { updateUsers } from "./updateUsers";
import { updateUserAnswers } from "./updateUserAnswers";

export function voteForQuestion(vote) {
  return (dispatch) => {
    return _saveQuestionAnswer(vote).then((data) => {
      dispatch(updateQuestions(vote));
      dispatch(updateUsers(vote));
      dispatch(updateUserAnswers(vote));
    });
  };
}
