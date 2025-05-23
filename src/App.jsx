import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
// import Navbar from './components/Navbar'
import About from './pages/About'
import Todo from './pages/Todo'
import Error from './pages/Error'


function App() {

  return (
    <>
      <Routes path >
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
