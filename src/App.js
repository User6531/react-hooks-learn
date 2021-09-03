import React, {useEffect, useReducer} from 'react';
import TodoList from './TodoList';
import Context from './context/context';
import reducer from './reducer/reducer';

export default function App() {

  const InitialState =  {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    todoTitle: '',
  };
  const [{todos, todoTitle}, dispatch] = useReducer(reducer, InitialState);

  useEffect (()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodo = e => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'ADD',
        payloaded: todoTitle,
      })
      dispatch({
        type: 'ADD_TITLE',
        payloaded: '',
      })
    }
  } 
  return (
    <Context.Provider value={{dispatch}}>
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input type="text" 
              value={todoTitle}
              onChange = {(event) => dispatch({
                type: 'ADD_TITLE',
                payloaded: event.target.value,
              })}
              onKeyPress = {addTodo}
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}