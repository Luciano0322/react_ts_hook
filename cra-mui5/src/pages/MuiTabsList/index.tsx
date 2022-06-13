import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import DocTabpanel from './DocTabpanel';

// 這裡我做了一點簡化的修改但大致與doc相同
function a11yProps(index: number) {
  return {
    id: `doc-tab-${index}`,
    'aria-controls': `doc-tabpanel-${index}`,
  };
}

const MuiTabsList = () => {
  const [tab, setTab] = useState(0);
  const tabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const location = useLocation();
  console.log(location);
  
  return (
    <Stack spacing={2}>
      <Box sx={{borderRadius: 2, boxShadow: `2px 2px 5px #CCC`}}>
        <Tabs value={tab} onChange={tabChange} aria-label="example from mui doc">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <DocTabpanel value={tab} index={0}>
        <Typography>Item One</Typography>
      </DocTabpanel>
      <DocTabpanel value={tab} index={1}>
        <Typography>Item Tow</Typography>
      </DocTabpanel>
      <DocTabpanel value={tab} index={2}>
        <Typography>Item Three</Typography>
      </DocTabpanel>
    </Stack>
  )
}

export default MuiTabsList