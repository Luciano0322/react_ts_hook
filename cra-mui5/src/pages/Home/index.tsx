import { Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Stack spacing={3}>
      <Typography variant='h5'>Input</Typography>
      <Divider/>
      <Stack direction='row' spacing={2}>
        <Button
          color="primary"
          variant='contained'
          component={Link}
          to={`/muiText`}
        >
          文字
        </Button>
        <Button
          color="primary"
          variant='contained'
          component={Link}
          to={`/muiBtns`}
        >
          按鈕
        </Button>
        <Button
          color="primary"
          variant='contained'
          component={Link}
          to={`/muiTextFields`}
        >
          輸入框
        </Button>
        <Button
          color="primary"
          variant='contained'
          component={Link}
          to={`/muiSelects`}
        >
          下拉選單
        </Button>
        <Button
          color="primary"
          variant='contained'
          component={Link}
          to={`/muiRadios`}
        >
          radios
        </Button>
        <Button
          color="primary"
          variant='contained'
          component={Link}
          to={`/muiCheckboxs`}
        >
          checkboxs
        </Button>
        <Button
          color="primary"
          variant='contained'
          component={Link}
          to={`/muiSwitchs`}
        >
          Switchs
        </Button>
      </Stack>
      <Typography variant="h5">Navigation</Typography>
      <Divider/>
      <Stack direction="row" spacing={2}>
        <Button
          color="primary"
          variant='contained'
          component={Link}
          to={`/muiTabs`}
        >
          Tabs
        </Button>
      </Stack>
    </Stack>
  )
}

export default Home