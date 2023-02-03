import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    createTodo,
    setOpenModal
  } = React.useContext(TodoContext)
  const onCancel = () => {
    setOpenModal(false);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    createTodo(newTodoValue);
    setOpenModal(false);
  }
  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  }
  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label>
        Ingresa la tarea
      </label>
      <textarea placeholder="Ej: Hacer las compras" rows="3" value={newTodoValue} onChange={onChange}/>
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button-cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm }