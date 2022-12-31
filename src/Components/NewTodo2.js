import React, { useState } from 'react'

import style from "./newTodo.module.css";

const NewTodo2 = (props) => {

    const [todo, setTodo] = useState({title : "", desc: ""})
    const {title, desc} = todo;

    const handaleChimg = (event)=>{
        const name = event.target.name;
        setTodo((oldTodo)=>{
            return{
                ...oldTodo, [name]:event.target.value
            }
        })
    }

    const handalSubmit = (event)=>{
        event.preventDefault();
        props.onAddtTodo(todo);
        setTodo({title: "", desc: ""});
    }

  return (
    <div>
      <form className={style.form} onSubmit={handalSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor="title">Title: </label>
          <input 
          type="text" 
          id="titlr" 
          name="title"
          value={title}
          onChange={handaleChimg}
          />
        </div>
        <div className={style["form-field"]}>
          <label htmlFor="desc">Description: </label>
          <textarea 
          type="text" 
          id="desc" 
          name="desc"
          value={desc}
          onChange={handaleChimg}
          />
        </div>
        <button>add Todo</button>
      </form>
        
    </div>
  )
}

export default NewTodo2