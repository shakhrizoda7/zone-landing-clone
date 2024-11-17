import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Title({category, title, description }) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '24px'}} className='titleBox'>
        <Typography variant='overline' sx={{fontWeight: 700, color: '#919EAB'}} className='category'>{category}</Typography>
        <Typography variant='h3' sx={{fontWeight: 800}} className='title'>{title}</Typography>
        <Typography variant='body1' sx={{color: '#919EAB', width: 480}} className='description'>{description}</Typography>
    </Box>
  )
}
