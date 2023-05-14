import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import Nutriton from '../pages/Nutrition'
import ExerciseInputForm from '../pages/ExerciseInputForm'
import Exercise from '../pages/Exercise'
import Plan from '../pages/Plan'
import Yoga from '../components/Yoga'
import PrivateRoute from './PrivateRoute'

function Allroutes() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/' element={<Home />} />
      <Route path='/yoga' element={<Yoga />} />
      <Route path='/blogs' element={<PrivateRoute><Blogs /></PrivateRoute>} />
      <Route path="/nutrition" element={<Nutriton />} />
      <Route path='/customexercise' element={<ExerciseInputForm />} />
      <Route path='/exercise' element={<Exercise />} />
      <Route path='/plan' element={<Plan />} />
    </Routes>
  )
}

export default Allroutes