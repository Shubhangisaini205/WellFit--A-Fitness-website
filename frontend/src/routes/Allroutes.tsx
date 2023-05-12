import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'

function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
    </Routes>
  )
}

export default Allroutes