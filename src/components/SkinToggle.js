import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import SimpleTabPannel from './SimpleTabPannel';
import Box from '@mui/material/Box';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import { IconButton } from '@mui/joy';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton variant="soft"><Brightness4OutlinedIcon/></IconButton>
    // return <Button variant="soft">Change mode</Button>;
  }

  return (
    <IconButton
      variant="soft"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? <DarkModeIcon /> : <Brightness4OutlinedIcon />}
    </IconButton>
  );
}

export default function LoginFinal() {
  return (
    <main>
      <ModeToggle />
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
    </main>
  );
}
