import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react'
import { useRoutes } from 'react-router-dom'
import FormHook from './FormHook';
import Home from './Home';
import Layout from './Layout';
import MuiButtonList from './MuiButtonList';
import MuiCheckBoxList from './MuiCheckboxList';
import MuiDialogsList from './MuiDialogsList';
import MuiRadioList from './MuiRadioList';
import MuiSelectList from './MuiSelectList';
import MuiSwitchList from './MuiSwitchList';
import MuiTableList from './MuiTableList';
import MuiTabsList from './MuiTabsList';
import RouteTabpanel from './MuiTabsList/RouteTabpanel';
import MuiTextFields from './MuiTextFieldList';
// import MuiTextList from './MuiTextList';
import PageError from './PageError';
import MuiDatepickerList from './ＭuiDatepickerList';
// 這裡要記得保持大寫
const LazyMuiTextList = React.lazy(() => import('./MuiTextList'));
// routes config
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: "muiText",
        element:
          <React.Suspense
            fallback={
              <Backdrop
                sx={{ color: '#fff', }}
                open
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            }
          >
            <LazyMuiTextList />
          </React.Suspense>,
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
            element: <RouteTabpanel />
          }
        ]
      },
      {
        path: "muiDialogs",
        element: <MuiDialogsList />,
      },
      {
        path: "muiTables",
        element: <MuiTableList/>,
      },
      {
        path: "muiDatepickers",
        element: <MuiDatepickerList/>,
      },
      {
        path: "formhook",
        element: <FormHook/>,
      }
    ]
  },
  {
    path: "*",
    element: <PageError />,
  },
]

const RoutesConfig = () => {
  const routeConfig = useRoutes(routes)
  return routeConfig
}

export default RoutesConfig