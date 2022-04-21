import { Text , Box ,Heading, Grid, GridItem, Center , Stat , StatLabel, StatHelpText,StatNumber, Divider } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"
import { fetchApi } from "../utils/fetchApi"
import { baseURL } from "../utils/fetchApi"
import Image from "next/image"
import millify from "millify"





export default function Home({coins , statistics}) {
  console.log(statistics)

  return (
    

    <Box height={"100%"} width={"100%"} >
    <Box>
    <Center>
    <Heading as='h3' ml={-8} size='xl' mt={3} color="#06113C">
     Global Crypto stats
  </Heading>
  </Center>
  <Grid templateColumns='repeat(2, 1fr)' gap={4} marginLeft={'80px'} marginTop={14} marginBottom={6}>
  <GridItem>
    <Box ml={8} mt={2} width={250} height={100} >
      <Stat>
        <StatLabel>Total Coins</StatLabel>
        <StatNumber>{statistics.totalCoins}</StatNumber>
      </Stat>
    </Box>
  </GridItem>

  <GridItem>
    <Box ml={8} mt={2} width={250} height={100} >
      <Stat>
        <StatLabel>Total Coins</StatLabel>
        <StatNumber>{millify(statistics.totalCoins)}</StatNumber>
      </Stat>
    </Box>
  </GridItem>

  <GridItem>
    <Box ml={8}  width={250} height={100} >
      <Stat>
        <StatLabel>Total Markets</StatLabel>
        <StatNumber>{millify(statistics.totalMarkets)}</StatNumber>
      </Stat>
    </Box>
  </GridItem>

  <GridItem>
    <Box ml={8} mt={2} width={250} height={100} >
      <Stat>
        <StatLabel>Total Exchanges</StatLabel>
        <StatNumber>{statistics.totalExchanges}</StatNumber>
      </Stat>
    </Box>
  </GridItem>

  <GridItem>
    <Box ml={8} mt={2} width={250} height={100} >
      <Stat>
        <StatLabel>Total MarketCap</StatLabel>
        <StatNumber>{millify(statistics.totalMarketCap)}</StatNumber>
      </Stat>
    </Box>
  </GridItem>

  </Grid>
    
    </Box>
    <Center>
    <Heading as='h3' ml={-8} size='xl' mt={3} color="#06113C">
    Top 4 coins
  </Heading>
  </Center>
    <Grid templateColumns='repeat(2, 1fr)' gap={10} marginLeft={9} marginTop={12} marginBottom={6}>
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
      <Text fontSize='md'> $ {millify(coin.price)}</Text>
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
   const statistics = await apiData.data.stats
   return {
    props: {
      coins,
      statistics
    },
  };
}

