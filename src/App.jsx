import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movies from './pages/Movies'
import Tv from './pages/Tv'

function App() {

  return (
   <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/tv' element={<Tv/>}/>
    </Routes>

   </Router>
   </>
  )
}

export default App
