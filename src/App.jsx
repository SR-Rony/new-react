
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
// import Navbar from './components/Navbar'
import About from './pages/About'
import Todo from './pages/Todo'
import Error from './pages/Error'
import Count from './pages/Count'
import LoginPage from './pages/Login'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import Navbar from './components/Navbar'


function App() {

  return (
    <>
    <Navbar/>
      <Routes path='/' element={<Layout/>} >
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/chat' element={<Dashboard/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/count' element={<Count/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
