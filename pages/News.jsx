import { Box, Center, Grid, GridItem, Heading , Link, Text} from "@chakra-ui/react";
import React from "react";
import { fetchNews , baseURL } from "../utils/fetchNews";
import Image from "next/image";

const News = ({news}) => {
//   news.map( (item) => {
//       {item.image === undefined ? src : setSrc(item.image.thumbnail.contentUrl)}
//  }) 



    return (
       <Box>
        <Center>
            <Heading as='h3' mt={3} color={"#06113C"}>News</Heading>
        </Center>
        <Box >
        <Grid templateColumns='repeat(3, 1fr)' gap={9} marginLeft={10} marginTop={10} marginBottom={6}>
        {news.map((item,index) => {
            return (
                <GridItem key={index}>
                <Box ml={2} mt={2} width={300} height={400} border='dashed 1px' >
                <Heading as='h3' ml={3} mt={6} mr={2} size='sm'>{item.name} </Heading>
                <Center>
                <Box mt={4}>
                    {item.image === undefined ? <Image alt="news-image" src={'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} width={180} height={130} /> : <Image alt="news-image" src={item.image.thumbnail.contentUrl} width={180} height={130} />}
                </Box>
                </Center>
                <Box>
                    <Text ml={3} mt={6} mr={2} size='sm'>  {item.description.length > 100 ? `${item.description.slice(0, 85)}`  : item.description} , <Link color='teal.500' href={item.url}>View More</Link></Text>
                   {item.provider.map((singleProvider) => {
                          return (
                             <Box key={singleProvider.name}>
                            <Text  ml={3} mt={6} mr={2} size='sm'>{singleProvider.name}</Text>
                            <Box float={'right'} mb={5} mr={4} mt={-6}>
                            {singleProvider.image === undefined ? <Image alt="provider-image" src={'null'} width={300} height={300} /> : <Image alt={'provider-image'} mt={-3} src={singleProvider.image.thumbnail.contentUrl} width={35} height={35} />}
                            </Box>
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
   const apiData = await fetchNews(`${baseURL}/news/search?q=Cryptocurrency&count=15`);
   const news = await apiData.value;
   return{
       props:{
           news,
       }
   }
}
