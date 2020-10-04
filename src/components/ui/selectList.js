import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../actions/users";
import { Link } from "react-router-dom";

const SelectList = ({ users, path }) => {
  const [selectTitle, setSelectTitle] = useState("Select a user to continue");
  const [showList, setShowList] = useState(false);
  const visibleStyle = { height: "auto", opacity: 1, overflow: "visible" };
  const hiddenStyle = { opacity: 0, height: 0, overflow: "hidden" };
  const styleProps = useSpring(showList ? visibleStyle : hiddenStyle);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`selectBtn pl-3 pr-3 text-myGrey ${
          showList ? "arrowUp" : "arrowDown"
        }`}
        onClick={() => setShowList(!showList)}
      >
        {selectTitle}
      </button>
      <animated.ul
        className="selectListContainer list-group"
        style={styleProps}
      >
        {users.map((user) => (
          <Link
            key={user.id}
            className="list-group-item text-myGrey"
            onClick={() => {
              setSelectTitle(user.name);
              setShowList(!showList);
              dispatch(setLoggedInUser(user));
            }}
            to={path === "/" ? "/homepage" : path}
          >
            <img
              src={user.avatarURL}
              alt="User avatar"
              width="32"
              height="32"
              className="mr-3 p-1 bg-blue"
            />
            {user.name}
          </Link>
        ))}
      </animated.ul>
    </>
  );
};

export default SelectList;
