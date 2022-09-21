import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme/GlobalsTheme';
import NavBar from './UI/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
