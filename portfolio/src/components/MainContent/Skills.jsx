import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function Skills() {
    return (
        <>
            <Box id="skills" 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    bgcolor: 'background.primary',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    width:'100%'
                }}
            >
                Skills
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    bgcolor: 'background.primary',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                    width:'100%'
                }}
            >
                    Front End
                    
            </Box>
            <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap:"wrap",
                    justifyContent: 'flex-start',
                    bgcolor: 'background.primary',
                    color: 'text.primary',
                    width:'100%',
                    gap:"1em"
                }}
            >
                        <Button variant="contained">HTML</Button>
                        <Button variant="contained">Typescript</Button>
                        <Button variant="contained">Javascript</Button>
                        <Button variant="contained">React</Button>
                        <Button variant="contained">NextJS</Button>
                        <Button variant="contained">Redux</Button>
                        <Button variant="contained">Ionic</Button>
                        <Button variant="contained">Angular</Button>
                    </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexWrap:"wrap",
                    bgcolor: 'background.primary',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                    width:'100%'
                }}
                >
                    Styling & Theming 
                    
            </Box>
            <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexWrap:"wrap",
                    bgcolor: 'background.primary',
                    color: 'text.primary',
                    width:'100%',
                    gap:"1em"
                }}
            >
                <Button variant="contained">CSS</Button>
                <Button variant="contained">BootStrap</Button>
                <Button variant="contained">Styled-Components</Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    bgcolor: 'background.primary',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                    width:'100%'
                }}
            >
                    Backend 
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    bgcolor: 'background.primary',
                    color: 'text.primary',
                    width:'100%',
                    gap:"1em"
                }}
            >
                <Button variant="contained">.Net</Button>
                <Button variant="contained">Express</Button>
                <Button variant="contained">MySQL</Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    bgcolor: 'background.primary',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                    minHeight: '56px',
                    width:'100%'
                }}
            >
                    Miscellaneous 
                    
            </Box>
            <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    bgcolor: 'background.primary',
                    color: 'text.primary',
                    width:'100%',
                    gap:"1em"
            }}>
                <Button variant="contained">Git</Button>
                <Button variant="contained">AWS</Button>
                <Button variant="contained">Docker</Button>
            </Box>
        </>
    );
}
export default Skills;

