import { Box, Flex, HStack, Image, Link, Stack, Text } from '@chakra-ui/react';

import React from 'react';

export default function Testimonials() {
    const Testimonial = ({ message, name }) => (
        <Box
            w={{ base: 'xs', lg: 'md' }}
            py={4}
            px={8}
            bg="white"
            _dark={{
                bg: 'gray.800',
            }}
            shadow="lg"
            rounded="lg"
            pt="50px"
        >
            <Flex
                justifyContent={{
                    base: 'center',
                    md: 'end',
                }}
                mt={-20}
            >
                <Image
                    w={16}
                    h={16}
                    fit="cover"
                    rounded="full"
                    borderStyle="solid"
                    borderWidth={1}
                    color="brand.500"
                    _dark={{
                        color: 'brand.400',
                    }}
                    alt="Testimonial avatar"
                    src="https://cdn-icons-png.freepik.com/512/8212/8212616.png"
                    backgroundColor='white'
                    p={1}
                />
            </Flex>

            {/* <Text
                color="gray.800"
                _dark={{
                    color: 'white',
                }}
                fontSize={{
                    base: '2xl',
                    md: '3xl',
                }}
                mt={{
                    base: 2,
                    md: 0,
                }}
                fontWeight="bold"
            >
                Design Tools
            </Text> */}

            <Text
                color="gray.600"
                _dark={{
                    color: 'gray.200',
                }}
                minH="200px"
                fontSize="19px"
                textAlign="left"
                mt="24px"
            >
                {message}
            </Text>
            <Flex justifyContent="end" mt={4}>
                <Link
                    fontSize="xl"
                    color="brand.500"
                    _dark={{
                        color: 'brand.300',
                    }}
                    fontWeight={600}
                >
                    - {name}
                </Link>
            </Flex>
        </Box>
    );

    return (
        <Box
            py="64px"
            _dark={{
                bg: '#3e3e3e',
            }}
            pb="32px"
        >
            <Text fontSize={34} fontWeight={700} mb="80px">
                YORUMLAR
            </Text>
            <HStack
                spacing={8}
                alignItems="center"
                justifyContent="center"
                wrap="wrap"
            >
                <Testimonial
                    name="Celal"
                    message={
                        "Buy The Future'a katıldığımda, gerçekten ne kadar eksik olduğumu fark ettim. Eğitim programları ve topluluk desteği sayesinde, yatırım kararlarımda çok daha bilinçli hale geldim."
                    }
                />
                <Testimonial
                    name="Berk"
                    message={
                        'Bu topluluk sayesinde finansal piyasalarda yalnız olmadığımı hissettim. Özellikle ustalık sınıfları ve uzmanlardan gelen bilgiler çok değerliydi.'
                    }
                />
                <Testimonial
                    name="Nesrin"
                    message={
                        'Buy The Future, finansal bilgilerimi genişletmek ve kendimi geliştirmek için mükemmel bir yer oldu. Topluluk üyeleriyle olan etkileşimler ve eğitimlerden öğrendiklerim sayesinde, yatırım stratejilerimi büyük ölçüde iyileştirdim. Herkese tavsiye ederim.'
                    }
                />
            </HStack>
        </Box>
    );
}
