import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

function Skills() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    return (
        <>
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
                    Miscellaneous 
                    <Box>
                        <Button>Git</Button>
                        <Button>BootStrap</Button>
                        <Button>Styled-Components</Button>
                    </Box>
            </Box>
        </>
    );
}
export default Skills;

