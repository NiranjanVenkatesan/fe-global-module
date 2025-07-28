import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from '@chakra-ui/react';

const ProfileMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton as={Avatar} size="sm" cursor="pointer" />
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
