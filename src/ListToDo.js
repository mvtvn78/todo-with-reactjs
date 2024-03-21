import React, { useEffect } from "react";
import { useState,useContext } from "react";
import { TodoContext } from "./Todo";

function ListToDo() {
    const {todo,setTodo,array,setArray} = useContext(TodoContext)
    const [mode,setMode]= useState(false)
    console.log("re-render List To do",array);
    const handleCompleteIndex =(e) => {
       if (e.target.id != '')
        array[e.target.id].complete = true
        setMode(true)
    }
    useEffect( () => {
        if(mode)
            setArray(array.filter( (el) => el.complete !=true))
        setMode(false)
    },[mode])
    return (
       <div className="list">
        <h3>  LIST YOU WANT COMPLETE TODAY</h3>
        <ul>
      
           {array.map( (el,idx) =>  {
            return  <li key={idx}> <span id={idx}>{idx+1}. {el.title} </span> <button className="btn-complete" onClick={handleCompleteIndex} id={`${idx}`} ><svg  id={`${idx}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></button> </li>  
           } )}
           
        </ul>
       </div>
    )
}
export default ListToDo
