import {
    Box,
    Button,
    CloseButton,
    Flex,
    Grid,
    HStack,
    IconButton,
    Image,
    Link,
    Text,
    VStack,
    VisuallyHidden,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

import { AiOutlineMenu } from 'react-icons/ai';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import React from 'react';

export default function Navbar() {
    const bg = useColorModeValue('white', 'gray.800');

    const mobileNav = useDisclosure();

    return (
        <>
            <Flex height="60px" />
            <Flex
                alignItems="center"
                justifyContent="space-between"
                mx="auto"
                w="100%"
                h="60px"
                px="24px"
                position="fixed"
                top="0px"
                left="0px"
                backgroundColor={bg}
                zIndex={3}
            >
                <Flex align="center">
                    <Link
                        href="/"
                        title="Just Buy The Future Home Page"
                        display="flex"
                        alignItems="center"
                    >
                        <Image
                            src="https://www.finder.com.au/finder-au/wp-uploads/2023/10/okx-logo.png"
                            height="30px"
                        />
                        <VisuallyHidden>Just Buy The Future</VisuallyHidden>
                    </Link>
                </Flex>
                <HStack display="flex" alignItems="center" spacing={1}>
                    <HStack
                        spacing={1}
                        mr={1}
                        color="brand.500"
                        display={{
                            base: 'none',
                            md: 'inline-flex',
                        }}
                    >
                        <Button variant="ghost">Features</Button>
                        <Button variant="ghost">Pricing</Button>
                        <Button variant="ghost">Blog</Button>
                        <ColorModeSwitcher />
                    </HStack>
                    <Box
                        display={{
                            base: 'inline-flex',
                            md: 'none',
                        }}
                    >
                        <IconButton
                            display={{
                                base: 'flex',
                                md: 'none',
                            }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color="gray.800"
                            _dark={{
                                color: 'inherit',
                            }}
                            variant="ghost"
                            icon={<AiOutlineMenu />}
                            onClick={mobileNav.onOpen}
                        />

                        <VStack
                            pos="absolute"
                            top={0}
                            left={0}
                            right={0}
                            display={mobileNav.isOpen ? 'flex' : 'none'}
                            flexDirection="column"
                            p={2}
                            pb={4}
                            bg={bg}
                            spacing={3}
                            rounded="sm"
                            shadow="sm"
                        >
                            <CloseButton
                                aria-label="Close menu"
                                onClick={mobileNav.onClose}
                            />
                            <Button w="full" variant="ghost">
                                Features
                            </Button>
                            <Button w="full" variant="ghost">
                                Pricing
                            </Button>
                            <Button w="full" variant="ghost">
                                Blog
                            </Button>
                            <ColorModeSwitcher />
                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </>
    );
}
