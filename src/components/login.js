import React, { useState } from "react";
import SelectList from "../components/selectList";
import { _getUsers } from "../_DATA";

const Login = () => {
  const [users, setUsers] = useState([]);

  _getUsers().then((data) => {
    const usersObj = data;

    let usersArr = [];
    let iterator = 0;
    for (const key in usersObj) {
      usersArr[iterator] = usersObj[key];
      iterator++;
    }

    setUsers(usersArr);
  });

  return (
    <div className="login d-flex justify-content-center align-items-center flex-column">
      <div className="appName text-white">
        <div className="text-left">Would</div>
        <div className="text-center">You</div>
        <div className="text-right">Rather?</div>
      </div>

      <SelectList users={users} />
    </div>
  );
};

export default Login;
