import {createContext,use,useContext} from "react"


export const TodoContext =createContext({
    todos:[
        {
            id:1,
            todo: "ToDo Mess",
            completed:false,


        },
       
    ],
    addTodo: (todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})


export const UseTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider