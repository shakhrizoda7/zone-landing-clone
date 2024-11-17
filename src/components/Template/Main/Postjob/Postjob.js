import { Box, Button } from '@mui/material';
import React from 'react';
import Title from '../Title';
import { PostjobStyled } from './PostjobStyled';

export default function Postjob() {
  return (
    <PostjobStyled>
        <Box className='postJobTexts' >
            <Title category={'FOR RECRUITERS'} title={'Do you have a position to post job?'} description={'Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper velit.'}/>
            <Button variant='contained' className='postJobBtn'>Post a job</Button>
        </Box>
        <Box>
            <img src="https://zone-ui.vercel.app/assets/illustrations/illustration-recruitment.svg" alt="" />
        </Box>
    </PostjobStyled>
  )
}
