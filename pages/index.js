import { Text , Box ,Heading, Grid, GridItem, Center , Stat , StatLabel, StatArrow,StatNumber, Divider } from "@chakra-ui/react"
import { fetchApi } from "../utils/fetchApi"
import { baseURL } from "../utils/fetchApi"
import { fetchNews} from "../utils/fetchNews"
import { baseNewsURL } from "../utils/fetchNews"
import CoinCard from "../components/CoinCard"
import Title from "../components/Title"
import GlobalStats from "../components/GlobalStats"
export default function Home({coins , statistics , news}) {
  console.log(news)

  return (
    

    <Box height={"100%"} width={"100%"} >
    <Box>
    <Title title={"Global Crypto Stats"}/>
     <GlobalStats statistics = {statistics} />
    
    </Box>
    <Title title={"Top Coins"}/>
    <Grid templateColumns='repeat(3, 1fr)' gap={6} marginLeft={2} marginTop={12} marginBottom={6}>
        {coins.map((coin) => <CoinCard coin = {coin} key={coin.uuid} />).slice(0,6)}
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

