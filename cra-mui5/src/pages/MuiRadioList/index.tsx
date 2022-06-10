import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import React, { useState } from 'react'

const MuiRadioList = () => {
  const [size, setSize] = useState('')
  const sizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 重點改法
    setSize((event.target as HTMLInputElement).value)
  }
  return (
    <Stack spacing={3}>
      <Typography variant='h5'>基本引入</Typography>
      <Stack spacing={2} direction='row'>
        <FormControl>
          <FormLabel id="gender-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="gender-label"
            defaultValue="female"
            name="gender"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="size-label">size</FormLabel>
          <RadioGroup
            aria-labelledby="size-label"
            name="size"
            value={size}
            onChange={sizeChange}
          >
            <FormControlLabel value="xs" control={<Radio />} label="XS" />
            <FormControlLabel value="s" control={<Radio />} label="S" />
            <FormControlLabel value="m" control={<Radio />} label="M" />
            <FormControlLabel value="l" control={<Radio />} label="L" />
            <FormControlLabel value="xl" control={<Radio />} label="XL" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="size-label">size</FormLabel>
          <RadioGroup
            aria-labelledby="size-label"
            name="size"
            value={size}
            onChange={sizeChange}
            row
          >
            <FormControlLabel value="xs" control={<Radio size='small' />} label="XS" />
            <FormControlLabel value="s" control={<Radio size='small' color="secondary" />} label="S" />
            <FormControlLabel value="m" control={<Radio color="warning" />} label="M" />
            <FormControlLabel 
              value="l" 
              control={<Radio sx={{
                // 現在可以透過sx的方式修改預設的Mui樣式,由於是採物件的寫法所以一樣可以導入js的寫法進來
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
              }}/>} 
              label="L"
            />
            <FormControlLabel 
              value="xl" 
              control={<Radio sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
              }}/>} 
              label="XL" 
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack spacing={2} direction="row">
      <FormControl>
        <FormLabel id="size-label">size</FormLabel>
          <RadioGroup
            aria-labelledby="size-label"
            name="size"
            value={size}
            onChange={sizeChange}
            row
          >
            <FormControlLabel value="xs" control={<Radio />} label="XS" labelPlacement="top"/>
            <FormControlLabel value="s" control={<Radio />} label="S" labelPlacement="start"/>
            <FormControlLabel value="m" control={<Radio />} label="M" labelPlacement="bottom"/>
            <FormControlLabel value="l" control={<Radio />} label="L" />
            <FormControlLabel value="xl" control={<Radio />} label="XL" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Stack>
  )
}

export default MuiRadioList