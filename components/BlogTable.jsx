'use client'
import React from 'react'
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, TableCaption } from '@chakra-ui/react'
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
        <TableContainer mt='5'>
            <Table variant='simple'>
                <TableCaption>Pondering</TableCaption>
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
    )
}

export default BlogTable