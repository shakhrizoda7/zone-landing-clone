import React from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Title from '../Title';

import signupImg from './signup.png';
import completeImg from './complete.png';
import searchjobImg from './searchjob.png';
import { ExploreStyled } from './ExploreStyled';

const exploreCardData = [
  {img: signupImg, title: 'Create an account'},
  {img: completeImg, title: 'Complete your profile'},
  {img: searchjobImg, title: 'Search your job'}
]

export default function ExploreSection() {
  return (
    <ExploreStyled>
        <Title title={'Explore thousands of jobs'} category={'for candidates'} description={'Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper velit.'}/>
    
        <Box >
          <Grid container className='gridContainer'>
            {exploreCardData.map((item, index) => (
              <Grid item className='gridItem'>
                <Card className='gridCard'>
                    <img src={item.img} className='gridItemImg'/>

                    <Box className='gridCardTextsBox'>
                      <Typography variant='overline' className='fontWeightText fontColorText'>Step {index+1}</Typography>
                      <Typography variant='h6' className='fontWeightText'>{item.title}</Typography>
                      <Typography variant='body2' className='fontColorText'>Nunc nonummy metus. Donec elit libero.</Typography>
                    </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Button className='uploadBtn' startIcon={<UploadFileIcon/>} variant="contained">
          Upload your CV
        </Button>
    </ExploreStyled>
  )
}
