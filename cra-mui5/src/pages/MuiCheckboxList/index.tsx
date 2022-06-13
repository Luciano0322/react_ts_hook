import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import useToggle from '../../hooks/useToggle'
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai'

const MuiCheckBoxList = () => {
  const [demo, setDemo] = useState(false)
  const [demo2, toggleDemo2] = useToggle(false)
  const [demo3, toggleDemo3] = useToggle(false)
  const [mutiChk, setMutiChk] = useState<boolean[]>([true, false])
  const [skills, setSkills] = useState<string[]>([])
  const demoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDemo(event.target.checked)
  }

  const mutiChkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMutiChk([event.target.checked, event.target.checked]);
  };

  const mutiChkOpt1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMutiChk([event.target.checked, mutiChk[1]]);
  };

  const mutiChkOpt2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMutiChk([mutiChk[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={mutiChk[0]} onChange={mutiChkOpt1Change} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={mutiChk[1]} onChange={mutiChkOpt2Change} />}
      />
    </Box>
  );

  const skillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if (index === -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value))
    }
  }
  console.log(skills);
  

  return (
    <Stack spacing={2}>
      <Typography>基本引入</Typography>
      <Stack direction="row" spacing={2}>
        <FormControlLabel label="demo-default" control={<Checkbox/>} />
        <FormControlLabel label="demo-defaultChecked" control={<Checkbox defaultChecked/>} />
        <FormControlLabel label="demo-disabled" control={<Checkbox disabled checked/>} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <FormControlLabel
          label="demo-controlled"
          control={<Checkbox
            checked={demo}
            onChange={demoChange}
          />}
        />
        <FormControlLabel
          label="by useCustom hook"
          control={<Checkbox
            checked={demo2}
            onChange={(e) => toggleDemo2(e.target.checked)}
          />}
        />
        <FormControlLabel
          label="icon checkbox"
          control={<Checkbox
            icon={<AiOutlineLike/>}
            checkedIcon={<AiTwotoneLike/>}
            checked={demo3}
            onChange={(e) => toggleDemo3(e.target.checked)}
          />}
        />
      </Stack>
      <Typography variant='h5'>全選按鈕</Typography>
      <Stack>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={mutiChk[0] && mutiChk[1]}
              indeterminate={mutiChk[0] !== mutiChk[1]}
              onChange={mutiChkChange}
            />
          }
        />
        {children}
      </Stack>
      <Typography variant='h5'>formControl</Typography>
      <Stack>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={<Checkbox value='html' checked={skills.includes('html')} onChange={skillChange} />}
            />
            <FormControlLabel
              label="CSS"
              control={<Checkbox value='css' checked={skills.includes('css')} onChange={skillChange} />}
            />
            <FormControlLabel
              label="JavaScript"
              control={<Checkbox value='js' checked={skills.includes('js')} onChange={skillChange} />}
            />            
          </FormGroup>
        </FormControl>
      </Stack>
      <Typography>其餘部分的應用與radio是一致的</Typography>
    </Stack>
  )
}

export default MuiCheckBoxList