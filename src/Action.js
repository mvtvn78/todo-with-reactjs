import React, { useContext } from "react";
import Input from "./Input";
import  { TodoContext } from "./Todo";
import Modal from "./Modal";
import useModal from "./useModal";
function Action() {
    const  {todo,setTodo,array,setArray}= useContext(TodoContext);
    //Modal  Hook Custom
    const {isShowing, toggle} = useModal();
    console.log("re-render action",array);
    const handleButtonClick = () =>
    {
        // Check Empty Object
        if(Object.keys(todo).length === 0)
        {
            return
        }
        if ( array.length >=7) 
        {   
            setTodo({})
            toggle()
            return
        }
        // Add into Array
        setArray(prev => [...prev,todo])
        // Re-render ListToDo and setDefault state
        setTodo({})
    }
    return (
        <div className="action">
            <Input
            label="Nhập việc bạn cầm làm" 
            type="text"
            placeholder="something what you to do"
            />
            <button className="btn-Add" type="button" onClick={handleButtonClick}>ADD </button>
            <Modal
            isShowing={isShowing}
            hide={toggle}
          />
        </div>
    )
}
export default Action
