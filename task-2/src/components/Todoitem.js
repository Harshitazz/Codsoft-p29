import React from "react";
import './todo.css'
export default function Todoitem({ todo, ondelete }) {
  return (
    <div style={{ display: "inline-flex"}}>
      <div className="mb-3 form-check" style={{ margin: "10px" }}>
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          style={{ marginRight: "20px" }}
        />
        <h4>{todo.title}</h4>
        <div style={{ }}>
        <p classname ="desc" >{todo.desc}</p>

        </div>
      </div>

      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          ondelete(todo);
        }}
        style={{ position: "absolute", right: "25%" }}
      >
        <i class="fa-solid fa-trash"></i>
        
      </button>
    </div>
  );
}
