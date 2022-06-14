import { Box, Fab, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ScrollTop from '../components/Navbar/ScrollTop'
import { MdKeyboardArrowUp } from 'react-icons/md'

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar id="back-to-top-anchor" />
        <Outlet />
        <ScrollTop>
          <Fab 
            sx={{
              backdropFilter: `blur(25px)`, 
              bgcolor: (theme) => theme.palette.primary.light,
              '&:hover': {
                bgcolor: (theme) => theme.palette.secondary.light,
              }
            }}
            size="small" 
            aria-label="scroll back to top"
          >
            <MdKeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </Box>
    </Box>
  )
}

export default Layout