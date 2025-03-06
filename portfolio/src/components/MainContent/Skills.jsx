import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function Skills() {
    return (
        <>
            <Box id="#Skills"
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                }}
            >
                Skills
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                }}
            >
                    Front End
                    <Box>
                        <Button>HTML</Button>
                        <Button>Javascript</Button>
                        <Button>Typescript</Button>
                        <Button>React</Button>
                        <Button>NextJS</Button>
                        <Button>Redux</Button>
                        <Button>Ionic</Button>
                        <Button>Angular</Button>
                    </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                }}
            >
                    Styling & Theming 
                    <Box>
                        <Button>CSS</Button>
                        <Button>BootStrap</Button>
                        <Button>Styled-Components</Button>
                    </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                }}
            >
                    Backend 
                    <Box>
                        <Button>.Net</Button>
                        <Button>Express</Button>
                        <Button>MySQL</Button>
                    </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                }}
            >
                    Miscellaneous 
                    <Box>
                        <Button>Git</Button>
                        <Button>AWS</Button>
                        <Button>Docker</Button>
                    </Box>
            </Box>
        </>
    );
}
export default Skills;

