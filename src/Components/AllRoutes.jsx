import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Login } from '../pages/Login'
import { SignUp } from '../pages/Signup'
 const AllRoutes = () => {
   return (
      <Routes>
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<SignUp />} />
      </Routes>
   )
}

export default AllRoutes