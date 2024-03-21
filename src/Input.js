import { useContext } from "react";
import React from "react";
import { TodoContext } from "./Todo";
function Input({label,...inputProps}) {
    const  {todo,setTodo,array,setArray}= useContext(TodoContext);
    console.log("re-render Input",array);
    const handleInputChange = (e) => {
       setTodo({
        title : e.target.value,
        complete: false
       })
    }
    return (
        <div className="form-input">
            <label>{label}</label>
            <input  {...inputProps} value={todo.title || '' } onChange={handleInputChange}/>
        </div>
    )
}
export default Input
