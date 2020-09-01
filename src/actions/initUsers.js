import { _getUsers } from "../utils/_DATA";
import { receiveUsers } from "./receiveUsers";

export function initUsers() {
  return (dispatch) => {
    return _getUsers().then((data) => {
      const usersObj = data;

      let usersArr = [];
      let iterator = 0;
      for (const key in usersObj) {
        usersArr[iterator] = usersObj[key];
        iterator++;
      }
      dispatch(receiveUsers(usersArr));
    });
  };
}
