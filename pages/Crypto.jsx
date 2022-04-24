import React from "react";
import { Box , Grid  ,Center ,Heading} from "@chakra-ui/react";
import { baseURL } from "../utils/fetchApi";
import { fetchApi } from "../utils/fetchApi";
import CoinCard from "../components/CoinCard";

const Crypto = ({coins}) => {
     
        return (
          <Box>
          <Center>
            <Heading as='h2' size='xl' color={'#06113C'} mt={6} mb={6}>Coins</Heading>
          </Center>
          <Grid templateColumns='repeat(3, 1fr)' gap={4} marginLeft={3} marginTop={13} marginBottom={6}>
           {coins.map((coin) =>  <CoinCard coin={coin} key={coin.uuid} />)}
        </Grid>
        </Box>
  

        
        )
    
  

}

export default Crypto

export async function  getStaticProps() {
  const apiData = await fetchApi(`${baseURL}/coins`);
  const coins = apiData.data.coins;
  return {
   props: {
     coins,
   },
 };
}
