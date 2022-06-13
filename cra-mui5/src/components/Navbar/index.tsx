import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { BiSun, BiMoon } from 'react-icons/bi';

const Navbar = ({ dark, darkFn }: { dark: boolean; darkFn: () => void }) => {
  return (
    <AppBar
      position="fixed"
      // enableColorOnDark 
      color="transparent"
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: `blur(25px)`,
      }}
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
          Mui 5 Demo
        </Typography>
        <IconButton onClick={darkFn}>
          {dark ? <BiSun /> : <BiMoon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;