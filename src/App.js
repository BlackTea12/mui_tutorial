import './App.css';
import LoginFinal from './components/SkinToggle';
import { CssVarsProvider } from '@mui/joy';
import HideAppBar from './components/HideAppBar';

function App() {
  return (
    <main>
    <HideAppBar /> 
    <CssVarsProvider>
      <LoginFinal/>
    </CssVarsProvider>
    </main>
  );
}

export default App;
