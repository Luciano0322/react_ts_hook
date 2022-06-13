import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
// import useToggle from './hooks/useToggle';
// import Home from './pages/Home';
// import Layout from './pages/Layout';
// import MuiButtonList from './pages/MuiButtonList';
// import MuiCheckBoxList from './pages/MuiCheckboxList';
// import MuiRadioList from './pages/MuiRadioList';
// import MuiSelectList from './pages/MuiSelectList';
// import MuiSwitchList from './pages/MuiSwitchList';
// import MuiTabsList from './pages/MuiTabsList';
// import MuiTextFields from './pages/MuiTextFieldList';
// import MuiTextList from './pages/MuiTextList';
// import PageError from './pages/PageError';
import { withBWTheme } from './styles/mainTheme';
import { useSelector } from 'react-redux';
import { RootState } from './lib/store';
import RoutesConfig from './pages/RoutesConfig';


function App() {
  // 這裡應該用gloabel state來處理
  // const [dark, setDark] = useToggle(true)
  const { dark } = useSelector((state: RootState) => state.darkMod) 
  const bwModeTheme = createTheme(withBWTheme(dark ? 'dark': 'light'));
  return (
    <Router>
      <ThemeProvider theme={bwModeTheme}>
        <CssBaseline/>
        <Container maxWidth="lg">
          {/* <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="muiText" element={<MuiTextList/>} />
              <Route path="muiBtns" element={<MuiButtonList/>} />
              <Route path="muiTextFields" element={<MuiTextFields/>} />
              <Route path="muiSelects" element={<MuiSelectList/>} />
              <Route path="muiRadios" element={<MuiRadioList/>} />
              <Route path="muiCheckboxs" element={<MuiCheckBoxList/>} />
              <Route path="muiSwitchs" element={<MuiSwitchList/>} />
              <Route path="muiTabs" element={<MuiTabsList/>}>

              </Route>
              <Route path="*" element={<PageError />} />
            </Route>
          </Routes> */}
          <RoutesConfig/>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
