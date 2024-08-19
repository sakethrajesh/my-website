'use client'
import React from 'react'
import { Box, Divider } from '@chakra-ui/react'
import Markdown from 'react-markdown'
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

function BlogPage({ params }) {
    const md = `A paragraph with *emphasis* and **strong importance**.    
    > A block quote with and a URL: [Chakra UI](https://chakra-ui.com)
    `

    return (
        <Box mt='10'>
            <Markdown
                components={ChakraUIRenderer()}
                skipHtml
            >
                {md}
            </Markdown>

        </Box>
    )
}

export default BlogPage