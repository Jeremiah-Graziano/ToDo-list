import React from "react"

export default function Todo( {todo, completed, removeItem} ){
  function handleTodo() {
    completed(todo.id);
  };

  function pop(){
    removeItem(todo.id);
  };

return (
  <li>
    <input type="checkbox" checked = {todo.complete} onChange = {handleTodo} />
  {todo.name}
  <button onClick={pop} id="clear-item">X</button>
  </li>
  )

    
}