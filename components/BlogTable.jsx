'use client'
import React from 'react'
import { Skeleton, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, TableCaption } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { getBlogPosts } from '../app/lib/data'

function BlogTable() {
    const router = useRouter()

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
      <Skeleton
        height='75px'
        isLoaded={ blogs.length > 0 }
        fadeDuration={1}
      >
     
        <TableContainer mt='5'>
            <Table variant='simple'>
                <TableCaption>Just Some Thoughts to Ponder</TableCaption>
                <Tbody>
                    {blogs.map((blog) => {
                        if (blog.publish) {
                            return (
                                <Tr onClick={() => router.push(`/blog/${blog.$id}`)} key={blog.id}>
                                            <Td>{blog.date}</Td>
                                            <Td>{blog.title}</Td>
                                            <Td>{blog.tags}</Td>
                                    </Tr>
                            )
                        }
                    })
                    }
                </Tbody>
            </Table>
        </TableContainer>
        </Skeleton>
    )
}

export default BlogTable