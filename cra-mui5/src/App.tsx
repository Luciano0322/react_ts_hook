import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useToggle from './hooks/useToggle';
import Home from './pages/Home';
import Layout from './pages/Layout';
import MuiButtonList from './pages/MuiButtonList';
import MuiCheckBoxList from './pages/MuiCheckboxList';
import MuiRadioList from './pages/MuiRadioList';
import MuiSelectList from './pages/MuiSelectList';
import MuiSwitchList from './pages/MuiSwitchList';
import MuiTextFields from './pages/MuiTextFieldList';
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
          <Route path="/" element={<Layout dark={dark} darkFn={setDark}/>}>
            <Route index element={<Home/>} />
            <Route path="muiText" element={<MuiTextList/>} />
            <Route path="muiBtns" element={<MuiButtonList/>} />
            <Route path="muiTextFields" element={<MuiTextFields/>} />
            <Route path="muiSelects" element={<MuiSelectList/>} />
            <Route path="muiRadios" element={<MuiRadioList/>} />
            <Route path="muiCheckboxs" element={<MuiCheckBoxList/>} />
            <Route path="muiSwitchs" element={<MuiSwitchList/>} />
            <Route path="*" element={<PageError />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
