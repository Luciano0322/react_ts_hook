import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BiSend, BiItalic, BiBold, BiUnderline } from 'react-icons/bi'

const MuiButtonList = () => {
  // 單選
  const [format, setFormat] = useState<string | null>(null)
  // 多選
  const [formats, setFormats] = useState<string[]>([])
  const formatChange = (event: React.MouseEvent<HTMLElement>, updatedFormat: string | null) => {
    setFormat(updatedFormat)
  }
  const formatsChange = (event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats)
  }
  console.log({format, formats});
  
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
        <Button 
          variant="contained" 
          startIcon={<BiSend/>} 
          disableRipple
        >
          no trans
        </Button>
        <Button variant="contained" endIcon={<BiSend/>} disableElevation>no shadow</Button>
      </Stack>
      <Typography variant="subtitle1">icon button</Typography>
      <Stack spacing={2} direction="row">
        <IconButton aria-label='send' color="success" size="small">
          <BiSend/>
        </IconButton>
      </Stack>
      <Typography>button group</Typography>
      <Stack display='block' direction="row" spacing={1}>
        <ButtonGroup variant='outlined'>
          {/* buttonGroup內的button樣式由外層決定 */}
          <Button>Left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
        <ButtonGroup 
          variant='contained'
          orientation='vertical' 
          size="small"
          color='secondary'
        >
          {/* buttonGroup內的button樣式由外層決定 */}
          <Button onClick={() => alert('left')}>Left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Typography>toggle button</Typography>
      <Stack spacing={2} direction="row">
        <ToggleButtonGroup 
          aria-label='text formatting'
          value={formats}
          onChange={formatsChange}
          size="small"
          color="info"
        >
          <ToggleButton 
            value='bold'
            aria-label='bold'
          >
            <BiBold/>
          </ToggleButton>
          <ToggleButton 
            value='italic'
            aria-label='italic'
          >
            <BiItalic/>
          </ToggleButton>
          <ToggleButton 
            value='underline'
            aria-label='underline'
          >
            <BiUnderline/>
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup 
          aria-label='text formatting'
          value={format}
          onChange={formatChange}
          color='warning'
          exclusive
        >
          <ToggleButton 
            value='bold'
            aria-label='bold'
          >
            <BiBold/>
          </ToggleButton>
          <ToggleButton 
            value='italic'
            aria-label='italic'
          >
            <BiItalic/>
          </ToggleButton>
          <ToggleButton 
            value='underline'
            aria-label='underline'
          >
            <BiUnderline/>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButtonList