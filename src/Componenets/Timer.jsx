import React, { useEffect } from "react";

const Timer = ({ dispatch, remainingSeconds }) => {
  useEffect(
    function () {
      setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );

  return <div className="timer">{remainingSeconds}</div>;
};

export default Timer;
