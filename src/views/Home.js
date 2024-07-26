import * as React from 'react';
import Box from '@mui/material/Box';
import Sheet from '@mui/joy/Sheet';
import SimpleTabPannel from '../components/SimpleTabPannel';
export default function Home () {
  return (
    <React.Fragment>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', flexGrow: 1, gap: 2}}>
        <Sheet variant="outlined" color="neutral" sx={{ borderRadius: '16px', gridColumn: '1/4'}}>
          empty
        </Sheet>
        <Box sx={{ gridColumn: '4/5'}}>
          <SimpleTabPannel/>
        </Box>
      </Box>
    </React.Fragment>
  );
}