import { _getQuestions } from "../utils/_DATA";
import { receiveQuestions } from "./receiveQuestions";

export function getQuestions() {
  return (dispatch) => {
    return _getQuestions().then((data) => {
      const questionsObj = data;

      let questionsArr = [];
      let iterator = 0;
      for (const key in questionsObj) {
        questionsArr[iterator] = questionsObj[key];
        iterator++;
      }
      dispatch(receiveQuestions(questionsArr));
    });
  };
}
