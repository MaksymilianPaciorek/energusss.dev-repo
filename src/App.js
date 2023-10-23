import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/styles.css'

import { HomeView } from './views/Home view/homeview';
import { AboutMe } from './views/About me/aboutme';
import { Socials } from './views/socials/socials';



function App() {
  return (
      <ChakraProvider>
          <HomeView />
          <AboutMe />
          <Socials />
      </ChakraProvider>
  );
}

export default App;
