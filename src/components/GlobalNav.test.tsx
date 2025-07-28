import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import GlobalNav from './GlobalNav';
import navigation from '../navigation.json';

test('renders the GlobalNav component with dynamic navigation items', () => {
  render(
    <Provider store={store}>
      <ChakraProvider>
        <GlobalNav />
      </ChakraProvider>
    </Provider>
  );

  navigation.forEach((item) => {
    const navElement = screen.getByLabelText(item.title);
    expect(navElement).toBeInTheDocument();
  });
});
