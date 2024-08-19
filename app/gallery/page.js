import React from 'react'
import { Heading, Divider } from '@chakra-ui/react'
import GalleryFrame from '@/components/GalleryFrame'
import { getGalleryPosts } from '../lib/data'

export default async function galleryPage() {
    const posts = await getGalleryPosts()
    console.log('posts')
    console.log(posts)
    return (
        <div>
            <Heading mt='10' >Gallery</Heading>
            <Divider mt='1' />
            <GalleryFrame posts={posts.documents}/>
        </div>
    )
}
