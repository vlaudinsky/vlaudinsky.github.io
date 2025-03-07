import * as React from 'react';
import Box from '@mui/material/Box';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

function MainContent() {
    return (
        <Box  sx={{
            bgcolor: 'background.default'
        }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection:"column",
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                p: 3,
                minHeight: '56px',
                overflowY:'auto',
                maxWidth:"80%",
                margin:'auto'
            }}
        >
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </Box>
    </Box>
    );
}
export default MainContent;

