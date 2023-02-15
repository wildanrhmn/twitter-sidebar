import React from 'react'
import SearchBox from '../components/search/Search'
import Styles from "../../src/styles/Main.module.css"

import { Box, Button, Divider, Text } from '@chakra-ui/react'
import { MoreHoriz } from '@mui/icons-material'

const Main = () => {

  const contents= [
    {
      tagline: "Trending in Indonesia",
      headline: "Happy Valentine",
      tweets_count: "2.4M"
    },
    {
      tagline: "Programming",
      headline: "Bakar Mixue",
      tweets_count: "5.4M"
    },
    {
      tagline: "Business & Finance",
      headline: "Zero Two Best Waifu",
      tweets_count: "6.4M"
    },
    {
      tagline: "Trending in Zimbabwe",
      headline: "Happy Valentine",
      tweets_count: "7M"
    },
    {
      tagline: "Trending in Papua",
      headline: "Podcast Deddy",
      tweets_count: "26M"
    },
    {
      tagline: "Trending in Indonesia",
      headline: "Mati Kepanasan",
      tweets_count: "3.5M"
    },
  ]

  return (
   <Box className={Styles.mainSection}>

    <Box aria-label='container-search'>
      <SearchBox />
    </Box>
    
    <h2>Trends for you</h2>
    
    <Box mt="25px">
      {contents.map((content) => (
        <Box 
        as={Button}
        className={Styles.textContain}
        >
          <Box textAlign="left" display="flex" flexDirection="column">
            <p className={Styles.tagline}>{content.tagline}</p>
            <p className={Styles.headline}>{content.headline}</p>
            <p className={Styles.tagline}><span>{content.tweets_count}</span>Tweets</p>
          </Box>

          <MoreHoriz fontSize='medium' className={Styles.Horiz} />
        </Box>
      )
          
      )}

      <Box
        as={Button}
        py="24px"
        bgColor="transparent"
        width="100%"
        justifyContent="flex-start"
      >
        <Text fontSize="15px" fontWeight="400" color="#50b7f5">Show more</Text>
      </Box>
    </Box>

    <Divider orientation='horizontal' borderBottomWidth="2px"/>
   </Box> 
   
  )
}

export default Main