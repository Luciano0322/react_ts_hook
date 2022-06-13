import { Box, Typography } from '@mui/material';
import React from 'react'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// 不接routing的做法
const DocTabpanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`doc-tabpanel-${index}`}
      aria-labelledby={`doc-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

export default DocTabpanel