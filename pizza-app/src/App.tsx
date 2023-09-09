import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navabar';
import Body from './components/Body';
import Login from './components/Login'
import Signup from './components/Signup';

function App() {
  return (
  <>
  <Navbar />
    <Routes>
        
    
    <Route path='/' element={< Body />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />

  

   
    
    
        
    
   
  </Routes>
  </>
  )
}

export default App;
