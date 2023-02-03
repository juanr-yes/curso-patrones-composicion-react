import React from "react";
import { TodoIcon } from "../TodoIcon";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "white" : "gray"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon }