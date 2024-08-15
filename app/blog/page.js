import { Divider } from '@nextui-org/react'
import BlogTable from '@/components/BlogTable'
import React from 'react'

function Blog() {
  return (
    <>
        <h1 className='text-4xl font-bold pt-7'>Blog</h1>
        <Divider className="my-4" />
        <BlogTable />
    </>
  )
}

export default Blog