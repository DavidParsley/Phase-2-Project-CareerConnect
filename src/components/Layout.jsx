import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout({search, setSearch, setOnlyAvailableJobs}) {
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} setOnlyAvailableJobs={setOnlyAvailableJobs}/>
      <div style={{minHeight:"90vh"}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
