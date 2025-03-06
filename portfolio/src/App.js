import './App.css';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
    const theme = createTheme({
        colorSchemes: {
            dark: true,
        },
    });

    return (
        <ThemeProvider theme={theme} default="system">
            <div>
                <Header/>
                <MainContent/>
            </div>
        </ThemeProvider>
    );
}

export default App;
