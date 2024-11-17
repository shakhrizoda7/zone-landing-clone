import React, { useState } from 'react';
import { useEffect } from 'react';
import { Box, Button, List, ListItem, ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { HeaderStyled } from './HeaderStyled';

// nav items data;
const navItems = ['Home', 'Components', 'Pages', 'Docs'];

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <HeaderStyled>
        <Box className='headerBox' sx={{ color: scrollPosition > 50 ? 'black' : 'white', bgcolor: scrollPosition > 50 ? 'rgba(255, 255, 255, 0.9)' : 'transparent', boxShadow: scrollPosition > 50 ? '0px 3px 3px -2px rgba(145 158 171 / 0.2), 0px 3px 4px 0px rgba(145 158 171 / 0.14), 0px 1px 8px 0px rgba(145 158 171 / 0.12)' : 'none'}}>
            <Typography variant='h5' className='logoText'>
                ZONE <Box className='logoPoint'/>
            </Typography>

            <List className='headerList'>
                {navItems.map((item) => (
                    <ListItem disablePadding>
                        <ListItemButton className='listBtn'>
                            <Typography variant='subtitle2' className='navItem'>
                                {item}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box className='btnIcons'>
                <SearchIcon/>
                <SettingsOutlinedIcon className='settingIcon'/>
                <Button variant="contained" className='purchaseBtn' sx={{px: 2, py: 0.8}}>Purchase</Button>
            </Box>
        </Box>
    </HeaderStyled>
  )
}
