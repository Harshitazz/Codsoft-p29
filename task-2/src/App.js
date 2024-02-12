import "./App.css";
import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";

import AddTodo from "./components/AddTodo";

import {Switch,Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);

  const ondelete = (todo) => {
    console.log("hello", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const user = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, user]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  console.log(todos);
  return (
    <>
      <BrowserRouter >
        <Header title="my todoslist" searchbar={false} />

        <Switch>
          <Route
            exact
            path="/reactTodo"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <hr></hr>
                  <Todos todos={todos} ondelete={ondelete} />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <hr></hr>
                  <Todos todos={todos} ondelete={ondelete} />
                </>
              );
            }}
          ></Route>
          
        </Switch>
        
      </BrowserRouter>
    </>
  );
}

export default App;
