import React from 'react'
import { Route, Routes } from 'react-router'
import App from '../App'

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<div>About</div>}/>
    </Routes>
  )
}

export default RoutePage