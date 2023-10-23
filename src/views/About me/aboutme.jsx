import React, { useEffect } from "react";
import { Heading, Stack, Divider, Text, Button} from "@chakra-ui/react";

import { Gallery } from "../../components/gallery/gallery";
import "../../styles/styles.css";

const AbtMe = () => {
    const element = document.getElementById('AboutMe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};

export const AboutMe = () => {
        return(
            <section id="AboutMe">
                <Stack id="AbtCard" border='2px' borderBottom='0' borderColor='#702FD2' color='white' bg='rgba(49, 49, 49, 0.75)' backdropBlur='1' h='110vh' mt='-20' minH='100vh' width='80vw' ml='auto' mr='auto' borderTopLeftRadius='20' borderTopRightRadius='20'>
                    <Button colorScheme='whiteAlpha' size='lg' variant='ghost' border='2px' width='36px' height='36px' fontSize='22px' textAlign='center' borderRadius='full' ml='auto' mr='auto' mt='5' cursor='pointer' onClick={AbtMe}>↓</Button>
                    <Heading textAlign='center' fontFamily='Itim' fontSize='5xl' mt='20' opacity='0.7' >
                        About Me
                    </Heading>
                    <Divider maxW={[null, 300, 400, 600, 800, 1000]} ml='auto' mr='auto' mt='3' mb='3'/>
                    <Text fontSize='xl' maxW={[null, 300, 400, 600, 800, 1000, 1200]} ml='auto' mr='auto' textAlign='center' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio recusandae aperiam earum facere corrupti ratione eos voluptatum debitis, impedit maiores. Iusto, commodi? Voluptates optio ut neque quam, quaerat repellat dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Text>
                    <Text fontSize='xl' maxW={[null, 300, 400, 600, 800, 1000, 1200]} ml='auto' mr='auto' textAlign='center' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum eius corrupti inventore suscipit quas perferendis velit iusto quidem beatae molestiae culpa, ratione enim maxime maiores optio, error dolore numquam laboriosam!</Text>
                    <Text fontSize='xl' maxW={[null, 300, 400, 600, 800, 1000, 1200]} ml='auto' mr='auto' textAlign='center' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ex esse magni maiores nulla, quam aspernatur neque iste a ipsam. Animi esse, molestias sapiente unde nam quam ea cum autem.</Text>
                    <Gallery />
                </Stack>
            </section>
        )
    }
