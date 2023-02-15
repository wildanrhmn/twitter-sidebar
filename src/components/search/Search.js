import React from 'react'

import Styles from "../../styles/SearchComponent.module.css"

import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Settings, Search } from '@mui/icons-material'

const SearchBox = () => {
  return (
    <Box className={Styles.SearchBox}>
        <Box
          py="15px"
          px="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
            <Box width="90%">
                <InputGroup>
                    <InputLeftElement children={<Search />} />
                    <Input type='search' placeholder='Search Twitter' borderRadius={18} />
                </InputGroup>
            </Box>

                <Settings fontSize='medium' />
        </Box>
    </Box>
  )
}

export default SearchBox