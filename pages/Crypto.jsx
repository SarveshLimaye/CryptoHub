import React from "react";
import { Box , SimpleGrid} from "@chakra-ui/react";
import { baseURL, fetchApi } from "../utils/fetchApi";
import CoinCard from "../components/CoinCard";
import Title from "../components/Title";

const Crypto = ({coins}) => {
     
        return (
          <Box >
          <Box mb={8}>
          <Title title="Coins"/>
          </Box>
          <SimpleGrid columns={[1, 2, 3]} spacing='50px' spacingX='40px'>
           {coins.map((coin) =>  <CoinCard coin={coin} key={coin.uuid} />)}
        </SimpleGrid>
        </Box>
  

        
        )
    
  

}

export default Crypto

export async function  getStaticProps() {
  const apiData = await fetchApi(`${baseURL}/coins?limit=49`);
  const coins = apiData.data.coins;
  return {
   props: {
     coins,
   },
 };
}
