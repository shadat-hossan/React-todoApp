import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import style from './Home.module.css';
// import NewTodo from './NewTodo';
import NewTodo2 from './NewTodo2';
import Todos from './Todos'



const Home = () => {

  const [todos, setTodo] = useState([])

  const handalAddTodos=(todo)=>{
    setTodo((prevTodos)=>{
      return[...prevTodos, { id: uuidv4(), todo }]
    })
   
  }
  const handalRemoveTodo = (id)=>{
    
    setTodo((prevTodo)=>{
      const filtertodo = prevTodo.filter((todo)=> todo.id !== id);
      return filtertodo;
    });
  }

  return (
    <div className={style.container}>
        <h1 className={style.titleColor}>Todo App</h1>
        <NewTodo2 onAddtTodo={handalAddTodos} />
       <Todos todos={todos} onRemoveTodo={handalRemoveTodo} />
    </div>
  )
}

export default Home;