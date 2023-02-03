import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState)
  };
  return(
    <div
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </div>
  );
}
export { CreateTodoButton };