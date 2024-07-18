import './App.css';
import LoginFinal from './components/SkinToggle';
import { CssVarsProvider } from '@mui/joy';

function App() {
  return (
    <CssVarsProvider>
      <LoginFinal/>
    </CssVarsProvider>
  );
}

export default App;
