import React, { Component } from "react";
import { Stack, Text } from '@chakra-ui/react';


export class AText extends Component {
    render(){
        return(
            <Stack lineHeight='0.75' opacity='0.5' textAlign='center' mt='10vh'>
                <Text fontFamily='heading' fontWeight='extrabold' fontSize='8.5vh'>LOREM</Text>
                <Text fontFamily='heading' fontWeight='extrabold' fontSize='10.5vh'>IPSUM</Text>
                <Text fontFamily='heading' fontWeight='extrabold' fontSize='8.5vh'>LOREM</Text>
            </Stack>
        )
    }
}
