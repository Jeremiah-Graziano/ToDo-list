import "./App.css";
import React, { useRef, useState } from "react";
import NewNote from "./NewNote.js";
import { v4 as uuidv4 } from "uuid";
export default App;


function App() {
  const [todos, setTodo] = useState([]);
  const textValue = useRef();
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const current = new Date();
  const date = `${months[current.getMonth()]},  ${current.getDate()}th,  ${current.getFullYear()}`;

  function completed(id) {
    const todoCopy = [...todos]
    const todo = todoCopy.find (todo => todo.id === id) 
      todo.complete = !todo.complete
      setTodo(todoCopy)
    }

  function handleNote(e) {
    const newTodo = textValue.current.value;
    if (newTodo === "") {
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      setTodo((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), name: newTodo.trim(), complete: false }];
      });
      textValue.current.value = null;
    };
  }

  function clearTodo() {
    setTodo([]);
  }

  function removeItem(id){
  const todoCopy = [...todos];
  const removed = todoCopy.filter(todo => todo.id !== id);
  setTodo(removed);
  }

  function Tasks() {
    if (todos.length <= 0) {
      return <p id="task-summary">You have no tasks.</p>
    };
  };

  return (
    <div>
      <h3>todo list</h3>
      <h4>today</h4>
      <h2>
        {date}
      </h2>
      {/* <p id="task-summary">You have no tasks.</p> */}
      <Tasks />
      <ul id="tasks">
        <NewNote todos={todos} completed = {completed} removeItem ={removeItem}/>
      </ul>
      <hr />
      <textarea
        ref={textValue}
        onKeyDown={handleNote}
        rows={3}
        placeholder="Add Item"
        defaultValue={""}
      />
      <button className="clearList" onClick={clearTodo}>clear list</button>
      {/* <button className="clearList" onClick={handleNote}>add to list</button> */}
    </div>
  );
}




