import React from "react";
import { Box , Grid } from "@chakra-ui/react";
import { baseURL, fetchApi } from "../utils/fetchApi";
import CoinCard from "../components/CoinCard";
import Title from "../components/Title";

const Crypto = ({coins}) => {
     
        return (
          <Box>
          <Title title="Coins"/>
          <Grid templateColumns='repeat(3, 1fr)' gap={4} marginLeft={3} marginTop={13} marginBottom={6}>
           {coins.map((coin) =>  <CoinCard coin={coin} key={coin.uuid} />)}
        </Grid>
        </Box>
  

        
        )
    
  

}

export default Crypto

export async function  getStaticProps() {
  const apiData = await fetchApi(`${baseURL}/coins?limit=91`);
  const coins = apiData.data.coins;
  return {
   props: {
     coins,
   },
 };
}
