import React from "react";
import Styles from "../../styles/RightSidebar.module.css";
import { Box, Button, Image, useDisclosure } from "@chakra-ui/react";

import { Apple } from "@mui/icons-material";

import ModalAnya from "../modal/Modal";

const RightSidebar = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Box
      w="23%"
      h="100vh"
      px="20px"
      py="20px"
      bgColor="white"
      position="fixed"
      right={0}
      className={Styles.BoxContainer}
    >
        <Box
          w="350px"
          height="300px"
          // eslint-disable-next-line
          margin={0,"auto", 0, "auto"}
          borderRadius={18}
          className={Styles.InfoBox}
        >
            <Box p="15px">
                <Box mb="15px">
                    <h2 className={Styles.HeaderBox}>New to Twitter?</h2>
                    <p className={Styles.InfoText}>Sign up now to get your own personalized timeline!</p>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  gap="7px"
                  mb="15px"
                >               
                        <Box as={Button}
                        borderRadius={18}
                        bgColor="#1e1e1e"
                        color="#fff"
                        className={Styles.ButtonTiga}
                        display="flex"
                        justifyContent="space-between"
                        onClick={onOpen}
                        >
                             <Box className={Styles.TextContain}>

                                <Image 
                                    borderRadius="full"
                                    boxSize="24px"
                                    src="https://pbs.twimg.com/profile_images/1523318395860664320/wTNrjSwZ_400x400.jpg"
                                    />
                                    <Box>
                                <p>Sign in as Wildan</p>
                                <p>wildannurrahman30@gmail.com</p>
                                    </Box>
                             </Box>

                             <Image 
                                borderRadius="full"
                                boxSize="24px"
                                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                             />
                        </Box>

                        <ModalAnya isOpen={isOpen} onClose={onClose} onOpen={onOpen} images="https://pbs.twimg.com/profile_images/1523318395860664320/wTNrjSwZ_400x400.jpg"  />

                        <Box as={Button}
                         borderRadius={18}
                         bgColor="#1e1e1e"
                         color="#fff"
                         fontSize={14}
                         fontWeight="bold"
                         className={Styles.ButtonTiga}
                         >
                            <Apple className={Styles.IconApple} fontSize="small"/>
                            Sign up with Apple
                        </Box>
                        <Box as={Button}
                         borderRadius={18}
                         bgColor="#1e1e1e"
                         color="#fff"
                         fontSize={14}
                         fontWeight="bold"
                         className={Styles.ButtonTiga}
                         >
                            Create account
                        </Box>
                </Box>

                <Box>
                    <p className={Styles.InfoText}>By signing up, you agree to the <span>Terms of Service </span> 
                    and <span>Privacy Policy</span> including <span>Cookie Use</span>.</p>
                </Box>
            </Box>
        </Box>
    </Box>
  );
};

export default RightSidebar;
