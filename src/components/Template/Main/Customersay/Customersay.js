import React, { useRef } from 'react';
import { CustomersayStyled } from './CustomersayStyled';
import Title from '../Title';
import { Box, Button, Card, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import stars from './stars.png'

const customerCarouselData = [
    { customerName: 'Jayvion Simon', customerJob: 'CEO' },
    { customerName: 'Lucian Obrien', customerJob: 'CTO' },
    { customerName: 'Deja Brady', customerJob: 'Project Coordinator' },
    { customerName: 'Harrison Stein', customerJob: 'Team Leader' },
    { customerName: 'Reece Chung', customerJob: 'Software Developer' },
    { customerName: 'Lainey Davidson', customerJob: 'Marketing Strategist' },
    { customerName: 'Cristopher Cardenas', customerJob: 'Data Analyst' },
    { customerName: 'Melanie Noble', customerJob: 'Product Owner' },
]

export default function Customersay() {
  const scrollRef = useRef();

  const handleScroll = (direction) => {
    if(scrollRef.current){
        const scrollAmount = direction === 'next' ? 300 : -300;
        scrollRef.current.scrollBy({left: scrollAmount, behavior: 'smooth'});
    }
  }
  return (
    <CustomersayStyled>
        <Title title={'What our customer say'}/>

        <Box ref={scrollRef} className='carouselBox' sx={{scrollSnapType: 'x mandatory', '& > *': { scrollSnapAlign: 'center'}, '::-webkit-scrollbar': { display: 'none' }}}>
            {customerCarouselData.map((item) => (
                <Card  orientation="horizontal" key={item.title} className='carouselCard'>
                    <Box className='raiting'>
                        <img src={stars} />
                    </Box>
                    <Box className='carouselSaysText'>
                        <Typography variant='subtitle1' className='says'>Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.</Typography>
                        <Typography variant='body1' className='customerName'>{item.customerName}</Typography>
                        <Typography variant='overline' className='category'>{item.customerJob}</Typography>
                    </Box>
                </Card>
            ))}
        </Box>

        <Box className='scrollBtnBox'>
            <Button onClick={() => handleScroll('prev')}><ArrowBackIosIcon fontSize="small" className='scrollBtn'/></Button>
            <Button sx={{ml: -3}} onClick={() => handleScroll('next')}><ArrowForwardIosIcon fontSize="small" className='scrollBtn'/></Button>
        </Box>
    </CustomersayStyled>
  )
}
