import './App.css';
import { CssVarsProvider } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';

import Home from './views/Home';
import HideAppBar from './components/HideAppBar';
import ModeToggleButton from './components/ModeToggleButton';

function App() {
  return (
    <main>
    <HideAppBar /> 
    <CssVarsProvider>
      <ModeToggleButton />
      <CssBaseline />
      <Home />
    </CssVarsProvider>
    </main>
  );
}

export default App;
