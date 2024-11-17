import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Title from '../Title';
import { NewsStyled } from './NewsStyled';


const cardsData1 = [
    {src: 'https://zone-ui.vercel.app/assets/images/career/career-2.webp', title: 'Exploring the Impact of Artificial Intelligence on Modern Healthcare', class: 'imgOverlayBig'},
    {src: 'https://zone-ui.vercel.app/assets/images/career/career-3.webp', title: 'Climate Change and Its Effects on Global Food Security', class: 'imgOverlaySmall'},
];
const cardsData2 = [
    {src: 'https://zone-ui.vercel.app/assets/images/career/career-4.webp', title: 'The Rise of Remote Work: Benefits, Challenges, and Future Trends', class: 'imgOverlaySmall'},
    {src: 'https://zone-ui.vercel.app/assets/images/career/career-5.webp', title: 'Understanding Blockchain Technology: Beyond Cryptocurrency', class: 'imgOverlayBig'},
];

export default function News() {
  return (
    <NewsStyled>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <Title category={'Blog'} title={'Read our latest news'} description={'Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula.'}/>
            </Box>
            <Box>
                <Button sx={{textTransform: 'none', color: 'black'}} endIcon={<ArrowForwardIosIcon  fontSize="small"/>}>View all</Button>
            </Box>
        </Box>

        <Box className='cardsBox'>
            <Box className='leftCard'>
                <Typography color='#C4CDD5' fontSize={'12px'} fontWeight={600}>12 Aug 2024 • 8 min read</Typography>
                <Typography variant='h6' color='white' fontWeight={700} className='title leftCardTitle'>The Future of Renewable Energy: Innovations and Challenges Ahead</Typography>
                <Typography variant='body1' className='description'>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</Typography>
            </Box>

            <Grid container className='rightCard'>
                {cardsData1.map((item) => (
                    <Grid item className={item.class}>
                        <Box>
                            <img src={item.src} />

                            <Box>
                                <Typography color='#C4CDD5' fontSize={'12px'} fontWeight={600}>12 Aug 2024 • 8 min read</Typography>
                                <Typography variant='body1' className='title'>{item.title}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Grid container className='rightCard'>
                {cardsData2.map((item) => (
                    <Grid item className={item.class}>
                        <Box>
                            <img src={item.src} />

                            <Box>
                                <Typography color='#C4CDD5' fontSize={'12px'} fontWeight={600}>12 Aug 2024 • 8 min read</Typography>
                                <Typography variant='body1' className='title'>{item.title}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </NewsStyled>
  )
}
