import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './Home';
import Layout from './Layout';
import MuiButtonList from './MuiButtonList';
import MuiCheckBoxList from './MuiCheckboxList';
import MuiDialogsList from './MuiDialogsList';
import MuiRadioList from './MuiRadioList';
import MuiSelectList from './MuiSelectList';
import MuiSwitchList from './MuiSwitchList';
import MuiTabsList from './MuiTabsList';
import RouteTabpanel from './MuiTabsList/RouteTabpanel';
import MuiTextFields from './MuiTextFieldList';
import MuiTextList from './MuiTextList';
import PageError from './PageError';

const RoutesConfig = () => {
  const routeConfig = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: "muiText",
          element: <MuiTextList />,
        },
        {
          path: "muiBtns",
          element: <MuiButtonList />,
        },
        {
          path: "muiTextFields",
          element: <MuiTextFields />,
        },
        {
          path: "muiSelects",
          element: <MuiSelectList />,
        },
        {
          path: "muiRadios",
          element: <MuiRadioList />,
        },
        {
          path: "muiCheckboxs",
          element: <MuiCheckBoxList />,
        },
        {
          path: "muiSwitchs",
          element: <MuiSwitchList />,
        },
        {
          path: "muiTabs",
          element: <MuiTabsList />,
          children: [
            {
              path: ":childUrl",
              element: <RouteTabpanel/>
            }
          ]
        },
        {
          path: "muiDialogs",
          element: <MuiDialogsList />,
        },
      ]
    },
    {
      path: "*",
      element: <PageError />,
    },
  ])
  return routeConfig
}

export default RoutesConfig