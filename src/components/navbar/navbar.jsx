import React, { Component } from "react";
import { Flex, Spacer, Box, Image, Button, ButtonGroup } from '@chakra-ui/react';


const AbtMe = () => {
    const element = document.getElementById('AboutMe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Socials = () => {
    const element = document.getElementById('Socials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};

export class Navbar extends Component {
    render(){
        return(
            <div className="Navbar">
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box m='5'>
                    <Image  mt='-4' width='350px' height='75px' src='https://media.discordapp.net/attachments/1011630977996570695/1164502434069086238/Frame_1.png?ex=65437267&is=6530fd67&hm=f46bc1ab149b0d4b8ee5577068afb71bc81908215d2cf4cdc80c7d808f00b665&=&width=2520&height=592'></Image>
                </Box>
                <Spacer />
                <ButtonGroup gap='5' mr='5'>
                    <Button colorScheme='whiteAlpha' size='lg' variant='ghost' onClick={AbtMe}>About me</Button>
                    <Button colorScheme='whiteAlpha' size='lg' variant='ghost' onClick={Socials}>Socials</Button>
                    <Button colorScheme='whiteAlpha' size='lg' variant='ghost'>Contact</Button>
                </ButtonGroup>
                </Flex>
            </div>
        )
    }
}


