import React, { useEffect } from "react";

const Timer = ({ dispatch, remainingSeconds }) => {
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <div className="timer">{remainingSeconds}</div>;
};

export default Timer;
