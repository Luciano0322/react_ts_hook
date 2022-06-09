import { Stack, Typography } from '@mui/material'
import React from 'react'

const MuiTextList = () => {
  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant='h1' >H1 Heading</Typography>
      <Typography variant='h2' >H2 Heading</Typography>
      <Typography variant='h3' >H3 Heading</Typography>
      <Typography variant='h4' >H4 Heading</Typography>
      <Typography variant='h5' >H5 Heading</Typography>
      <Typography variant='h6' >H6 Heading</Typography>
      <Typography variant='subtitle1' >sub title 1 tag = h6</Typography>
      <Typography variant='subtitle2' >sub title 2 tag = h6</Typography>
      <Typography variant='body1' >body 1 tag = p _default_</Typography>
      <Typography variant='body2' >body 2 tag = p</Typography>
      <Typography variant='h4' component="h2" gutterBottom>透過component attr來更改tag＆gutterBottom來去除margin</Typography>
    </Stack>
  )
}

export default MuiTextList