import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function Contact() {

    function mailto(encoded){
        return "mailto:"+ atob(encoded);
    }
    return (
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
            Contact
            <Box>
                <Button href={mailto("dmxhdWRpbnNreUBnbWFpbC5jb20=")}>Email</Button>
                <Button href='https://github.com/vlaudinsky'>Github</Button>
                <Button href='https://www.linkedin.com/in/violet-laudinsky-209ba3195/'>LinkedIn</Button>
            </Box>
        </Box>
    );
}

export default Contact;
