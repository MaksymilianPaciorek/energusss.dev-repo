import React, { useEffect } from "react";
import { Stack } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/navbar";
import { Home } from "../../components/home/home";
import { AText } from "../../components/text/text";
import { Gradient } from "../../components/gradient/gradient";

import '../../styles/styles.css'



export const HomeView = () => {
        return(
            <section id='homepage'>
                <Stack color='white' minH='100vh' bg='rgb(18, 17, 32)' backgroundImage='https://s3-alpha-sig.figma.com/img/d1b5/702f/bdd3b09a597e02aa35a7027e3629b620?Expires=1698624000&Signature=LCAaapAW3dSqW6zWjXCMzpKwndvoEiqWcxavITmxTf6vxeYN5a7e7a90QJbKQ7EbPRlx4r07uwH8omY~8pN631VmX77eV5VcUuLgdQbZ~B9yUABFqUhDWO~zQ3bR0z2qj8HSQcEyposmI7o01TL7Vdi0h~ifmgFiCW-9D6XaQ63FRh3bGzCIK-YWxfo0TRgHoMa2Jv-Brmud33vidkE3~Lmfd3af8XkaF6L3gVp3twZ~QMu2yYAwhwF0h5V5otK-f6g3QkW7zfcCN5eECq1UOJvpnVmMMMX6NULpaUgkuo9xqM36NlnPFOC4gYTE9chkit7AYo7y64E8EN6ild3vXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' backgroundPosition='center' h='100%'>
                    <Navbar />
                    <Gradient />
                    <Home />
                    <AText />
                </Stack>
            </section>
        )
}

