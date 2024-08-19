import React from 'react'
import { HStack, Box, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import { NEXT_BODY_SUFFIX } from 'next/dist/lib/constants'

export default function PictureModal({ isOpen, onOpen, onClose, imageUrl, imageAlt }) {
    console.log('imageUrl', imageUrl)


    return (
        <Modal isOpen={isOpen} onClose={onClose} size="3xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <HStack spacing='24px'>
                        <Image src={imageUrl} alt={imageAlt} height="30%" />
                        <Box>
                            <p>Image Description</p>
                            <p>Image Description</p>
                            <p>Image Description</p>
                            <p>Image Description</p>
                        </Box>
                    </HStack>
                </ModalBody>

                <ModalFooter>
                    {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button> */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
