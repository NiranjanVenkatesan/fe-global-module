import React from 'react';
import { Box, Flex, Heading, Spacer, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleMenu } from '../store/uiSlice';
import ProfileMenu from './ProfileMenu';
import Notifications from './Notifications';

const GlobalNav: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="brand.700"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Logo
        </Heading>
      </Flex>

      <Spacer />

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: isMenuOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Button colorScheme="teal">Home</Button>
        <Button colorScheme="teal">Assessments</Button>
        <Button colorScheme="teal">Lessons</Button>
        <Button colorScheme="teal">Progress</Button>
        <Button colorScheme="teal">Doubt Solver</Button>
      </Box>

      <Notifications />
      <ProfileMenu />
    </Flex>
  );
};

export default GlobalNav;
