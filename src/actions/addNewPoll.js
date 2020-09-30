import { _saveQuestion } from "../utils/_DATA";

import { addQuestion } from "./questions";
import { updateUserQuestions } from "./users";

export function addNewPoll(question) {
  return (dispatch) => {
    return _saveQuestion(question).then((data) => {
      const newAddedPoll = data;
      if (newAddedPoll) {
        dispatch(addQuestion(newAddedPoll));
        dispatch(updateUserQuestions(newAddedPoll.id));
      }
    });
  };
}
