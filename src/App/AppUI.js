import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
  const {
    error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && new Array(4).fill(1).map((e, i) => <TodosLoading key={i} />)}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
        {
          searchedTodos.map(todo => (
            <TodoItem
              key = {todo.tarea}
              tarea = {todo.tarea}
              estado = {todo.completed}
              onComplete = {() => completeTodo(todo.tarea)}
              onDelete = {() => deleteTodo(todo.tarea)}
            />
          ))
        }
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}
export { AppUI };