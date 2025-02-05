import React from 'react'
import { HStack, VStack, useBreakpointValue, Box, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import { NEXT_BODY_SUFFIX } from 'next/dist/lib/constants'

export default function PictureModal({ isOpen, onOpen, onClose, imageInfo }) {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="3xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{imageInfo.caption}</ModalHeader>
                <ModalCloseButton />
                <ModalBody className="h-screen flex items-center justify-center">
                    {isMobile ? (
                            <Image src={imageInfo.href} alt={imageInfo.title} />
                        // <VStack spacing='24px'>
                        //     <Box>
                        //         <p>Image Description</p>
                        //         <p>Image Description</p>
                        //         <p>Image Description</p>
                        //         <p>Image Description</p>
                        //     </Box>
                        // </VStack>
                    ) : (
                            <Image src={imageInfo.href} alt={imageInfo.title} />
                        // <HStack spacing='24px'>
                        //     <Box>
                        //         <p>Image Description</p>
                        //         <p>Image Description</p>
                        //         <p>Image Description</p>
                        //         <p>Image Description</p>
                        //     </Box>
                        // </HStack>
                    )}
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
