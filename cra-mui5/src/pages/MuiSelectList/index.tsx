import { Box, FormControl, FormHelperText, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'

const MuiSelectList = () => {
  const [food, setFood] = useState<string | null>('')
  const [foods, setFoods] = useState<string[]>([])
  const [age, setAge] = useState<string>('')
  const [pet, setPet] = useState<string>('')
  const foodChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('callback');
    setFood(event.target.value as string)
  }, [setFood])
  const foodsChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    setFoods(typeof val === 'string' ? val.split(',') : val)
  }, [setFoods])
  const ageChange = (event: SelectChangeEvent) => {
    console.log('normal');
    setAge(event.target.value as string);
  }
  const petChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPet(event.target.value as string);
  }
  // console.log(age);

  return (
    <Stack spacing={3}>
      <Typography variant='h5'>使用Textfield作為下拉</Typography>
      <Stack direction='row' spacing={2}>
        <Box width={`25ch`}>
          <TextField 
            label="select food" 
            select
            value={food}
            onChange={foodChange}
            fullWidth
          >
            <MenuItem value='cookie'>cookie</MenuItem>
            <MenuItem value='pizza'>pizza</MenuItem>
            <MenuItem value='candy'>candy</MenuItem>
            <MenuItem value='chips'>chips</MenuItem>
          </TextField>
        </Box>
        <Box width={`25ch`}>
          <TextField 
            label="多選 food" 
            select
            value={foods}
            onChange={foodsChange}
            fullWidth
            SelectProps={{
              multiple: true
            }}
          >
            <MenuItem value='cookie'>cookie</MenuItem>
            <MenuItem value='pizza'>pizza</MenuItem>
            <MenuItem value='candy'>candy</MenuItem>
            <MenuItem value='chips'>chips</MenuItem>
          </TextField>
        </Box>
      </Stack>
      <Typography variant='h5'>使用FormControl作為下拉</Typography>
      <Stack spacing={2} direction='row'>
        <Box width={`25ch`}>
          <FormControl fullWidth>
            <InputLabel id="age-label">Age</InputLabel>
            <Select
              labelId="age-label"
              id="age-select"
              value={age}
              label="Age"
              onChange={ageChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl variant='standard' sx={{minWidth: 250}}>
          <InputLabel id="age-label-standard">可以從FormComtrol下variant調整</InputLabel>
          <Select
            labelId="age-label-standard"
            id="age-select-standard"
            value={age}
            label="Age"
            onChange={ageChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>透過加入FormHelperText於formControl內</FormHelperText>
        </FormControl>
        <FormControl variant='filled' sx={{minWidth: 100}} required>
          <InputLabel id="age-label-filled">依照options調整寬度</InputLabel>
          <Select
            labelId="age-label-filled"
            id="age-select-filled"
            value={age}
            label="Age"
            onChange={ageChange}
            autoWidth
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty very long option</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Typography variant='h5'>使用原生option tag</Typography>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{minWidth: 200}}>
          <InputLabel htmlFor="native-opt" variant='standard'>native option</InputLabel>
          <NativeSelect
            inputProps={{
              name: 'native-opt',
              id: 'native-opt',
            }}
            value={pet}
            onChange={petChange}
          >
            <option value='' disabled></option>
            <option value='dog'>dog</option>
            <option value='cat'>cat</option>
            <option value='other'>other</option>
          </NativeSelect>
        </FormControl>
      </Stack>
    </Stack>
  )
}

export default MuiSelectList