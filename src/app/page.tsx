'use client';

import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { BiMoon } from 'react-icons/bi';

const Home = () => {
  return (
    <Center h="100vh">
      <Heading size="lg">
        <Box>
          <Center>
            <BiMoon />
          </Center>
        </Box>
        <Text fontSize="sm">Next JS Chakra-UI Template</Text>
      </Heading>
    </Center>
  );
};

export default Home;
