import './App.css';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import { useState } from 'react';

function App() {
    const [isLightMode, setIsLightMode] = useState(false);
    const theme = createTheme({
        colorSchemes: {
            dark: isLightMode,
            light: !isLightMode
            },
        palette: {
            type: 'dark', // Set the theme to dark mode
            primary: {
              main: '#e91e63' // Set the primary color to pink
            },
        }
    });
    
    return (
        <ThemeProvider theme={theme} default="light">
                <Header 
                    isLightMode={isLightMode}
                    setIsLightMode={setIsLightMode}/>
                <MainContent/>
        </ThemeProvider>
    );
}

export default App;
