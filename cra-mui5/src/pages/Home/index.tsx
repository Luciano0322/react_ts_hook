import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Stack direction='row' spacing={2}>
      <Button
        color="primary"
        variant='contained'
        component={Link}
        to={`/muiText`}
      >
        MuiTextList
      </Button>
      <Button
        color="primary"
        variant='contained'
        component={Link}
        to={`/muiBtns`}
      >
        MuiBtns
      </Button>
      <Button
        color="primary"
        variant='contained'
        component={Link}
        to={`/muiTextFields`}
      >
        輸入框
      </Button>
    </Stack>
  )
}

export default Home