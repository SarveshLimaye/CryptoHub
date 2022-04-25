import { Text , Box ,Heading, Grid, GridItem, Center , Stat , StatLabel, StatArrow,StatNumber, Divider } from "@chakra-ui/react"
import { fetchApi } from "../utils/fetchApi"
import { baseURL } from "../utils/fetchApi"
import millify from "millify"
import { fetchNews} from "../utils/fetchNews"
import { baseNewsURL } from "../utils/fetchNews"
import CoinCard from "../components/CoinCard"
import Title from "../components/Title"
export default function Home({coins , statistics , news}) {
  console.log(news)

  return (
    

    <Box height={"100%"} width={"100%"} >
    <Box>
    <Title title={"Global Crypto Stats"}/>
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
    <Title title={"Top Coins"}/>
    <Grid templateColumns='repeat(2, 1fr)' gap={10} marginLeft={9} marginTop={12} marginBottom={6}>
        {coins.map((coin) => <CoinCard coin = {coin} key={coin.uuid} />).slice(0,4)}
        </Grid>
        </Box>
  )
}


export async function  getStaticProps() {
   const apiData = await fetchApi(`${baseURL}/coins`);
   const coins = apiData.data.coins;
   const statistics = await apiData.data.stats
   const news = await fetchNews(`${baseNewsURL}/news`)
   return {
    props: {
      coins,
      statistics,
      news
    },
  };
}

