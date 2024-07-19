import './App.css';
import ModeToggleButton from './components/ModeToggleButton';
import { CssVarsProvider } from '@mui/joy';
import HideAppBar from './components/HideAppBar';
import SimpleTabPannel from './components/SimpleTabPannel';
import Box from '@mui/material/Box';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
function App() {
  return (
    <main>
    <HideAppBar /> 
    <CssVarsProvider>
      <ModeToggleButton />
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <SimpleTabPannel />
        
        <Box sx={{ my: 2 }}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
        </Box>
      </Sheet>
    </CssVarsProvider>
    </main>
  );
}

export default App;
