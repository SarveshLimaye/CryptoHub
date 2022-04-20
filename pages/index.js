import { Text , Box ,Heading, Grid, GridItem, Center , Stat , StatLabel, StatHelpText,StatNumber, Divider } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"
import { fetchApi } from "../utils/fetchApi"
import { baseURL } from "../utils/fetchApi"
import Image from "next/image"





export default function Home({coins}) {
  console.log(coins)
  const handleOnError = () => {
    setImgSrc("https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg");
  };

  return (
    <Box height={"100%"} width={"100%"} background={"#EEEEEE"}>
    <Center>
    <Heading as='h3' ml={-8} size='xl' mt={3} color="#06113C">
    Top 4 coins
  </Heading>
  </Center>
    <Grid templateColumns='repeat(2, 1fr)' gap={10} marginLeft={10} marginTop={12} marginBottom={6}>
        {coins.map((coin) => {
          return (
        <GridItem  key= {coin.uuid} >
        <Box marginLeft={12}  background={"#fff"} marginRight="32px" key ={coin.uuid} height="250px" width="300px" border="black dotted 1px">
        <Center >
        <Heading as='h6' size='md' mt={4} color={coin.color}>{coin.name}</Heading>
        </Center>
        <Divider mt={2} variant={'dashed'}/>
        <Box ml='200px' mt={3}><Image src={coin.iconUrl} height="55px" width="57px"  ></Image></Box>
        <Text fontSize='md' ml={4} mt={'-50px'} >Symbol : {coin.symbol}</Text>
        

        <Stat ml={4}>
     <StatLabel mt={2}>Price</StatLabel>
      <Text fontSize='md'>${coin.price}</Text>
</Stat>

<Stat ml={4}>
     <StatLabel mt={3}>BTCPrice</StatLabel>
      <Text fontSize='md'>{coin.btcPrice}</Text>
</Stat>
       
        
      </Box>
      </GridItem>
      
          )
        }).slice(0,4)}
        </Grid>
        </Box>
  )
}


export async function  getStaticProps() {
   const apiData = await fetchApi(`${baseURL}/coins`);
   const coins = apiData.data.coins;
   return {
    props: {
      coins,
    },
  };
}

