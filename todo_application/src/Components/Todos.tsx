"use client";

import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";

export const Todos = () => {
  const { todos ,handleTodoDelete,toggleTodoAsCompleted} = useTodos();
  console.log(todos);
  let filteredTodos = todos;
   
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  
  if(todosFilter=='active'){
    filteredTodos= todos.filter((el)=>!el.completed)
  }else if(todosFilter=='completed'){
    filteredTodos= todos.filter((el)=>el.completed);
  }
 

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
