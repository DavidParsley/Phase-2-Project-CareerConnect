import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout({search, setSearch}) {
  return (
    <div>
      <Navbar search={search} setSearch={setSearch}/>
      <div style={{minHeight:"90vh"}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
