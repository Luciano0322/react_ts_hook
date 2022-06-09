import { Button, createTheme, CssBaseline, PaletteMode, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useToggle from './hooks/useToggle';
import Home from './pages/Home';
import Layout from './pages/Layout';
import MuiButtonList from './pages/MuiButtonList';
import MuiTextList from './pages/MuiTextList';
import PageError from './pages/PageError';
import { withBWTheme } from './styles/mainTheme';

function App() {
  const [dark, setDark] = useToggle(true)
  const bwModeTheme = createTheme(withBWTheme(dark ? 'dark': 'light'));
  return (
    <Router>
      <ThemeProvider theme={bwModeTheme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="muiText" element={<MuiTextList/>} />
            <Route path="muiBtns" element={<MuiButtonList/>} />
            <Route path="*" element={<PageError />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
