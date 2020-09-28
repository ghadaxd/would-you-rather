import { _saveQuestion } from "../utils/_DATA";

// import { updateQuestions } from "./updateQuestions";
// import { updateUsers } from "./updateUsers";
// import { updateUserAnswers } from "./updateUserAnswers";

import { addQuestion } from "./addQuestion";
import { updateUserQuestions } from "./updateUserQuestions";

export function addNewPoll(question) {
  return (dispatch) => {
    return _saveQuestion(question).then((data) => {
      const newAddedPoll = data;
      if (newAddedPoll) {
        dispatch(addQuestion(newAddedPoll));
        dispatch(updateUserQuestions(newAddedPoll.id));
      }
      //   dispatch(updateUsers(vote));
      //   dispatch(updateUserAnswers(vote));
    });
  };
}
