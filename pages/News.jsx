import { Box, Center, Grid, GridItem, Heading , Link, Text} from "@chakra-ui/react";
import React from "react";
import { fetchNews , baseURL } from "../utils/fetchNews";
import Image from "next/image";

const News = ({news,newsImage}) => {
    
    return (
       <Box>
        <Center>
            <Heading as='h3' mt={3} color={"#06113C"}>News</Heading>
        </Center>
        <Box >
        <Grid templateColumns='repeat(3, 1fr)' gap={10} marginLeft={10} marginTop={10} marginBottom={6}>
        {news.map((item,index) => {
            console.log(item.provider)
            return (
                <GridItem key={index}>
                <Box ml={2} mt={2} width={300} height={350} border='dashed 1px' >
                <Heading as='h3' ml={3} mt={6} mr={2} size='sm'>{item.name} </Heading>
                <Box>
                    <Text ml={3} mt={6} mr={2} size='sm'>{item.description} , <Link color='teal.500' href={item.url}>View More</Link></Text>
                   {item.provider.map((singleProvider) => {
                          return (
                             <Box key={singleProvider.name}>
                            <Text  ml={3} mt={6} mr={2} size='sm'>{singleProvider.name}</Text>
                            </Box> 
                          )
                   })}
                </Box>
                </Box>
            </GridItem>
      

            )  })}
            
        </Grid>
        </Box>
       </Box>
    );

}

export default News

export async function getStaticProps () {
   const apiData = await fetchNews(`${baseURL}/news/search?q=Cryptocurrencies&count=20`);
   const news = apiData.value;
   const newsImage = String(news.image)
   return{
       props:{
           news,
           newsImage
       }
   }
}
