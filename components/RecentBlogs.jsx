import React from 'react'
import { Box, Heading, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { getBlogPosts } from '../app/lib/data'

function RecentBlogs() {
    const [blogs, setBlogs] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const blogs = await getBlogPosts();
                setBlogs(blogs.documents);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

    }, []);

    return (
        <Box flex="1" w={["100%", "100%", "100%"]} pl="4">
            <Heading size="lg" mt="10">Recent Blogs</Heading>
            <Divider mt="1" />
            <UnorderedList mt="1" spacing={1}>
                {blogs.map((blog, index) => {
                    if (blog.publish) {
                        return (
                            <ListItem key={index}>
                                <Link href={`/blog/${blog.$id}`}>{blog.title}</Link>
                            </ListItem>
                        )
                    }
                })}
            </UnorderedList>
        </Box>
    )
}

export default RecentBlogs