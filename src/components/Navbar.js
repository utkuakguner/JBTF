import {
  Box,
  Button,
  CloseButton,
  Flex,
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
import React from 'react';

export default function Navbar() {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Image />
              <VisuallyHidden>Choc</VisuallyHidden>
            </Link>
            <Text fontSize="xl" fontWeight="medium" ml="2">
              Choc
            </Text>
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
              <Button variant="ghost">Company</Button>
              <Button variant="ghost">Sign in</Button>
            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
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
                m={2}
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
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </header>
    </React.Fragment>
  );
}
