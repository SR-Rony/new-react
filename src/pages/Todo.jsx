
import Button from "../components/Button";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const Todo = () => {
  const [input,setInput] = useState()
  const [todo,setTodo] = useState([])
  const [updateId,setUpdateId] = useState()


  const handleChange =(e)=>{
    setInput(e.target.value);
    
  }

  const handleAdd =()=>{
    todo.push(input)
    let newTodo = [...todo]
    setTodo(newTodo)
    setInput('')
    
  }

  const handleDelete =(id)=>{
    todo.splice(id,1)
    let newTodo = [...todo]
    setTodo(newTodo)
    
  }

  const handleEdit =(item,id)=>{
    setInput(item)
    setUpdateId(id)
    
  }

  const handleUpdate =()=>{
    todo[updateId]=input
    let newTodo = [...todo]
    setTodo(newTodo)
    setInput('')

    
  }



  return (
    <div className='bg-black text-white h-screen flex justify-center'>
      <div className=' mx-auto'>
        <h1 className='mt-40 text-5xl border-b-2 pb-2 mb-10'>Welcome to my todo list</h1>
        <div className='flex gap-4 justify-between'>
            <input className='text-white ring-2 rounded-full w-full p-2' type="text" onChange={handleChange} value={input} />
            <Button click={handleAdd} className="ring-2 py-2 px-6 " text="ADD" />
            <Button click={handleUpdate} className="ring-2 py-2 px-6 " text="UP" />
        </div>
          {todo && todo.map((item,index)=>(
            <div key={index} className="mt-7 text-2xl">
              <div className='flex my-4 justify-between items-center border-b'>
                <p className=''>{item}</p>
                <div className="flex gap-2 items-center">
                  <Button click={()=>handleDelete(index)} className='ring-0 text-red-400' text={<FaTrashCan />} />
                  <Button click ={()=>handleEdit(item,index)} className='ring-0' text={<FaRegEdit />} />
                </div>
              </div>
            </div>
          ))}

      </div>
    </div>
  )
}

export default Todo