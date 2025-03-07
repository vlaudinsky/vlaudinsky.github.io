import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, IconButton } from '@mui/material';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';

function Header(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                bgcolor: 'background.default',
                color: 'text.primary',
                p: 3,
                minHeight: '56px',
                position:'sticky',
                zIndex:100,
                top:0,
            }}
        >
            <Box>
                Violet
            </Box>
            <Box 
                sx={{
                display: 'flex',
                marginLeft:'auto',
                marginRight:'0',

            }}>
                <Button href='#about'>About</Button>
                <Button href="#skills">Skills</Button>
                <Button href="#contact">Contact</Button>
                {
                    (props.isLightMode)?
                <IconButton aria-label="Light Mode" onClick={()=>props.setIsLightMode(false)}>
                    <LightModeIcon/>
                </IconButton>
                :
                <IconButton aria-label="Dark Mode" onClick={()=>props.setIsLightMode(true)}>
                    <BedtimeIcon />
                </IconButton>
                }
            </Box>
        </Box>
    );
}
export default Header;

