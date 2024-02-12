import React from "react";
import Todoitem from "./Todoitem";
import './todo.css'

export default function Todos(props) {
  const mystyle = {
    color: "black",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    padding: "5px",
    width:"20%",
    margin:'auto'
  };
  return (
    <div className="container" >
      <h2 className=" my-4" style={{ textDecoration: "underline" ,display:'block',textAlign:'center'}}>
        To-Do List
      </h2>
      {props.todos.length === 0 ? (
        <h5 style={mystyle}>No more todos</h5>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <Todoitem todo={todo} key={todo.sno} ondelete={props.ondelete} />
              <hr />
            </>
          );
        })
      )}
    </div>
  );
}
