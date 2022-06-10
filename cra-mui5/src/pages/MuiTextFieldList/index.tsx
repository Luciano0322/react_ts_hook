import { InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiTextFields = () => {
  const [inpVal, setInpVal] = useState<string>('')
  return (
    <Stack spacing={2}>
      <Typography variant='h5'>基本引入</Typography>
      <Stack direction='row' spacing={2}>
        {/* default從contained改為outlined */}
        <TextField label="default" />
        <TextField variant='outlined' label="outlined" />
        <TextField variant='filled' label="filled" />
        <TextField variant='standard' label="standard" />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label="small secondary" color='secondary' size='small' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label="required" required />
        <TextField label="disabled" disabled />
        <TextField label="readonly" InputProps={{readOnly: true}}/>
        <TextField label="有下helperText" helperText="這裡可以下小字提示也能用於error提示" type='password' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField 
          label="前綴用法"
          InputProps={{
            startAdornment: <InputAdornment position='start'>$$$</InputAdornment>
          }}
          helperText="**InputAdornment"
        />
        <TextField 
          label="後綴用法"
          InputProps={{
            endAdornment: <InputAdornment position='end'>mt.|可以換icon</InputAdornment>
          }}
          helperText="**InputAdornment"
        />
      </Stack>
      <Typography>基本常用的做法</Typography>
      <Stack direction='row' spacing={2}>
        <TextField
          label="controlled"
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
          error={!inpVal}
          helperText={!inpVal ? 'Required' : 'Keep in mind'}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextFields