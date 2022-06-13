import { Box, Dialog, DialogContent, DialogContentText, DialogProps, DialogTitle, IconButton } from '@mui/material'
import React, { FC } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'

const GenerDialog: FC<React.PropsWithChildren<{
  isOpen: boolean,
  toggle: (event?: boolean) => void,
  title: string,
  titleColor?: string,
  content?: string,
  contentColor?: string,
  full?: boolean,
  width?: DialogProps['maxWidth'],
}>> = ({
  isOpen,
  toggle,
  title,
  titleColor,
  content,
  contentColor,
  children,
  full,
  width,
}) => {
  const closeFn = () => toggle(false)
  return (
    <Dialog
      open={isOpen}
      onClose={closeFn}
      aria-labelledby="gener-dialog-title"
      aria-describedby="gener-dialog-description"
      fullWidth={full}
      maxWidth={width}
    >
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center"
      >
        <DialogTitle color={titleColor} id="gener-dialog-title">
          {`提示用語: ${title}`}
        </DialogTitle>
        <IconButton color="error" onClick={closeFn}>
          <IoMdCloseCircle/>
        </IconButton>
      </Box>
      <DialogContent>
        <DialogContentText color={contentColor} id="gener-dialog-description">
          {content}
        </DialogContentText>
        {/* 這裡這樣處理可以兼容跳窗表單 */}
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default GenerDialog