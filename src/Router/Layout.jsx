import React from 'react'
import Header from '../Components/Header/Header'
import ProgressBar from '../Components/ProgressBar/ProgressBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header/>
      <ProgressBar/>
      <Outlet/>
    </div>
  )
}

export default Layout
