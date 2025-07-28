import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import GlobalNav from './GlobalNav';

test('renders the GlobalNav component', () => {
  render(
    <Provider store={store}>
      <ChakraProvider>
        <GlobalNav />
      </ChakraProvider>
    </Provider>
  );
  const logoElement = screen.getByText(/Logo/i);
  expect(logoElement).toBeInTheDocument();
});
