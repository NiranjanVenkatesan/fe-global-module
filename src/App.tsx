import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalNav from './components/GlobalNav';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalNav />
    </ChakraProvider>
  );
}

export default App;
