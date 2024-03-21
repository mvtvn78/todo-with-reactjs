import React , { createContext, useState } from "react";
// EXPORT TodoContext
export const TodoContext = createContext();

function Todo({children}) {
    const [todo,setTodo] = useState({})
    const [array,setArray]= useState([])
    console.log("re-render To do",array);
    return (
        <TodoContext.Provider value={{todo,setTodo,array,setArray}}>
            <div className="todo">
                {children}
            </div>
       </TodoContext.Provider>
    )
}
export default Todo
