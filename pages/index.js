import {  Box , SimpleGrid } from "@chakra-ui/react"
import { fetchApi, baseURL } from "../utils/fetchApi"
import { fetchNews, baseNewsURL } from "../utils/fetchNews"
import CoinCard from "../components/CoinCard"
import Title from "../components/Title"
import GlobalStats from "../components/GlobalStats"
export default function Home({coins , statistics}) {

  return (
    

    <Box height={"100%"} width={"100%"} >
    <Box>
    <Box mb={[4,4,4]} ml={[8,6,6]}>
    <Title title={"Global Stats"} mr='2'/>
    </Box>
    <Box ml='13'>
    <Box ml= {[0,0,'16rem']} mt='8' >
     <GlobalStats statistics = {statistics} />
     </Box>
    </Box>

    
    </Box>
    <Box>
    <Box mb='6'>
    <Title title={"Top Coins"}/>
    </Box>
   
    <Box mb={[6,6,6]}>
    <SimpleGrid columns={[1, 2, 3]} spacing='50px' >
        {coins.map((coin) => <CoinCard coin = {coin} key={coin.uuid} />).slice(0,6)}
        </SimpleGrid>
        </Box>
        </Box>
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
      statistics,
    },
  };
}

