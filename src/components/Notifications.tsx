import React from 'react';
import { IconButton, Box, Badge } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';

const Notifications: React.FC = () => {
  return (
    <Box>
      <IconButton
        aria-label="Notifications"
        icon={
          <>
            <BellIcon />
            <Badge colorScheme="red" variant="solid" position="absolute" top="-1" right="-1">
              3
            </Badge>
          </>
        }
        variant="ghost"
        color="white"
      />
    </Box>
  );
};

export default Notifications;
