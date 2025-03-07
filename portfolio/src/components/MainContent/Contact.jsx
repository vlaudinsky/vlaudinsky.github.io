import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function Contact() {

    function mailto(encoded){
        return "mailto:"+ atob(encoded);
    }
    return (
        <>
            <Box id="contact"
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
                Contact
            </Box> 
            <Box
                sx={{
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
                <Button href={mailto("dmxhdWRpbnNreUBnbWFpbC5jb20=")}>Email</Button>
                <Button href='https://github.com/vlaudinsky'>Github</Button>
                <Button href='https://www.linkedin.com/in/violet-laudinsky-209ba3195/'>LinkedIn</Button>
            </Box>
        </>
    );
}

export default Contact;
