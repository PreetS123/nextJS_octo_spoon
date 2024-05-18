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
}

export const todosContex = createContext<TodosContext | null>(null);

export const TodosProvider= ({children}:{children:ReactNode})=>{

    const [todos,setTodos]= useState<Todo[]>([]);

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
       return newTodos;
    })
    }

    return (
        <todosContex.Provider value={{todos,handleAddTodo}}>
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