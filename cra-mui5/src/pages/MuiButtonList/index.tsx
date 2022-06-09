import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { BiSend } from 'react-icons/'

const MuiButtonList = () => {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2}>
        {/* default */}
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text" href="https://google.com">變回a+href</Button>
      </Stack>
      <Typography variant="subtitle1">顏色列表</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="error">error</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="success">success</Button>
        <Button variant="contained" color="inherit">inherit</Button>
      </Stack>
      <Typography variant="subtitle1">size列表</Typography>
      <Stack display="block" direction="row" spacing={2}>
        <Button variant="contained" size="small">small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">large</Button>
      </Stack>
      <Typography variant="subtitle1">＋icon</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<BiSend/>}>send</Button>
      </Stack>
    </Stack>
  )
}

export default MuiButtonList