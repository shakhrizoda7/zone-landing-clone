import React from 'react';
import Title from '../Title';
import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HotcategoriesStyled } from './HotcategoriesStyled';


const categoriesData = [
    {img: 'https://zone-ui.vercel.app/assets/icons/solid-64/ic-finance.svg', title: 'Accounting / Finance', jobNum: '497'},
    {img: 'https://zone-ui.vercel.app/assets/icons/solid-64/ic-marketing-bullhorn.svg', title: 'Marketing', jobNum: '763'},
    {img: 'https://zone-ui.vercel.app/assets/icons/solid-64/ic-creativity.svg', title: 'Design', jobNum: '684'},
    {img: 'https://zone-ui.vercel.app/assets/icons/solid-64/ic-web-programming.svg', title: 'Development', jobNum: '451'},
    {img: 'https://zone-ui.vercel.app/assets/icons/solid-64/ic-chip.svg', title: 'IT - Hardware', jobNum: '433'},
    {img: 'https://zone-ui.vercel.app/assets/icons/solid-64/ic-customer-service.svg', title: 'Customer Service', jobNum: '463'},
    {img: 'https://zone-ui.vercel.app/assets/icons/solid-64/ic-stethoscope.svg', title: 'Health and Care', jobNum: '951'},
    {img: '	https://zone-ui.vercel.app/assets/icons/solid-64/ic-banking.svg', title: 'Banking', jobNum: '194'},
];

export default function Hotcategories() {
  return (
    <HotcategoriesStyled>
        <Title title={'Hot categories'}/>

        <Grid container className='gridContainer'>
            {categoriesData.map((item) => (
                <Grid item className='categoryCard'>
                    <Box className='cardBox'>
                        <img src={item.img} className='img'/>
                    </Box>

                    <Typography variant='h6' className='title'>{item.title}</Typography>
                    <Typography variant='body2' className='jobNum'>{item.jobNum} jobs</Typography>
                </Grid>
            ))}
        </Grid>

        <Button className='viewAllBtn' variant="outlined" color='disabled' endIcon={<ArrowForwardIosIcon />}>
            View all
        </Button>
    </HotcategoriesStyled>
  )
}
