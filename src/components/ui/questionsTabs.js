import React from "react";

const QuestionsTabs = (props) => {
  const { title, type, isActive } = props;
  return (
    <li className="nav-item col-6" role="presentation">
      <a
        className={`nav-link ${isActive && "active"}`}
        id={`${type}-tab`}
        data-toggle="tab"
        href={`#${type}`}
        role="tab"
        aria-controls={type}
        aria-selected={isActive}
      >
        {title}
      </a>
    </li>
  );
};

export default QuestionsTabs;
