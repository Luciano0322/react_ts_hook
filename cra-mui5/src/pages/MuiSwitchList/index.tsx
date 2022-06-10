import { Box, FormControlLabel, Switch } from '@mui/material'
import React from 'react'
import useToggle from '../../hooks/useToggle'

const MuiSwitchList = () => {
  const [demo, toggleDemo] = useToggle(false)
  return (
    <Box>
      <FormControlLabel
        label='simple'
        control={<Switch checked={demo} onChange={toggleDemo} />}
      />
    </Box>
  )
}

export default MuiSwitchList