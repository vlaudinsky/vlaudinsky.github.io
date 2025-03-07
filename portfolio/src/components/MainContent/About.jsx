import * as React from 'react';
import Box from '@mui/material/Box';
import hero from '../../assets/HeroImage.png'
function About() {
    return (
        <Box id="about"
            sx={{
                display: 'flex',
                flexDirection:"row",
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
                minHeight: '56px',
            }}
        >
            <Box width="50%">
                Hello! I am Violet. Bacon ipsum dolor amet anim ipsum irure magna beef sirloin elit commodo non jerky chicken ground round ribeye. Cow chicken aute prosciutto meatloaf, aliquip id mollit occaecat. Consectetur hamburger cillum short ribs minim id corned beef mollit flank. Deserunt kevin et, lorem corned beef ut ut alcatra aliquip sunt consectetur.
                Magna landjaeger minim shank ribeye strip steak hamburger laboris est tempor sed boudin lorem alcatra. Ribeye ad dolor pig excepteur qui nulla eiusmod tail. Tail sint in tongue reprehenderit salami quis pork biltong cillum doner. Pariatur pancetta culpa in consequat, brisket hamburger nulla pastrami mollit pig ipsum exercitation landjaeger in. Ut ad incididunt, shank meatloaf mollit quis aliquip ham excepteur. Qui andouille in chislic biltong laboris cupidatat rump aliqua sunt. Id sirloin shankle dolore tenderloin.
            </Box>
            <Box width="50%" display={"flex"} justifyContent={"center"}>
                <img src={hero}/>
            </Box>
        </Box>
    );
}
export default About;

