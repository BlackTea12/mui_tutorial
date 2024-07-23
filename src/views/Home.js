import * as React from 'react';
import Box from '@mui/material/Box';
import Sheet from '@mui/joy/Sheet';

export default function Home () {
  return (
    <React.Fragment>
      <Box sx={{ p: 1, m: 5, flexDirection: 'row'}}>
        <Sheet variant="outlined" color="neutral" sx={{ borderRadius: '16px', display: 'flex'}}>
          sheet 1
        </Sheet>
        <Sheet variant="outlined" color="neutral" sx={{ borderRadius: '8px', display: 'flex' }}>
          sheet 2
        </Sheet>
      </Box>
    </React.Fragment>
  );
}