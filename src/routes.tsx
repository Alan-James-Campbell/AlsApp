import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/NavigationHeader'
import Admin from './components/Admin'
// import MyBlogIndex from './components/MyBlog/MyBlogIndex'
import Home from './components/Home'
import Map from './components/MapDrawer'

const withNavHeader = (element: any) => (
  <div>
    <Navigation/>
    {element}
  </div>
)

const TheRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={withNavHeader(<Home/>)}/>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/map" element={withNavHeader(<Map/>)}/>

        {/* <Route path="/my-blog" element={<MyBlogIndex/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default TheRoutes