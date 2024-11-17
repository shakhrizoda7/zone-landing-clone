import React from 'react';
import { Box, Button, Grid, IconButton, List, ListItem, Typography } from '@mui/material';

import applestore from './appleStore.png';
import googleplay from './googlePlay.png';
import { FooterStyled } from './FooterStyled';

const colGridItems1 = [
    {
        title: 'Marketing',
        items: ['Landing', 'Services', 'Case studies', 'Case study', 'Posts', 'Post', 'About', 'Contact'],
    },
    {
        title: 'Travel',
        items: [ 'Landing', 'Tours', 'Tour', 'Checkout', 'Order completed', 'Posts', 'Post', 'About', 'Contact'],
    },
];

const colGridItems2 = [
    {
        title: 'Career',
        items: ['Landing', 'Jobs', 'Job', 'Posts', 'Post', 'About', 'Contact'],
    },
    {
        title: 'E-learning',
        items: [ 'Landing', 'Courses', 'Course', 'Posts', 'Post', 'About', 'Contact'],
    },
];

const rowGridItems1 = [
    {
        title: 'E-commerce',
        items: ['Landing', 'Products', 'Product', 'Cart', 'Checkout', 'Order completed', 'Wishlist', 'Compare', 'Account personal', 'Account wishlist', 'Account vouchers', 'Account orders', 'Account payment'],
    },
    {
        title: 'Common',
        items: [ 'Sign in (split)', 'Sign up (split)', 'Sign in (centered)', 'Sign up (centered)', 'Reset password', 'Update password', 'Verify', '404 error', '500 error', 'Maintenance', 'Coming soon', 'Pricing cards', 'Pricing columns', 'Payment', 'Support'],
    },
];

export default function Footer() {
  return (
    <FooterStyled>
        <Box className='footerTopSec'>

            <Box className='footerTopLeftBox'>
                <Box>
                    <Typography variant='h5' className='footerLogo'>
                        ZONE <Box className='logoPoint'/>
                    </Typography>
                    <Typography variant='body2' className='zoneTitle'>The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.</Typography>
                </Box>

                <Box>
                    <Typography variant='body1' fontWeight={600}>Community</Typography>
                    <List sx={{p: 0}}>
                        <ListItem sx={{p: 0, fontSize: '14px', mt: 1, }}>Documentation</ListItem>
                        <ListItem sx={{p: 0, fontSize: '14px', mt: 1, }}>Changelog</ListItem>
                        <ListItem sx={{p: 0, fontSize: '14px', mt: 1, }}>Contributing</ListItem>
                    </List>
                </Box>

                <Box className='footerEmailForm'>
                    <Typography variant='body1' fontWeight={600}>Let’s stay in touch</Typography>
                    <Typography variant='caption' color='#637381'>Ubscribe to our newsletter to receive latest articles to your inbox weekly.</Typography>

                    <form className='emailForm'>
                        <input type="text" placeholder='Enter your email' className='emailInput'/>
                        <Button variant="contained">Search</Button>
                    </form>
                </Box>

                <Box>
                    <Typography variant='body1' fontWeight={600}>Social</Typography>

                    <Box className='footerBtn'>
                        <IconButton><img src="https://zone-ui.vercel.app/assets/icons/socials/ic-facebook.svg"/></IconButton>
                        <IconButton><img src="https://zone-ui.vercel.app/assets/icons/socials/ic-instagram.svg"/></IconButton>
                        <IconButton><img src="https://zone-ui.vercel.app/assets/icons/socials/ic-linkedin.svg"/></IconButton>
                        <IconButton><img src="https://zone-ui.vercel.app/assets/icons/socials/ic-twitter.svg"/></IconButton>
                    </Box>
                </Box>

                <Box>
                    <Typography variant='body1' fontWeight={600}>Apps</Typography>

                    <Box className='downloadImg'>
                        <img src={applestore} alt="" />
                        <img src={googleplay} alt="" />
                    </Box>
                </Box>
            </Box>

            <Box className='footerTopRightBox'>
                <Box className='gridBox'>
                    <Grid container className='listGrid' direction="column">
                        {colGridItems1.map((section) => (
                            <Grid item >
                                <Typography variant='body2' fontWeight={600}>{section.title}</Typography>

                                <List className='list'>
                                    {section.items.map((item) => (
                                        <ListItem><Typography variant='caption'>{item}</Typography></ListItem>
                                    ))}
                                </List>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid container className='listGrid' direction="column">
                        {colGridItems2.map((section) => (
                            <Grid item >
                                <Typography variant='body2' fontWeight={600}>{section.title}</Typography>

                                <List className='list'>
                                    {section.items.map((item) => (
                                        <ListItem><Typography variant='caption'>{item}</Typography></ListItem>
                                    ))}
                                </List>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid container className='listGridfullWidth listGrid'>
                        {rowGridItems1.map((section) => (
                            <Grid item >
                                <Typography variant='body2' fontWeight={600}>{section.title}</Typography>

                                <List className='list'>
                                    {section.items.map((item) => (
                                        <ListItem><Typography variant='caption'>{item}</Typography></ListItem>
                                    ))}
                                </List>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

        </Box>

        <Box className='footerBottomSec'>
             <Typography variant='caption'> © All rights reserved.</Typography>

             <Box className='footerBottomBox'>
                <Typography variant='caption'>Help center</Typography>
                <Typography>•</Typography>
                <Typography variant='caption'>Terms of service</Typography>
             </Box>
        </Box>
    </FooterStyled>
  )
}