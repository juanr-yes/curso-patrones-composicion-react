import React from "react";
import "./EmptyTodos.css";

function EmptyTodos() {
  return (
    <li className="EmptyTodoItem">
      No se han encontrado tareas, crea una pulsando el <span>boton azul</span>.
    </li>
  );
}

export { EmptyTodos };