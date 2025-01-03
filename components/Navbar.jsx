import React from 'react'
import { Button, Stack } from '@chakra-ui/react'
import Link from 'next/link'

function Navbar() {

    const menuItems = [
        {
            label: 'Home',
            href: '/',
            isActive: false
        },
        {
            label: 'Projects',
            href: '/projects',
            isActive: false
        },
        {
            label: 'Gallery',
            href: '/gallery',
            isActive: false
        },
        {
            label: 'Blog',
            href: '/blog',
            isActive: false
        },
        {
            label: 'Resume',
            href: '/SakethRajeshResume_2025.pdf',
            isActive: false
        },
    ]
    return (
        <Stack direction='row' spacing={4} align='center' justifyContent='left' wrap='wrap' >
            {menuItems.map((item, index) => (
                <Button key={index} colorScheme='teal' size='md' variant='link' mt='2' >
                    <Link href={item.href}>{item.label}</Link>
                </Button>
            ))}
        </Stack>
    )
}

export default Navbar