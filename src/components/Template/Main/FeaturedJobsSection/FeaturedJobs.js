import React from 'react';
import { Box, Button, Card, Checkbox, Grid, Typography } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FeaturedStyled } from './FeaturedStyled';

// cards data
const featuresCardData = [
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-7.webp', jobTitle: 'Project Manager', names: 'Altenwerth, Medhurst and Roberts', location: 'Armenia', jobTime: 'Freelance', solar: 'Competitive', jobName: 'Intern/student'},
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-8.webp', jobTitle: 'Sales Executive', names: 'Raynor Group', location: 'Angola', jobTime: 'Part time', solar: '$12,000', jobName: 'Manager'},
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-9.webp', jobTitle: 'Content Writer', names: 'Mraz, Donnelly and Collins', location: 'Antarctica', jobTime: 'Full time', solar: '$12,000', jobName: 'No experience'},
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-10.webp', jobTitle: 'Network Administrator', names: 'Padberg - Bailey', location: 'Argentina', jobTime: 'Part time', solar: 'Competitive', jobName: 'Manager'},
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-11.webp', jobTitle: 'Customer Service Representative', names: 'Heidenreich, Stokes and Parker', location: 'American Samoa', jobTime: 'Freelance', solar: '$12,000', jobName: 'Intern/student'},
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-12.webp', jobTitle: 'Product Manager', names: 'Pagac and Sons', location: 'Austria', jobTime: 'Part time', solar: '$12,000', jobName: 'Manager'},
];

// like check
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// months names
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export default function FeaturedJobs() {
    const data = new Date();
    const year = data.getFullYear();
    const date = data.getDate();
    const month = months[data.getMonth()];

  return (
    <FeaturedStyled>
        <Box className='tilesBox'>
            <Typography variant='overline' className='category'> Featured Jobs </Typography>
            <Typography variant='h5' className='title'> Jobs available apply to Editorial Specialist, Account Manager, Human Resources Specialist and more! </Typography>
        </Box>

        <Box className='gridBox'>
            <Grid container className='gridContainer'>

                {featuresCardData.map((item, index ) => (
                    <Grid item className='gridItem'>
                        <Card className='gridCard'>
                            <Box className='gridCardBox gridCard'>
                                {/* img and checkbox */}
                                <Box className='imgCheckbox'>
                                    <img src={item.img}/>
                                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} sx={{'&.Mui-checked': { color: '#FF5630', }, }}/>
                                </Box>

                                <Box className='cardTextDatas'>
                                    <Typography variant='body1' className='jobTitle'>{item.jobTitle}</Typography>
                                    <Typography variant='body2' color='primary' className='names'>{item.names}</Typography>
                                    <Typography variant='subtitle2' component={'div'} className='location'><LocationOnOutlinedIcon/>{item.location}</Typography>
                                    <Typography variant='caption' color='#637381'>Posted at: {date} {month} {year}</Typography>
                                </Box>
                            </Box>

                            <Grid container className='jobTimeYearBox'>
                                <Grid item className='yearBoxGridItem jobTimeYearBoxGridItem'>
                                    <Typography variant='subtitle2' component={'div'} className='yearTextsBox jobTimeYearBoxTexts'>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1.5em" height="1.5em" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="m23 4l-5 3.75v6.5L15 12l-5 3.75v6.5L7 20l-5 3.75V30h2v-5.25l3-2.25l3 2.25V30h2V16.75l3-2.25l3 2.25V30h2V8.75l3-2.25l3 2.25V30h2V7.75z"
                                            ></path>
                                        </svg>

                                        {index+7} year exp
                                    </Typography>
                                </Grid>

                                <Grid item className='jobTimeGridItem jobTimeYearBoxGridItem'>
                                    <Typography variant='subtitle2' component={'div'} className='jobTime jobTimeYearBoxTexts'>
                                        <AccessTimeOutlinedIcon/>
                                        {item.jobTime}
                                    </Typography>
                                </Grid>

                                <Grid item className='jobTimeYearBoxGridItem'>
                                    <Typography variant='subtitle2' component={'div'} className='jobTimeYearBoxTexts'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" aria-hidden="true" role="img" className="iconify iconify--solar mnl__icon__root">
                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                                d="M7.945 4.25h5.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.554.555.817 1.242.95 2.05c.809.132 1.495.396 2.05.95c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337c-.121.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-5.11c-1.367 0-2.47 0-3.336-.116c-.9-.122-1.658-.38-2.26-.982c-.555-.555-.818-1.242-.95-2.05c-.81-.133-1.496-.396-2.05-.95c-.603-.602-.861-1.36-.982-2.26c-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117m-1.99 13.482c.106.402.255.66.454.859c.277.277.666.457 1.4.556c.755.102 1.756.103 3.191.103h5c1.436 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.4-.556c.276-.277.457-.665.555-1.4c.102-.754.103-1.755.103-3.19s-.001-2.437-.103-3.193c-.098-.734-.279-1.122-.556-1.399c-.2-.2-.456-.349-.86-.454c.019.59.019 1.251.019 1.99v.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-5.11c-.739 0-1.4 0-1.99-.018M4.809 5.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191s.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h5c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103M10.5 9.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M7.25 11a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M5 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 5 8.25m11 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75"
                                            />
                                        </svg>

                                        {item.solar}
                                    </Typography>
                                </Grid>

                                <Grid item className='jobTimeYearBoxGridItem'>
                                    <Typography variant='subtitle2' component={'div'} className='jobTimeYearBoxTexts'>
                                        <PersonOutlineOutlinedIcon/>
                                        {item.jobName}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}

            </Grid>

            <Button className='viewBtn' variant="outlined" color='disabled' endIcon={<ArrowForwardIosIcon />}>
                View all
            </Button>
        </Box>
    </FeaturedStyled>
  )
}
