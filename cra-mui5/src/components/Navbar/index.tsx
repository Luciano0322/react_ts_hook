import { useTheme } from '@emotion/react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme()
  return (
    <AppBar 
      position="fixed" 
      // color="primary" 
      // enableColorOnDark 
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          noWrap 
          component={Link}
          to="/"
          sx={{
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            flexGrow: 1,
          }}
        >
          WMP Server
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;