import { Box, Flex, Grid } from '@chakra-ui/react';

import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import React from 'react';
import Testimonial from './components/Testimonial';

function App() {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh">
                <Navbar />
                <Hero />
                <Flex>
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                </Flex>
            </Grid>
        </Box>
    );
}

export default App;
