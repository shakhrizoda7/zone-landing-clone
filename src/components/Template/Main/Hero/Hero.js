import React from 'react';
import { Autocomplete, Box, Button, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import heroImg from './heroImg.png';
import dropbox from './dropbox.png';
import { HeroStyled } from './HeroStyled';

const countries = [
    { code: 'AE', label: 'United Arab Emirates', phone: '971'},
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    { code: 'AU', label: 'Australia', phone: '61', suggested: true},
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'CA', label: 'Canada', phone: '1', suggested: true},
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'DE', label: 'Germany', phone: '49', suggested: true},
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'FR', label: 'France', phone: '33', suggested: true,},
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
];

const jobs = [
    { label: 'Developer' },
    { label: 'Engineer' },
    { label: 'Project Manager' },
    { label: 'Content Writer' },
];

export default function Hero() {
  return (
    <HeroStyled>
        <Box className='heroBox'>
            <Box className='heroLeftBox'>
                <Typography className='gradientTextBox' variant="h2" gutterBottom>
                    Get the <span className='gradientText'>Career</span> you deserve
                </Typography>

                <Typography className='heroDescription' variant='subtitle2'>
                    Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.
                </Typography>

                <Box className='heroFormBox'>
                    <SearchIcon className='searchIcon'/>

                    <Autocomplete className='autocomplete'
                        id="free-solo-demo"
                        freeSolo
                        options={jobs.map((option) => option.label)}
                        renderInput={(params) => <TextField {...params} placeholder='Job title, keywords' />}
                    />

                    <Autocomplete className='autocomplete' id="country-select-demo" sx={{ width: 190 }} options={countries} autoHighlight getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => {
                            const { key, ...optionProps } = props;
                            return (
                                <Box key={key} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...optionProps}>
                                    <img loading="lazy" width="20" srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`} src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}/>
                                    {option.label} ({option.code}) +{option.phone}
                                </Box>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField {...params} className='locationPlaceholder' placeholder="Location" 
                                slotProps={{
                                    htmlInput: {
                                        ...params.inputProps,
                                        autoComplete: 'new-password',
                                    }
                                }}
                            />
                        )}
                    />

                    <Button variant='contained' className='searchIconButton'><SearchIcon/></Button>
                </Box>
                
                <Box className='heroSocialImgs'>
                    <img src="https://mohamadfaizal.com/wp-content/uploads/2017/05/logo-airbnb-404px-grey-1.png" width={'75px'}/>
                    <img src={dropbox} width={'96px'} style={{marginTop: 5}}/>
                    <img src="https://i0.wp.com/www.flyycredit.com/wp-content/uploads/2017/04/logo-facebook-404px-grey.png?fit=404%2C185&ssl=1" width={'85px'} />
                    <img src="https://mohamadfaizal.com/wp-content/uploads/2017/05/logo-google-404px-grey.png" width={'60px'} />
                </Box>

                <Box className='viewsBox'>
                    <Box className='viewsDiv'>
                        <Typography variant='h5' className='viewsNum'>2m+</Typography>
                        <Typography variant='body2' className='viewsBy'>Jobs</Typography>
                    </Box>
                    <Box className='viewsDiv'>
                        <Typography variant='h5' className='viewsNum'>500k+</Typography>
                        <Typography variant='body2' className='viewsBy'>Successful hiring</Typography>
                    </Box>
                    <Box className='viewsDiv'>
                        <Typography variant='h5' className='viewsNum'>250k+</Typography>
                        <Typography variant='body2' className='viewsBy'>Partners</Typography>
                    </Box>
                    <Box className=' noBorder' sx={{px: 2.5}}>
                        <Typography variant='h5' className='viewsNum'>156k+</Typography>
                        <Typography variant='body2' className='viewsBy'>Employee</Typography>
                    </Box>
                </Box>
            </Box>

            <Box>
                <img src={heroImg} className="heroImg" />
            </Box>
        </Box>
    </HeroStyled>
  )
}
