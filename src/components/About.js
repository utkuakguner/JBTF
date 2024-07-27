import {
    Box,
    Flex,
    GridItem,
    Icon,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';

import React from 'react';

export const About = () => {
    const Feature = props => {
        return (
            <Box>
                <Flex align="center" justify="center">
                    <Icon
                        boxSize={6}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        mr="8px"
                    >
                        {props.icon}
                    </Icon>
                    <Text
                        fontSize="xl"
                        fontWeight="medium"
                        lineHeight="6"
                        _light={{
                            color: 'gray.900',
                        }}
                    >
                        {props.title}
                    </Text>
                </Flex>
                <Box
                    mt={2}
                    color="gray.500"
                    _dark={{
                        color: 'gray.400',
                    }}
                    fontSize="lg"
                >
                    {props.children}
                </Box>
            </Box>
        );
    };

    return (
        <Flex
            bg="#edf3f8"
            _dark={{
                bg: '#3e3e3e',
            }}
            p={20}
            justifyContent="center"
            alignItems="center"
        >
            <Box
                py={12}
                bg="white"
                _dark={{
                    bg: 'gray.800',
                }}
                rounded="xl"
            >
                <Box
                    maxW="7xl"
                    px={{
                        base: 4,
                        lg: 8,
                    }}
                >
                    <Box
                        textAlign={{
                            lg: 'center',
                        }}
                    >
                        <Text
                            mt={2}
                            fontSize={{
                                base: '3xl',
                                sm: '4xl',
                            }}
                            lineHeight="8"
                            fontWeight="extrabold"
                            letterSpacing="tight"
                            _light={{
                                color: 'gray.900',
                            }}
                        >
                            Buy The Future Nedir?
                        </Text>
                        <Text
                            mt={4}
                            maxW="2xl"
                            fontSize="lg"
                            mx={{
                                lg: 'auto',
                            }}
                            color="gray.500"
                            _dark={{
                                color: 'gray.400',
                            }}
                        >
                            Buy The Future, Türkiye'nin en kalifiye
                            yatırımcılarını bir araya getiren bir topluluktur.
                            Amacımız, finansal piyasalarda bilgi ve deneyim
                            paylaşımını teşvik ederek, üyelerimizin daha
                            bilinçli ve güvenli yatırım kararları almalarını
                            sağlamaktır. Eğitim programlarımız, ustalık
                            sınıflarımız ve sektörün önde gelen isimlerinden
                            alacağımız desteklerle, yatırımcılarımızın
                            kendilerini sürekli olarak geliştirebileceği bir
                            ortam sunuyoruz. Buy The Future, finansal dünyada
                            yalnızlığa son vererek, birlikte büyümeyi ve
                            başarılı olmayı hedefleyen bir platformdur.
                        </Text>
                    </Box>

                    <Box mt={10}>
                        <Stack
                            spacing={{
                                base: 10,
                                md: 0,
                            }}
                            display={{
                                md: 'grid',
                            }}
                            gridTemplateColumns={{
                                md: 'repeat(2,1fr)',
                            }}
                            gridColumnGap={{
                                md: 8,
                            }}
                            gridRowGap={{
                                md: 10,
                            }}
                        >
                            <Feature
                                title="En Kalifiye Yatırımcı Topluluğu"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                }
                            >
                                Türkiye'nin en yetkin yatırımcılarını bir araya
                                getirerek bilgi ve deneyim paylaşımını
                                sağlıyoruz. Eğitim ve Gelişim Platformu
                            </Feature>

                            <Feature
                                title="Eğitim ve Gelişim Platformu"
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-book"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                        <path d="M3 6l0 13" />
                                        <path d="M12 6l0 13" />
                                        <path d="M21 6l0 13" />
                                    </svg>
                                }
                            >
                                Kapsamlı eğitim programlarımız ve ustalık
                                sınıflarımızla, üyelerimizin finansal piyasalar
                                hakkında derinlemesine bilgi sahibi olmasına
                                yardımcı oluyoruz.
                            </Feature>

                            <Feature
                                title="Uzman Desteği ve Rehberlik"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                }
                            >
                                Sektörün önde gelen isimleriyle iş birliği
                                yaparak, yatırımcılarımıza uzman desteği ve
                                rehberlik sunuyoruz.
                            </Feature>

                            <Feature
                                title="Birlikte Büyüme ve Başarı"
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-trending-up"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M3 17l6 -6l4 4l8 -8" />
                                        <path d="M14 7l7 0l0 7" />
                                    </svg>
                                }
                            >
                                Yatırımcılarımızın finansal dünyada yalnız
                                hissetmeden, birlikte büyümeleri ve başarılı
                                olmaları için güvenli bir ortam yaratıyoruz.
                            </Feature>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};
