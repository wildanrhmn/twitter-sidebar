import React from 'react'
import Styles from "../../styles/SidebarLink.module.css"

import { Box } from '@chakra-ui/react'

const Sidebarlink = ({ text, Icon }) => {
  return (
    <Box className={Styles.link}>
        <Icon className={Styles.MuiSvgIconRoot} />
        <h2>{text}</h2>
    </Box>    
  )
}

export default Sidebarlink