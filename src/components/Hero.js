import {
    Box,
    Button,
    Icon,
    Image,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import React from 'react';
import backgground from '../assets/img/hero.jpg';

export const Hero = () => {
    const bg = useColorModeValue('white', 'gray.800');

    return (
        <Box pos="relative" overflow="hidden" bg={bg}>
            <Box maxW="7xl" mx="auto">
                <Box
                    pos="relative"
                    pb={{
                        base: 8,
                        sm: 16,
                        md: 20,
                        lg: 28,
                        xl: 32,
                    }}
                    maxW={{
                        lg: '2xl',
                    }}
                    w={{
                        lg: 'full',
                    }}
                    zIndex={1}
                    bg={bg}
                    border="solid 1px transparent"
                >
                    <Icon
                        display={{
                            base: 'none',
                            lg: 'block',
                        }}
                        position="absolute"
                        right={0}
                        top={0}
                        bottom={0}
                        h="full"
                        w={48}
                        color={bg}
                        transform="translateX(50%)"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </Icon>
                    <Box
                        maxW={{
                            base: '7xl',
                        }}
                        px={{
                            base: 4,
                            sm: 6,
                            lg: 8,
                        }}
                        mt={{
                            base: 10,
                            sm: 12,
                            md: 16,
                            lg: 20,
                            xl: 28,
                        }}
                    >
                        <Box
                            w="full"
                            textAlign={{
                                base: 'center',
                                lg: 'left',
                            }}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text
                                fontSize={{
                                    base: '4xl',
                                    sm: '5xl',
                                    md: '6xl',
                                }}
                                letterSpacing="tight"
                                lineHeight="short"
                                fontWeight="extrabold"
                                color="gray.900"
                                _dark={{
                                    color: 'white',
                                }}
                            >
                                <Text
                                    display={{
                                        base: 'block',
                                        xl: 'inline',
                                    }}
                                    color="brand.600"
                                    _dark={{
                                        color: 'brand.400',
                                    }}
                                    fontWeight={700}
                                >
                                    Just Buy The Future
                                </Text>
                            </Text>
                            <Text
                                mt={{
                                    base: 3,
                                    sm: 5,
                                    md: 5,
                                }}
                                fontSize={{
                                    sm: 'lg',
                                    md: 'xl',
                                }}
                                maxW={{
                                    sm: 'xl',
                                }}
                                mx={{
                                    sm: 'auto',
                                    lg: 0,
                                }}
                                color="gray.500"
                            >
                                Türkiye’nin en kalifiye yatırımcı topluluğu Buy
                                The Future olarak, Türkiye'nin en yetkin
                                yatırımcılarını bir araya getiriyoruz. Amacımız,
                                üyelerimizin finansal piyasalarda yalnız
                                hissetmeden, birbirlerinden öğrenebileceği ve
                                gelişebileceği bir topluluk oluşturmak.
                                Türkiye'nin en kalifiye yatırımcılarıyla
                                birlikte, finansal dünyada güvenle adım atın!
                            </Text>
                            <Box
                                mt={{
                                    base: 5,
                                    sm: 8,
                                }}
                                display={{
                                    sm: 'flex',
                                }}
                                justifyContent={{
                                    sm: 'center',
                                    lg: 'start',
                                }}
                                fontWeight="extrabold"
                            >
                                <Box rounded="full" shadow="md">
                                    <Link
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfVuDy7XNpyN76MWGSHJrf8-PcLscGSLHnMp3Dv05na91TvdA/viewform?usp=sf_link"
                                        w="full"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        target="_blank"
                                    >
                                        <Button
                                            w="full"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            rounded="md"
                                            _hover={{
                                                bg: 'brand.700',
                                            }}
                                            px={{
                                                base: 8,
                                                md: 10,
                                            }}
                                            py={{
                                                base: 3,
                                                md: 4,
                                            }}
                                            cursor="pointer"
                                            size="lg"
                                        >
                                            Hemen Başvur
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                position={{
                    lg: 'absolute',
                }}
                top={{
                    lg: 0,
                }}
                bottom={{
                    lg: 0,
                }}
                right={{
                    lg: 0,
                }}
                w={{
                    lg: '50%',
                }}
                border="solid 1px transparent"
                display={{
                    base: 'none',
                    xl: 'block',
                }}
            >
                <Image
                    h={[56, 72, 96, 'full']}
                    w="full"
                    fit="cover"
                    src={backgground}
                    alt=""
                    loading="lazy"
                />
            </Box>
        </Box>
    );
};
