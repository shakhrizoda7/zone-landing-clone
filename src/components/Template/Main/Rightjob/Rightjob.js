import React from 'react';
import Title from '../Title';
import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { RightjobStyled } from './RightjobStyled';

export default function Rightjob() {
  return (
    <RightjobStyled>
        <Box className='titleBox'>
            <Title title={'Get the right job for you'} description={'Subscribe to get updated on latest and relevant career opportunities'}/>
        </Box>

        <Box>
            <form className='emailForm'>
                <input type="text" placeholder='Enter your email' className='emailInput'/>
                <Button variant="contained"><SearchIcon/></Button>
            </form>
        </Box>
    </RightjobStyled>
  )
}
