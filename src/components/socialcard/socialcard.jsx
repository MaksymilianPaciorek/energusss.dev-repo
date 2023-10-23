import React, { Component } from "react";
import { Button, Image, Box, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";



export function SocialCard ({ link, image, platform, name }) {
        return(
                <Box border='2px' borderColor='white' borderRadius='15' ml='5' bgSize='cover' bgPosition='center' width='200px' height='250px' bgColor='rgba(255, 255, 255, 0.25)' >
                    <Link to={link}>
                        <Image src={image} width='150px' height='150px' ml='auto' mr='auto' mt='5'></Image>
                        <Text textAlign='center' fontSize='3xl' fontWeight='bold'>{platform}</Text>
                        <Text textAlign='center' fontSize='xl' lineHeight='0.2' opacity='0.75'>{name}</Text>
                    </Link>
                </Box>
        )
    }

