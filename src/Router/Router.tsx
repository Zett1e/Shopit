import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Shop from '../Pages/Shop/Shop'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
      </Routes>
    </div>
  )
}

export default Router