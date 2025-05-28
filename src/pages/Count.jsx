import React, { useState } from 'react'
import Button from '../components/Button'

const Count = () => {
    let [count,setCount]=useState(0)

    const handleIncres =()=>{
        setCount(count +=1)
        
    }

    const handleReset =()=>{
        setCount(count=0)
    }

    const handleDecres =()=>{
        setCount(count -=1)
    }


  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
        <h1 className='text-2xl my-8'>Count = {count}</h1>
        <div className='flex gap-4'>
            <Button className='ring ring-blue-600 py-1 px-4 hover:bg-blue-600 hover:text-white duration-100' click={handleIncres} text='Incres +'/>
            <Button className='ring ring-blue-600 py-1 px-4 hover:bg-blue-600 hover:text-white duration-100' click={handleReset} text='reset 0'/>
            <Button className='ring ring-blue-600 py-1 px-4 hover:bg-blue-600 hover:text-white duration-100' click={handleDecres} text='Decres -'/>
        </div>
    </div>
  )
}

export default Count