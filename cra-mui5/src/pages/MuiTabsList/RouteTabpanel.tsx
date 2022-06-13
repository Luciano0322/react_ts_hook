import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

const RouteTabpanel = () => {
  const { childUrl } = useParams()
  return (
    <Box p={2}>{childUrl}</Box>
  )
}

export default RouteTabpanel