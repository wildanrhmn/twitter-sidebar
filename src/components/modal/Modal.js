import { 
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Image,
    Center,
} from "@chakra-ui/react";

const ModalAnya = ({ isOpen, onOpen, onClose, images }) => {

    return(
        <>
            <Modal
              isCentered
              onClose={onClose}
              isOpen={isOpen}
              motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Anya Forger</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Center>
                            <Image borderRadius="full" boxSize="300px" src={images}  />
                        </Center>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalAnya;