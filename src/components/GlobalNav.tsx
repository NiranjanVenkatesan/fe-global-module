import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleMenu } from '../store/uiSlice';
import ProfileMenu from './ProfileMenu';
import Notifications from './Notifications';
import navigation from '../navigation.json';

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
        <SunIcon w={8} h={8} />
      </Flex>

      <Spacer />

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle} aria-label="Open menu">
        <HamburgerIcon />
      </Box>

      <Drawer placement="left" onClose={handleToggle} isOpen={isMenuOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton aria-label="Close menu" />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {navigation.map((item) => (
              <Button key={item.title} variant="ghost" width="full" my={2}>
                {item.title}
              </Button>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        {navigation.map((item) =>
          item.children ? (
            <Menu key={item.title}>
              <MenuButton as={Button} colorScheme="teal" aria-label={item.title}>
                {item.title}
              </MenuButton>
              <MenuList>
                {item.children.map((child) => (
                  <MenuItem key={child.title} aria-label={child.title}>
                    {child.title}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          ) : (
            <Button key={item.title} colorScheme="teal" aria-label={item.title}>
              {item.title}
            </Button>
          )
        )}
      </Box>

      <Notifications />
      <ProfileMenu />
    </Flex>
  );
};

export default GlobalNav;
