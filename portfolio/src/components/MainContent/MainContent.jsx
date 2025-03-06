import * as React from 'react';
import Box from '@mui/material/Box';
import { useColorScheme } from '@mui/material/styles';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
function MainContent() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection:"column",
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
                minHeight: '56px',
            }}
        >
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </Box>
    );
}
export default MainContent;

