'use client'
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

function NotFound() {
  return (
    <Flex justifyContent="center" alignItems="center" mt="20">
      <Box textAlign="center">
        <Heading as="h2" size="lg" mb="4">
          404 Not Found
        </Heading>
        <Text mb="4">Could not find requested resource</Text>
        <Link href="/" color="teal.500">
          Return Home
        </Link>
      </Box>
    </Flex>
  );
}

export default NotFound;
