import React, {useContext} from 'react';
import Context from './context/context';

export default function TodoItem({title, id, completed}) {

  const {delleteTodo, checkedTodo} = useContext(Context);

  let liClass = 'todo';

  if (completed) {
    liClass += ' completed';
  }

  return (
    <li className={liClass}>
      <label>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange = {() => checkedTodo(id)}
        />
        <span>{title}</span>
        <i
          className="material-icons red-text"
          onClick={()=> {delleteTodo(id)}}   
        >delete</i>
      </label>
    </li>
  )
}