import { Box, Center, SimpleGrid, GridItem, Heading , Link, Text} from "@chakra-ui/react";
import React from "react";
import { fetchNews , baseNewsURL } from "../utils/fetchNews";
import Image from "next/image";
import Title from "../components/Title";

const News = ({news}) => {

    return (
       <Box>
       <Title title={"News"} />
        <Box >
        <SimpleGrid columns={[1,2,3]} spacing='40px' marginLeft={3} marginTop={10} marginBottom={6}>
        {news.map((item,index) => {
            return (
                <GridItem key={index}>
                <Box ml={2} mt={2} width={300} height={400} border='dashed 1px' >
                <Heading as='h3' ml={3} mt={6} mr={2} size='sm'>{item.name.length > 60 ? `${item.name.slice(0, 60)}`  : item.name } </Heading>
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
                            {singleProvider.image === undefined ? <Image alt={'provider-image'} mt={-3} src={'https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'} width={35} height={item.length > 150 ? 25 : 35 }  /> : <Image alt={'provider-image'} mt={-3} src={singleProvider.image.thumbnail.contentUrl} width={35} height={item.length > 150 ? 25 : 35 }  />}
                            </Box>
                            </Box> 
                            //https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg
                          )
                   })}
                </Box>
                </Box>
            </GridItem>
      

            )  })}
            
        </SimpleGrid>
        </Box>
       </Box>
    );

}

export default News

export async function getStaticProps () {
   const apiData = await fetchNews(`${baseNewsURL}/news/search?q=Cryptocurrency&count=15`);
   const news = await apiData.value;
   return{
       props:{
           news,
       }
   }
}
