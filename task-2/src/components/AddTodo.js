import React, { useState } from "react";
import './todo.css';
export default function AddTodo({addTodo}) {
  const [title,setTitle]= useState("");
  const [desc,setDesc]= useState("");
  const submit= (e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("title or description cannot be blank")
    }
    else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
    }
  }
  return (
    <div className="container"  >
      <h2 style={{textDecoration:"underline" ,fontFamily:"monospace",fontStyle:'normal'}} className="my-3">ADD New ToDo</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="title" className="form-label">
            TODO Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary btn-sm btn-success">
          ADD TODO
        </button>
      </form>
    </div>
  );
}
