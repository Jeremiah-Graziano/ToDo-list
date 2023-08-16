import React from 'react'
import  Todo  from './todo.js'
export default function NewNote( {todos, completed, removeItem} ) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo = {todo} completed = {completed} removeItem ={removeItem} />
    })
  )
};