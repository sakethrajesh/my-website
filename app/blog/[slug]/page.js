'use client'
import React, { useEffect } from 'react'
import { VStack, Skeleton, Box, Divider, Heading } from '@chakra-ui/react'
import Markdown from 'react-markdown'
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { getBlogPost } from '../../lib/data';

function BlogPage({ params }) {
    const [blog, setBlog] = React.useState({})
    const [isloading, setisLoading] = React.useState(true)

    useEffect(() => {

        async function getBlog() {
            const blog = await getBlogPost(params.slug)

            return blog
        }

        getBlog().then((s) => {
            setBlog(s)
            setisLoading(false)
        })

    }, [params.slug])


    return (
        <>
            <Skeleton
                height='75px'
                isLoaded={!isloading}
                fadeDuration={1}
            >
                <Heading mt='10'>{blog.title}</Heading>
                <Divider mt='1' />
                <Box mt='5'>
                    <Markdown
                        components={ChakraUIRenderer()}
                        skipHtml
                    >
                        {blog.content}
                    </Markdown>
                </Box>
            </Skeleton>
        </>

    )
}

export default BlogPage