import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Box from '@mui/material/Box';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import { IconButton } from '@mui/joy';

export default function ModeToggleButton() {
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
    <React.Fragment>
      <Box
        sx={{ // static position
          position: 'fixed', 
          bottom: 20, 
          right: 20, 
          zIndex: 2000 
        }}
      >
        <IconButton
          variant="soft"
          onClick={() => {
            setMode(mode === 'light' ? 'dark' : 'light');
          }}
        >
          {mode === 'light' ? <DarkModeIcon /> : <Brightness4OutlinedIcon />}
      </IconButton>
      </Box>
    </React.Fragment>
  );
}