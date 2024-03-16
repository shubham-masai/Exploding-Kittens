import React from 'react'
import { Routes, Route } from "react-router-dom"
import Game from '../pages/Game'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/Signup'
import PrivateRoute from './PrivateRoute'
import LeaderBoard from '../pages/LeaderBoard'
const AllRoutes = () => {
   return (
      <Routes>
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<SignUp />} />
         <Route path='/leaderboard' element={<LeaderBoard />} />
         <Route path='/' element={<PrivateRoute> <Game /> </PrivateRoute>} />
      </Routes>
   )
}

export default AllRoutes