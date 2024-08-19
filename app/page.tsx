import React from 'react'
import { Divider, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Heading mt="10" >Hi, I'm <span className="text-primary">Saketh</span>! 👋🏾</Heading>
      <Divider mt='1' />
    </div>
  );
}
