'use client';

import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";


export default function TodoList() {
    const [todos, setTodos] = useState([]);    
    console.log(todos);

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <section className="card-area">
              <h1>TODO App</h1>
              <TodoInput    
                    todos={todos}
                    setTodos={setTodos}
              />
              {/* Item은 하나의 Todo */}
              {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} /> 
                ))
              }
        </section>
    );
}


