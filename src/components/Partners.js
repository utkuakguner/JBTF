import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

import React from 'react';

export const Partners = () => {
    return (
        <Box py="64px">
            <Text fontSize={40} fontWeight={700} mb='50px'>PARTNERLER</Text>
            <HStack justify="center" align="center" spacing={32} wrap="wrap">
                <Image
                    color="brand.500"
                    _dark={{
                        color: 'brand.400',
                    }}
                    alt="Testimonial avatar"
                    src="https://www.finder.com.au/finder-au/wp-uploads/2023/10/okx-logo.png"
                    maxH="80px"
                    maxW="100%"
                />
                <Image
                    color="brand.500"
                    _dark={{
                        color: 'brand.400',
                    }}
                    alt="Testimonial avatar"
                    src="https://osmanliresearch.rasyonet.com/assets/img/YatirimLogoRGB.png"
                    maxH="80px"
                    maxW="100%"
                />
            </HStack>
        </Box>
    );
};
