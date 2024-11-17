import React from 'react';
import Title from '../Title';
import { Box, Typography } from '@mui/material';
import { TopcompaniesStyled } from './TopCompaniesStyled';


const companiesCardData = [
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-1.webp', compName: 'Lueilwitz and Sons'},
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-2.webp', compName: 'Gleichner, Mueller and Tromp'},
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-3.webp', compName: 'Nikolaus - Leuschke'},
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-4.webp', compName: 'Hegmann, Kreiger and Bayer'},
    {img: 'https://zone-ui.vercel.app/assets/images/company/company-5.webp', compName: 'Grimes Inc'},
]

export default function Topcompanies() {
  return (
    <TopcompaniesStyled>
        <Title title={'Top companies'}/>

        <Box className='companiesCardBox'>
            {companiesCardData.map((item, index) => (
                <Box className='companiesCard'>
                    <img src={item.img}/>

                    <Typography variant='body2' className='jobsNums'>10{index+1} Jobs</Typography>
                    <Typography variant='subtitle2' fontWeight={600}>{item.compName}</Typography>
                </Box>
            ))}
        </Box>
    </TopcompaniesStyled>
  )
}
