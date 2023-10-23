import React, { Component } from "react";
import { Stack, Text, Avatar } from '@chakra-ui/react';



export class Home extends Component {
    render(){
        return(
            <section id="home">
                <Stack textAlign='center' mt='10'>
                    <Text bgGradient='linear(to-l, #e6952c, #5016cc)' bgClip='text' fontWeight='extrabold' fontSize='4xl'>Maksymilian Paciorek</Text>
                    <Text fontSize='2xl' mt='-2' color='gray'>energusss</Text>
                    <Avatar border='2px solid white' size='2xl' ml='auto' mr='auto' mt='5' transition='350ms' _hover={{ border: '3px solid gray' }} name='' src='https://media.discordapp.net/attachments/1011630977996570695/1161639418759749682/IMG_2577.jpg?ex=65390803&is=65269303&hm=ac363389e5bc31e881d4547552f24d8260ef7cd90c040c9197d4b37bb7451c24&=&width=1266&height=950'/>
                </Stack>
            </section>
        )
    }
}
