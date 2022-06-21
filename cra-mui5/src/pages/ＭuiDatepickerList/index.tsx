import { Divider, Stack, TextField, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import React, { useState } from 'react'
import twLocal from 'date-fns/locale/zh-TW';

const MuiDatepickerList = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={twLocal}>
      <Stack spacing={2}>
        <Typography>日期選擇器</Typography>
        <Divider/>
        <Stack spacing={3} direction="row">
          <DatePicker
            label="日期doc"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="設定期限"
            value={selectedDate}
            minDate={new Date('2022-01-01')}
            maxDate={new Date('2022-05-12')}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="設定介面"
            value={selectedDate}
            openTo="year"
            views={['year', 'month', 'day']}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="For desktop"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            label="For mobile"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            
          />

        </Stack>
        <Typography>時間選擇器</Typography>
        <Divider/>
        <Stack direction="row" spacing={3}>
          <TimePicker
            label="時間doc"
            value={selectedTime}
            onChange={(newValue) => {
              setSelectedTime(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </Stack>
    </LocalizationProvider>
  )
}

export default MuiDatepickerList