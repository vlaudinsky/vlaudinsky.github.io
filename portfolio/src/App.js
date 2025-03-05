import './App.css';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';

function App() {
    const theme = createTheme({
        colorSchemes: {
            dark: true,
        },
    });

    return (
        <ThemeProvider theme={theme} default="system">
            <div>Page</div>
        </ThemeProvider>
    );
}

export default App;
