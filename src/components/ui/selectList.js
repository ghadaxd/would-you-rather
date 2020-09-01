import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../actions/setLoggedInUser";
import { Link } from "react-router-dom";

const SelectList = (props) => {
  const [selectTitle, setSelectTitle] = useState("Select a user to continue");
  const [showList, setShowList] = useState(false);
  const visibleStyle = { height: "auto", opacity: 1, overflow: "visible" };
  const hiddenStyle = { opacity: 0, height: 0, overflow: "hidden" };
  const styleProps = useSpring(showList ? visibleStyle : hiddenStyle);
  const { users } = props;
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`selectBtn pl-3 pr-3 ${showList ? "arrowUp" : "arrowDown"}`}
        onClick={() => setShowList(!showList)}
      >
        {selectTitle}
      </button>
      <animated.ul
        className="selectListContainer list-group"
        style={styleProps}
      >
        {users.map((user, index) => (
          <Link
            key={index}
            className="list-group-item"
            onClick={() => {
              setSelectTitle(user.name);
              setShowList(!showList);
              dispatch(setLoggedInUser(user.id));
            }}
            to="/homepage"
          >
            <img
              src={user.avatarURL}
              alt="User avatar"
              width="32"
              height="32"
              className="mr-3"
            />
            {user.name}
          </Link>
        ))}
      </animated.ul>
    </>
  );
};

export default SelectList;
