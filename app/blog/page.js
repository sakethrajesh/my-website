import React from 'react'
import { Heading, Divider } from '@chakra-ui/react'
import BlogTable from '@/components/BlogTable'

function page() {
  return (
    <div>
        <Heading mt='10' >Blog</Heading>
        <Divider mt='1' />
        <BlogTable />
    </div>
  )
}

export default page