'use client'
import React from 'react'
import {Stack, Box, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import PictureModal from '@/components/PictureModal';



function GalleryFrame({ posts }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedImage, setSelectedImage] = React.useState({})

    const onImageSelect = (image) => {
        setSelectedImage(image)
        onOpen()
    }

    return (
        <>
        <Box
            padding={4}
            w="100%"
            maxW="900px"
            mx="auto"
            sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
        >
            {posts.map((src, index) => (
                <Image
                    key={index}
                    w="100%"
                    // borderRadius="xl"
                    mb={2}
                    d="inline-block"
                    src={src.href}
                    alt="Alt"
                    onClick={() => {
                        setSelectedImage(src);
                        onOpen();
                    }}
                    />
                ))}
                <PictureModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} imageInfo={selectedImage} />
        </Box>
       
        </>

    )
}

export default GalleryFrame