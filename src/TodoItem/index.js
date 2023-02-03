import React from 'react';
import { CompleteIcon } from "../CompleteIcon";
import { DeleteIcon } from "../DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return(
    <li className={`TodoItem ${ props.estado && 'TodoItem-active' }`}>
      <CompleteIcon
        completed={props.estado}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-p ${ props.estado && 'TodoItem-p--complete' }`}>
        {props.tarea}
      </p>
      <DeleteIcon
        completed={props.estado}
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };