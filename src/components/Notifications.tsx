import React from 'react';
import { IconButton, Box } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';

const Notifications: React.FC = () => {
  return (
    <Box>
      <IconButton
        aria-label="Notifications"
        icon={<BellIcon />}
        variant="ghost"
        color="white"
      />
    </Box>
  );
};

export default Notifications;
