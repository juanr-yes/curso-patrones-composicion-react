// import './App.css';
import React from 'react';
import { useTodos } from "./useTodos";
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
import { TodoHeader } from "../TodoHeader";

function App() {
  const {
    error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, totalTodos, completedTodos, searchValue, setSearchValue, createTodo
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} loading={loading} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
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
          <TodoForm createTodo={createTodo} setOpenModal={setOpenModal}/>
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}
export default App;