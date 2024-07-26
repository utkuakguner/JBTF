import { Box, Grid } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/Navbar';
import React from 'react';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Navbar />
        <Testimonial />
      </Grid>
    </Box>
  );
}

export default App;
