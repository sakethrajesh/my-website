'use client'
import React from 'react'
import { UnorderedList, ListItem, Flex, Box, Divider, Heading, Text, Button, Stack } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaGithubAlt } from 'react-icons/fa'
import { Link } from '@chakra-ui/next-js'
import RecentBlogs from '@/components/RecentBlogs'

export default function Home() {
  return (
    <div>
      <Heading mt="10">Hi, I&apos;m Saketh! 👋🏾</Heading>
      <Divider mt="1" />
      <Text mt="4">
        I&apos;m a software engineer who loves tackling new challenges. I like coding, basketball, and photography.
      </Text>
      <Text mt="4">
        Currently, I&apos;m pursuing a Master&apos;s in Computer Science at Virginia Tech and conducting research on path planning algorithms for self-driving cars.
      </Text>
      <Text mt="4">
        I&apos;ve had the opportunity to intern at Aurora (self-driving unicorn start up), IBM, and Peraton, where I&apos;ve contributed to a diverse range of products, including Operating Systems, Data Streaming Platforms, Machine Learning Pipelines, and Web Applications.
      </Text>

      <Flex wrap="wrap">
        <Box flex="1" w={["100%", "100%", "100%"]} pr="4">
          <Heading size="lg" mt="10">My Interests</Heading>
          <Divider mt="1" />
          <UnorderedList spacing={1}>
            <ListItem>Distributed Systems</ListItem>
            <ListItem>Machine Learning</ListItem>
            <ListItem>Autonomous Vehicles</ListItem>
          </UnorderedList>
        </Box>
        <RecentBlogs />
      </Flex>

      <Heading size="lg" mt="10">Contact Me</Heading>
      <Divider mt="1" />

      <Text mt="2">
        I&apos;m always open to new opportunities and collaborations.
      </Text>
      <Text mb="2">
        Feel free to reach out to me at <Link href="mailto:saketh@vt.edu">saketh@vt.edu</Link>.
      </Text>

      <Stack direction='row' spacing={4} align='center' justifyContent='left' wrap='wrap' mt="2">
        <Link href="https://www.linkedin.com/in/saketh-rajesh/" isExternal>
          <Button size="sm" colorScheme="linkedin"><FaLinkedin /></Button>
        </Link>
        <Link href="https://www.github.com/sakethrajesh" isExternal>
          <Button size="sm" colorScheme="gray"><FaGithub /></Button>
        </Link>
      </Stack>
    </div>
  );
}