import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'


function Allroutes() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>     
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
    </Routes>
  )
}

export default Allroutes