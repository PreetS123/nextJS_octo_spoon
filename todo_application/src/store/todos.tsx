"use client"
import { ReactNode, createContext, useContext, useState } from "react";


export type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

export type TodosContext= {
    todos:Todo[];
    handleAddTodo:(task:string)=>void;
    handleTodoDelete:(id:string)=>void;
    toggleTodoAsCompleted:(id:string)=>void;
}

export const todosContex = createContext<TodosContext | null>(null);

export const TodosProvider= ({children}:{children:ReactNode})=>{

    const [todos,setTodos]= useState<Todo[]>(()=>{
        const newTodos= localStorage.getItem("todos") || "[]";
        return JSON.parse(newTodos) as Todo[]
    });

    const handleAddTodo=(task:string)=>{
       setTodos((prev) => {
        const newTodos: Todo[]= [
            {
            id:Math.random().toString(),
            task,
            completed:false,
            createdAt:new Date()
           },
         ...prev
       ]
       localStorage.setItem("todos",JSON.stringify(newTodos))
       return newTodos;
    })
    }
    const handleTodoDelete=(id:string)=>{
         setTodos((prev)=>{
            const newTodos= prev.filter((el)=>(
                el.id!==id
            ))
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos;
         })
    }
    const toggleTodoAsCompleted=(id:string)=>{
       setTodos((prev)=>{
        const newTodos= prev.map((task)=>{
            if(task.id==id){
                return {...task,completed: !task.completed}
            }
            return task;
        })
        localStorage.setItem("todos",JSON.stringify(newTodos))
        return newTodos;
       })
    }

    return (
        <todosContex.Provider value={{todos,handleAddTodo,handleTodoDelete,toggleTodoAsCompleted}}>
            {children}
        </todosContex.Provider>
    )
}



export  function useTodos(){
    const todosContextValue = useContext(todosContex) 
    if(!todosContextValue){
        throw new Error('UseTodos used outside the provider')
    }
    return todosContextValue;
}