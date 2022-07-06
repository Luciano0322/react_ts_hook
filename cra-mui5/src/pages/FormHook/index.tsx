import { Button, Divider, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 這裡是透過yup的方式來整理error msgs
const schema = yup.object().shape({
  username: yup.string().min(2, "最少兩個字").required("必填欄位"),
  password: yup.string().min(6, "至少6碼").max(16, "最多16碼").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/, "至少六個字符，至少一個字母，一個數字和一個特殊字符"),
  email: yup.string().email("格式不正確").required("必填欄位"),
});

// 這個可以拆出來做管理
const defaultVals = {
  username: '',
  password: '',
  email: '',
}

const FormHook = () => {
  const { control, handleSubmit, formState: {errors} } = useForm({
    defaultValues: defaultVals,
    resolver: yupResolver(schema),
    mode: "onBlur"
  })
  const formCheck = handleSubmit((data) => console.log(data))
  return (
    <Stack>
      <Typography variant='h5' color="primary">
        FormHook
      </Typography>
      <Divider/>
      <form onSubmit={formCheck}>
        <Stack my={2} spacing={2}>
          <Stack direction="row" spacing={1}>
            <Controller
              control={control}
              name="username"
              render={({field}) => (
                <TextField
                  label="用戶名"
                  {...field}
                  error={!!errors?.username}
                  helperText={errors?.username?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({field}) => (
                <TextField
                  label="密碼"
                  type="password"
                  {...field}
                  error={!!errors?.password}
                  helperText={errors?.password?.message}
                />
              )}
            />
          </Stack>
          <Stack direction="row" spacing={1}>
            <Controller
              control={control}
              name="email"
              render={({field}) => (
                <TextField
                  label="email"
                  type="email"
                  {...field}
                  error={!!errors?.email}
                  helperText={errors?.email?.message}
                />
              )}
            />
          </Stack>
        </Stack>
        <Button
          type="submit"
          variant="contained"
        >
          送出
        </Button>
      </form>
    </Stack>
  )
}

export default FormHook