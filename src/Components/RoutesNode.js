import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Students from './Students'
import Contact from './Contact'

const RoutesNode = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Students' element={<Students/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default RoutesNode
