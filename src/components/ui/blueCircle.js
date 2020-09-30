import React from "react";

const blueCircle = (props) => {
  const { type, num } = props;
  return (
    <div className="col-3">
      <span>{type}</span>
      <div className="numsContainer d-flex justify-content-center align-items-center rounded-circle bg-blue text-white">
        {num}
      </div>
    </div>
  );
};

export default blueCircle;
