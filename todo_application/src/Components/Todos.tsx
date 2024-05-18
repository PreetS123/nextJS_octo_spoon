"use client";

import { useTodos } from "@/store/todos";

export const Todos = () => {
  const { todos ,handleTodoDelete,toggleTodoAsCompleted} = useTodos();
  console.log(todos);
  let filteredTodos = todos;

 

  return (
    <>
      <ul>
        {filteredTodos.length > 0 ? (
          <>
            {filteredTodos?.map((el, i) => (
              <div key={el.id}>
                <li>
                <input
                  type="checkbox"
                  name=""
                  id={`todo-${el.id}`}
                  checked={el.completed}
                  onChange={() => toggleTodoAsCompleted(el.id)}
                />
                <label htmlFor={`todo-${el.id}`}>{el.task}</label>
                {
                    el.completed && (
                        <button type="button" onClick={()=>handleTodoDelete(el.id)}>Delete</button>
                    )
                }
                </li>
              </div>
            ))}
          </>
        ) : (
          <h1 style={{ textAlign: "center" }}>No data found</h1>
        )}
      </ul>
    </>
  );
};
