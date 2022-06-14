import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import CheckboxTable from '../../components/CheckboxTable'
import GenerTable from '../../components/GenerTable'

const MuiTableList = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">
        MuiTableList
      </Typography>
      <Divider/>
      <CheckboxTable/>
      <Typography variant="h5">
        mui-table
      </Typography>
      <Divider/>
      <GenerTable/>
    </Stack>
  )
}

export default MuiTableList