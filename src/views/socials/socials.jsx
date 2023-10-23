import React, { useEffect } from "react";
import { Stack, Heading, HStack } from "@chakra-ui/react";
import "../../styles/styles.css";

import { SocialCard } from "../../components/socialcard/socialcard";


export const Socials = () => {
        return(
            <section id="Socials">
                <Stack id='SocCard' borderLeft='2px' borderRight='2px' borderColor='#702FD2' borderTop='2px' borderTopStyle='dotted' borderTopColor='#702FD2' color='white' bg='rgba(49, 49, 49, 0.75)' backdropBlur='1' h='100%' minH='50vh' height='50vh' width='80vw' ml='auto' mr='auto'>
                    <Heading textAlign='center' fontFamily='Itim' fontSize='5xl' mt='20' opacity='0.7'>
                        Socials
                    </Heading>
                    <HStack ml='auto' mr='auto' mt='5'>
                        <SocialCard link='https://www.instagram.com/energusss/' image='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png' platform='Instagram' name='@energusss'/>
                        <SocialCard link='https://www.facebook.com/energusss/' image='https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png' platform='Facebook' name='Maks Paciorek'/>
                        <SocialCard link='https://www.linkedin.com/in/energusss/' image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png' platform='LinkedIn' name='Maksymilian Paciorek'/>
                        <SocialCard link='https://github.com/MaksymilianPaciorek' image='https://cdn-icons-png.flaticon.com/512/25/25231.png' platform='GitHub' name='energusss'/>
                    </HStack>
                </Stack>
            </section>
        )
    }

