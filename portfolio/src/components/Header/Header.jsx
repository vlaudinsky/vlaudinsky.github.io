import * as React from 'react';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useColorScheme } from '@mui/material/styles';
import { Button } from '@mui/material';

function Header() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                bgcolor: 'background.default',
                color: 'text.primary',
                p: 3,
                minHeight: '56px',
            }}
        >
            <Box>
                Violet
            </Box>
            <Box 
                sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'flex-end',
            }}>
                <Button href='#About'>About</Button>
                <Button href="#Skills">Skills</Button>
                <Button href="#Contact">Contact</Button>
            </Box>
        </Box>
    );
}
export default Header;

