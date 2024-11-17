import React from 'react';
import Title from '../Title';
import { Box, Card, Divider, Typography } from '@mui/material';

import applestore from './appleStore.png';
import googleplay from './googlePlay.png';
import { DownloadStyled } from './DownloadStyled';


export default function Download() {
  return (
    <DownloadStyled>
        <Box className='qrLeftSec'>
            <Box className='qrBox'>
                <Title title={'Download app'} description={'Now finding the new job just got even easier with our new app!'}/>
            </Box>

            <Card sx={{boxShadow: 'none'}} className='qrCard'>
                <Box className='qrCardBox'>
                    <img src="	https://zone-ui.vercel.app/assets/icons/auth/ic-qrcode.svg" alt="" />
                    <Typography className='body1' fontWeight={700}>Scan QR code to <br/> install on your device</Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Box className='downloadSocials'>
                    <img src={applestore}/>
                    <img src={googleplay}/>
                </Box>
            </Card>
        </Box>

        <Box className='downloadImg'>
            <img src="https://zone-ui.vercel.app/assets/images/career/download-app.webp" alt="" />
        </Box>
    </DownloadStyled>
  )
}
