import './App.css';
import { CssVarsProvider } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';

import Home from './views/Home';
import Box from '@mui/material/Box';
import HideAppBar from './components/HideAppBar';
import ModeToggleButton from './components/ModeToggleButton';

function App() {
  return (
    <main>
    <HideAppBar /> 
    <CssVarsProvider>
      <ModeToggleButton />
      <CssBaseline />
      <Box sx={{ padding: 2}}>
        <Home />
      </Box>
    </CssVarsProvider>
    </main>
  );
}

export default App;
