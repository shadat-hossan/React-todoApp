import React from 'react';

import style from './todos.module.css'
import Todo from './Todo';

const Todos = (props) => {
  return (
    <article className={style.todos}>
        {props.todos.map((todo)=>(
            <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveTodo={props.onRemoveTodo} />
        ))}
    </article>
  )
}

export default Todos