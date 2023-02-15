import React from 'react'
import SearchBox from '../components/search/Search'
import Styles from "../../src/styles/Main.module.css"

import { Box } from '@chakra-ui/react'

const Main = () => {
  return (
   <Box className={Styles.mainSection}>

    <Box aria-label='container-search'>
      <SearchBox />
    </Box>
    
    <h2>Trends for you</h2>
   </Box>
   
  )
}

export default Main