import React, {useContext} from 'react';
import Context from './context/context';

export default function TodoItem({title, id, completed}) {

  const {dispatch} = useContext(Context);

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
          onChange={()=> dispatch({
            type: 'TOGGLE',
            payloaded: id,
          })}
        />
        <span>{title}</span>
        <i
          className="material-icons red-text"
          onClick={()=> dispatch({
            type: 'DELLETE',
            payloaded: id,
          })}   
        >delete</i>
      </label>
    </li>
  )
}