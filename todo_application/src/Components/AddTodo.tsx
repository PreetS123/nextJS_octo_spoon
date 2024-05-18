"use client"
import { useTodos } from "@/store/todos";
import React, { FormEvent, useState } from "react";

export default function AddTodo() {
  const [todo, setTodo] = useState(String);
  const {handleAddTodo}= useTodos();

  const handleFormSubmit= (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add your todo"
          name=""
          id=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
