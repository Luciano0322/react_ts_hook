import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = ({dark, darkFn}: {dark:boolean; darkFn: () => void}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar dark={dark} darkFn={darkFn} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout