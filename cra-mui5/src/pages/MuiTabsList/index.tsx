import { Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BiAlbum } from 'react-icons/bi';
import { Link, Outlet, useParams } from 'react-router-dom';
import DocTabpanel from './DocTabpanel';

// 這裡我做了一點簡化的修改但大致與doc相同
function a11yProps(index: number) {
  return {
    id: `doc-tab-${index}`,
    'aria-controls': `doc-tabpanel-${index}`,
  };
}

const MuiTabsList = () => {
  // doc example
  const [tab, setTab] = useState(0);
  const tabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const { childUrl } = useParams();
  // 盡量避免undefined
  const paramsToIndex = (param: string | undefined): number | undefined => {
    switch (param) {
      // 要避免default不亮
      // case "one":
      //   return 0;
      case "two": 
        return 1;
      case "three":
        return 2;
      case "four":
        return 3;
      case "five":
        return 4;
      case "six":
        return 5;
      case "seven":
        return 6;
      default:
        return 0;
    }
  }
  
  return (
    <Stack spacing={2}>
      <Typography>官方文件做法</Typography>
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
      <Typography>與Route連動的做法</Typography>
      <Box sx={{borderRadius: 2, boxShadow: `2px 2px 5px #CCC`}}>
        <Tabs 
          value={paramsToIndex(childUrl)}
          aria-label="combine react-router"
          textColor="primary"
          indicatorColor="secondary"
          // centered
          variant="scrollable"
          // scrollButtons="auto"
          scrollButtons={false}
        >
          <Tab label="Item One" component={Link} to="" disabled/>
          <Tab label="Item Two" component={Link} to="two" />
          <Tab label="Item Three" component={Link} to="three" icon={<BiAlbum/>} />
          <Tab label="Item Four" component={Link} to="four" iconPosition="start" icon={<BiAlbum/>}/>
          <Tab label="Item Five" component={Link} to="five" iconPosition="end" icon={<BiAlbum/>}/>
          <Tab label="Item Six" component={Link} to="six" iconPosition="bottom" icon={<BiAlbum/>}/>
          <Tab label="Item Seven" component={Link} to="seven" />
        </Tabs>
      </Box>
      {/* 排除不亮事件處理方法 */}
      {!childUrl && <Box p={3}>one: 避開tab不亮的做法</Box>}
      <Outlet/>
    </Stack>
  )
}

export default MuiTabsList