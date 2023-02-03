import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider (props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  let completedTodos = [];
  let totalTodos = [];
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
    completedTodos = todos.filter(todo => !!todo.completed).length;
    totalTodos = todos.length;
  } else {
    searchedTodos = todos.filter(todo => todo.tarea.toLowerCase().includes(searchValue.toLowerCase()))
    completedTodos = searchedTodos.filter(todo => !!todo.completed).length;
    totalTodos = searchedTodos.length;
  }
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === text)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.tarea === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const createTodo = (tarea) => {
    const newTodos = [...todos];
    newTodos.push({
      tarea: tarea,
      completed: false
    });
    saveTodos(newTodos);
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      createTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };