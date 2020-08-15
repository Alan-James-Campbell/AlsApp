import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/NavigationHeader'
import Admin from './components/Admin'
// import MyBlogIndex from './components/MyBlog/MyBlogIndex'
import Home from './components/Home'

const TheRoutes = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        {/* <Route path="/my-blog" element={<MyBlogIndex/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default TheRoutes