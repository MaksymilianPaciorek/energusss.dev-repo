import React, { Component } from "react";
import { HStack, Box, Image } from '@chakra-ui/react';



export class Gallery extends Component {
    render(){
        return(
            <HStack  maxW={[null, 200, 300, 400, 600, 800, 1000, 1200]} ml='auto' mr='auto' mt='10'>
                <Box>
                    <Image boxShadow='dark-lg' borderRadius='10' mr='5' ml='5' src='https://bit.ly/dan-abramov'/>
                </Box>
                <Box>
                    <Image boxShadow='dark-lg' borderRadius='10' mr='5' ml='5' src='https://bit.ly/dan-abramov'/>
                </Box>
                <Box>
                    <Image boxShadow='dark-lg' borderRadius='10' mr='5' ml='5' src='https://bit.ly/dan-abramov'/>
                </Box>
            </HStack>
        )
    }
}
