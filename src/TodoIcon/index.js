import React from "react";
import "./TodoIcon.css";
import { BsCheckLg as CheckIcon } from "react-icons/bs";
import { MdDelete as DeleteIcon } from "react-icons/md";

const iconTypes = {
  "check": color => (<CheckIcon className="Icon-svg Icon-svg--check" fill={color}/>),
  "delete": color => (<DeleteIcon className="Icon-svg Icon-svg--delete" fill={color}/>),
}

function TodoIcon({type, color = 'gray', onClick}) {
  return (
    <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };