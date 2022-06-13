import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import GenerDialog from '../../components/GenerDialog'
import ServerResDialog from '../../components/ServerResDialog'
import useToggle from '../../hooks/useToggle'

type FormValues = {
  first: string;
  last: string;
};

const MuiDialogsList = () => {
  const [notice1, setNotice1] = useToggle(false)
  const [notice2, setNotice2] = useToggle(false)
  const [notice3, setNotice3] = useToggle(false)
  const [notice4, setNotice4] = useToggle(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      first: '',
      last: '',
    }
  })
  const dialogSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  }
  return (
    <Stack spacing={2}>
      <Typography variant="h5">跳窗信息</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => setNotice1(true)}>server提示</Button>
        <Button variant="contained" onClick={() => setNotice2(true)}>一般提示</Button>
        <Button variant="contained" onClick={() => setNotice3(true)}>一般提示(含表單)</Button>
        <Button variant="contained" onClick={() => setNotice4(true)}>一般提示(fullwidth & sm)</Button>
        <ServerResDialog isOpen={notice1} toggle={setNotice1} title={`srever提示`} content={`message`} />
        <GenerDialog isOpen={notice2} toggle={setNotice2} title={`警告`} titleColor="red" content={`message`} />
        <GenerDialog 
          isOpen={notice4} 
          toggle={setNotice4} 
          title={`提醒`} 
          titleColor="amber" 
          content={`不同大小寬度`}
          full
          width="sm" 
        />
        <GenerDialog isOpen={notice3} toggle={setNotice3} title={`跳窗表單`} titleColor="darkgreen">
          <form onSubmit={handleSubmit(dialogSubmit)}>
            <Stack spacing={2}>
              <Controller
                control={control}
                name="first"
                render={({field}) => (
                  <TextField
                    label="firstName"
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="last"
                render={({field}) => (
                  <TextField
                    label="lastName"
                    {...field}
                  />
                )}
              />
              <Button type="submit" variant="contained">送出</Button>
            </Stack>
          </form>
        </GenerDialog>
      </Stack>
    </Stack>
  )
}

export default MuiDialogsList