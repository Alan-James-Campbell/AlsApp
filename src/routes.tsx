import React from 'react'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyBlogIndex from './components/MyBlog/MyBlogIndex'

const TheRoutes = () => {
  return (
    <BrowserRouter>
      <Main/>
      <Routes>
        <Route path="/my-blog" element={<MyBlogIndex/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default TheRoutes