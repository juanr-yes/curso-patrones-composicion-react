import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  };
  return (
    <React.StrictMode>
      <form>
        
      <label className="searchLabel">
        Buscador de tareas:
      </label>
      <input
        placeholder = "Busca una tarea"
        className = "TodoSearch"
        value = {searchValue}
        onChange = {onSearchValueChange}
      />
      </form>
    </React.StrictMode>
  );
}
export { TodoSearch };