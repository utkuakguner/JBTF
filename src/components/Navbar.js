import {
    Box,
    Button,
    CloseButton,
    Flex,
    HStack,
    IconButton,
    Image,
    Link,
    VStack,
    VisuallyHidden,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

import { AiOutlineMenu } from 'react-icons/ai';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import React from 'react';
import logoInverted from '../assets/img/header_logo.jpg';
import logoPlain from '../assets/img/header_logo_inverted.jpg';

export default function Navbar() {
    const bg = useColorModeValue('white', 'gray.800');

    const mobileNav = useDisclosure();

    const logo = useColorModeValue(logoInverted, logoPlain);

    return (
        <>
            <Flex height="70px" />
            <Flex
                alignItems="center"
                justifyContent="space-between"
                mx="auto"
                w="100%"
                h="70px"
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
                        <Image src={logo} height="55px" />
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
                        <Link href="https://www.instagram.com/justbuythefuture/" target='_blank'>
                            <Button variant="ghost">Instagram</Button>
                        </Link>
                        <Link href="https://x.com/justbtf"  target='_blank'>
                            <Button variant="ghost">Twitter</Button>
                        </Link>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfVuDy7XNpyN76MWGSHJrf8-PcLscGSLHnMp3Dv05na91TvdA/viewform?usp=sf_link"  target='_blank'>
                            <Button>Başvur</Button>
                        </Link>
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
                            <Link
                                href="https://www.instagram.com/justbuythefuture/"
                                w="full"
                                 target='_blank'
                            >
                                <Button w="full" variant="ghost">
                                    Instagram
                                </Button>
                            </Link>
                            <Link
                                href="https://x.com/justbtf"
                                w="full"
                                 target='_blank'
                            >
                                <Button w="full" variant="ghost">
                                    Twitter
                                </Button>
                            </Link>
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfVuDy7XNpyN76MWGSHJrf8-PcLscGSLHnMp3Dv05na91TvdA/viewform?usp=sf_link"
                                w="full"
                                 target='_blank'
                            >
                                <Button w="full">Başvur</Button>
                            </Link>
                            <ColorModeSwitcher />
                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </>
    );
}
