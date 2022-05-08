import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { CalendarDate, Link45deg } from 'react-bootstrap-icons';

function Blog() {
  const color = useColorModeValue('gray.100', 'gray.600');
  return (
    <>
      <Heading size="lg" my="2rem">
        Writings
      </Heading>
      <Text mb="1rem">
        My blog posts covering web development, personal thoughts, and various
        things
      </Text>
      <Divider />
      <List mb="8">
        <ListItem
          display="flex"
          flexDirection="column"
          gap="4"
          my="4"
          p="2"
          _hover={{
            background: {color},
            rounded: 'lg',
          }}
        >
          <Heading size="md">System Shock on macOS using shocklate</Heading>
          <Text>
            Here's a short post on how to run System Shock Classic Edition on
            macOS
          </Text>
          <Stack>
            <Flex alignItems="center" gap="2">
              <CalendarDate />
              <Text fontSize="xs">March 21, 2022</Text>
            </Flex>
            <Flex alignItems="center" gap="1">
              <Link45deg />
              <Link href="#" fontSize="xs">
                /blog/new-place-new-chapter
              </Link>
            </Flex>
          </Stack>
        </ListItem>
        <ListItem
          display="flex"
          flexDirection="column"
          gap="4"
          my="4"
          p="2"
          _hover={{
            background:{color},
            rounded: 'lg',
          }}
        >
          <Heading size="md">System Shock on macOS using shocklate</Heading>
          <Text>
            Here's a short post on how to run System Shock Classic Edition on
            macOS
          </Text>
          <Stack>
            <Flex alignItems="center" gap="2">
              <CalendarDate />
              <Text fontSize="xs">March 21, 2022</Text>
            </Flex>
            <Flex alignItems="center" gap="1">
              <Link45deg />
              <Link href="#" fontSize="xs">
                /blog/new-place-new-chapter
              </Link>
            </Flex>
          </Stack>
        </ListItem>
      </List>
    </>
  );
}

export default Blog;
