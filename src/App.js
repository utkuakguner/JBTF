import { Box, Flex, Grid } from '@chakra-ui/react';

import { About } from './components/About';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { Partners } from './components/Partners';
import React from 'react';
import Testimonials from './components/Testimonials';

function App() {
    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh">
                <Navbar />
                <Hero />
                <Partners />
                <Testimonials />
                <About />
                <Footer />
            </Grid>
        </Box>
    );
}

export default App;
