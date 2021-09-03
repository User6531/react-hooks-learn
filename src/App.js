import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import Context from './context/context';

export default function App() {

  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');


  useEffect (()=> {
    const temp = localStorage.getItem('todos') || [];
    setTodos(JSON.parse(temp));
  }, [])

  useEffect (()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodo = e => {
    if (e.key === 'Enter') {
      setTodos([
        ...todos, {
          id: Math.floor(Math.random()) + Date.now(),
          title: todoTitle,
          completed: false,
        }
      ])
      setTodoTitle('');
    }
  } 
  const delleteTodo = (id) => {
    let newTodos = [];
    todos.map(item=> {
      if (item.id !== id) {
        newTodos.push(item);
      }
      return item;
    });
    setTodos(newTodos);
  }
  const checkedTodo = (id) => {
    setTodos(todos.map(item=>{
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item;
    }));
  };
 
  return (
    <Context.Provider value={{delleteTodo, checkedTodo}}>
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input type="text" 
              value={todoTitle}
              onChange = {(event) => setTodoTitle(event.target.value)}
              onKeyPress = {addTodo}
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}