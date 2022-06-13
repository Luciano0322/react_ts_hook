import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import React from 'react'

const ServerResDialog = ({
  isOpen, 
  toggle,
  title,
  content,
}: {
  isOpen: boolean, 
  toggle: (event?: boolean) => void,
  title: string,
  content?: string,
}) => {
  const closeFn = () => toggle(false)
  // 要參考api回傳訊息來改寫
  return (
    <Dialog
      open={isOpen}
      onClose={closeFn}
      aria-labelledby="server-dialog-title"
      aria-describedby="server-dialog-description"
    >
      <DialogTitle id="server-dialog-title">
        {`提示用語: ${title}`}
      </DialogTitle>
      <Divider/>
      <DialogContent>
        <DialogContentText id="server-dialog-description">
          {`server回傳訊息: ${content}`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeFn} autoFocus>
          關閉
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ServerResDialog