import React from 'react'
import Navber from '../main/Navber'
import { Toaster } from 'react-hot-toast'


function Layout() {
  return (
    <div>
      <Toaster /> 
      <Navber />
    </div>
  )
}

export default Layout