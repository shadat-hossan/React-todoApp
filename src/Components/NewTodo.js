import React from "react";

import style from "./newTodo.module.css";
import { useFormik } from "formik";

const NewTodo = () => {

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    onSubmit: (values, {resetForm})=>{
      console.log(values)
      resetForm({values : ""})
    }
  })

  
 

  return (
    <div>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor="title">Title: </label>
          <input 
          type="text" 
          id="titlr" 
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          />
        </div>
        <div className={style["form-field"]}>
          <label htmlFor="desc">Description: </label>
          <textarea 
          type="text" 
          id="desc" 
          name="desc"
          value={formik.values.desc}
          onChange={formik.handleChange}
          />
        </div>
        <button type="submit">add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
