import React from "react";
import { Box, Card } from "@mui/material";
import { keyframes } from "@mui/system";
import Title from "../Title";
import { OurclientStyled } from "./OurclientStyled";

const marqueeAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const imgs = [
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/airbnb-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/dropbox-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/tripadvisor-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/vimeo-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/facebook-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/google-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/heroku-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/lenovo-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/microsoft-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/netflix-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/slack-original.svg'},
    {src: 'https://zone-ui.vercel.app/assets/icons/brands/spotify-original.svg'},
]

export default function Ourclient() {
  return (
    <OurclientStyled>
        <Box>
            <Title title={'Our clients'} description={'Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam vitae tortor.'}/>
        </Box>

        <Box className='animationBigBox'>
            <Box className='animationBox' sx={{animation: `${marqueeAnimation} 50s linear infinite`}}>
                {imgs.map((item) => (
                    <Card className="animationItem">
                        <img src={item.src}/>
                    </Card>
                ))}
                {imgs.map((item) => (
                    <Card className="animationItem">
                        <img src={item.src}/>
                    </Card>
                ))}
            </Box>
        </Box>
    </OurclientStyled>
  );
}
