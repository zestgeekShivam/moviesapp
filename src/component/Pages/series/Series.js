import React, { useEffect } from 'react'
import { Box, Stack, HStack, AspectRatio, Image, Heading, Text } from 'native-base';
import Data from '../../../feed/sample'
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateNav } from '../../../redux/slice/navSlice';


const Series = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        return (() => {
            dispatch(updateNav('Titles'))
        })
    });
    return (
        <ScrollView>
            {
                Data.entries.filter((elem) => {
                    return elem.programType === 'series'
                }).map((elem, i) => {
                    const { description, releaseYear, title, images, programType } = elem
                    const { PosterArt } = images
                    const { url } = PosterArt
                    return <Box key={i} alignItems="center">
                        <Box maxW='md' rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                            <Box>
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image
                                        source={{
                                            uri: `${url}`
                                        }} alt="image" />
                                </AspectRatio>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Text>
                                        <Heading size="md" ml="-1">
                                            {title}
                                        </Heading>
                                    </Text>
                                    <Text fontSize="xs" _light={{
                                        color: "violet.500"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        Best {programType} That We Can provide
                                    </Text>
                                </Stack>
                                <Text numberOfLines={2} fontWeight="400">
                                    {description}
                                </Text>
                                <HStack alignItems="center" space={4} justifyContent="space-between">
                                    <HStack alignItems="center">
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }} fontWeight="400">
                                            {releaseYear}
                                        </Text>
                                    </HStack>
                                </HStack>
                            </Stack>
                        </Box>
                    </Box>
                })
            }
        </ScrollView >
    )
}

export default Series