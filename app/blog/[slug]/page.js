'use client'
import React, { useEffect } from 'react'
import { Box, Divider, Heading } from '@chakra-ui/react'
import Markdown from 'react-markdown'
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { getBlogPost } from '../../lib/data';

function BlogPage({ params }) {
    const [blog, setBlog] = React.useState(null)

    const md = `A paragraph with *emphasis* and **strong importance**.    
    > A block quote with and a URL: [Chakra UI](https://chakra-ui.com)
    `

    useEffect(() => {

        async function getBlog() {
            const blog = await getBlogPost(params.slug)

            return blog
        }

        getBlog().then((s) => {
            setBlog(s)
        })

    }, [params.slug])


    return (
        blog ? (
            <Box>
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
            </Box>
        ) : (
            <Box>
                <Heading mt='10'>Loading...</Heading>
            </Box>
        )
    )
}

export default BlogPage