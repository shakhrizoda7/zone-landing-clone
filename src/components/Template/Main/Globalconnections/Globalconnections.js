import { Box, Button, Card, Typography } from '@mui/material';
import React, { useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Title from '../Title';
import { GlobalStyled } from './GlobalStyled';


const data = [
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-1.webp', location: 'Andorra', jobs: '497'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-2.webp', location: 'United Arab Emirates', jobs: '763'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-3.webp', location: 'Afghanistan', jobs: '684'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-4.webp', location: 'Antigua and Barbuda', jobs: '451'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-5.webp', location: 'Anguilla', jobs: '433'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-6.webp', location: 'Albania', jobs: '462'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-7.webp', location: 'Armenia', jobs: '951'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-8.webp', location: 'Angola', jobs: '194'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-9.webp', location: 'Antarctica', jobs: '425'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-10.webp', location: 'Argentina', jobs: '435'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-11.webp', location: 'American Samoa', jobs: '807'},
    { src: 'https://zone-ui.vercel.app/assets/images/travel/travel-12.webp', location: 'Austria', jobs: '521'},
];

export default function Globalconnections() {
  const scrollRef = useRef();

  // Function to handle scroll action
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'next' ? 300 : -300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <GlobalStyled>
        <Box className='globalBox'>
            <Box className='globalTitlesBox'>
                <Title title={'Global connections'} description={'Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla neque dolor, sagittis eget, iaculis quis.'}/>

                <Button variant='contained' className='viewAllBtn' endIcon={<ArrowForwardIosIcon fontSize="small"/>}>View all </Button>
            </Box>

            <Box ref={scrollRef} className='carouselBox' sx={{ overflowX: 'scroll', scrollSnapType: 'x mandatory', '& > *': { scrollSnapAlign: 'center'}, '::-webkit-scrollbar': { display: 'none' }}}>
                {data.map((item) => (
                    <Card orientation="horizontal" key={item.title} variant="outlined" className='carouselCard'>
                        <Box className='carouselImgBox'>
                            <img src={item.src} className='carouselImg'/>
                        </Box>
                        <Box className='carouselCardTexts'>
                            <Typography variant="body1" fontWeight={600}>{item.location}</Typography>
                            <Typography variant="subtitle2" color='#919EAB' mt={1}>{item.jobs} jobs</Typography>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>

        <Box className='scrollBtnBox'>
            <Button onClick={() => handleScroll('prev')}> <ArrowBackIosIcon fontSize="small" className='scrollBtn'/></Button>
            <Button onClick={() => handleScroll('next')}> <ArrowForwardIosIcon fontSize="small" className='scrollBtn'/></Button>
        </Box>
    </GlobalStyled>
  )
}
