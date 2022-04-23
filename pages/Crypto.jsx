import React from "react";
import { StatArrow , Box , Grid , GridItem ,Center ,Heading, Divider, Stat , StatLabel , StatHelpText ,Text} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { baseURL } from "../utils/fetchApi";
import Image from "next/image";
import { fetchApi } from "../utils/fetchApi";
import millify from "millify";

const Crypto = ({coins}) => {
     
        return (
          <Box>
          <Center>
            <Heading as='h2' size='xl' color={'#06113C'} mt={6} mb={6}>Coins</Heading>
          </Center>
          <Grid templateColumns='repeat(3, 1fr)' gap={4} marginLeft={10} marginTop={13} marginBottom={6}>
        {coins.map((coin) => {
          return (
        <GridItem  key= {coin.uuid} >
        <Box marginLeft={4}  background={"#fff"} marginRight="32px" key ={coin.uuid} height="250px" width="280px" border="black dotted 1px">
        <Center >
        <Heading as='h6' size='md' mt={4} color={coin.color}>{coin.name}</Heading>
        </Center>
        <Divider mt={2} variant={'dashed'}/>
        <Box ml='200px' mt={3}><Image src={coin.iconUrl} height="55px" width="57px"  ></Image></Box>
        <Text fontSize='md' ml={4} mt={'-50px'} >Symbol : {coin.symbol}</Text>
        

        <Stat ml={4}>
     <StatLabel mt={2}>Price</StatLabel>
      <Text fontSize='md'>${millify(coin.price)}</Text>
</Stat>



<Stat ml={4}>
     <StatLabel mt={3}>MarketCap</StatLabel>
      <Text fontSize='md'>{millify(coin.marketCap)}</Text>
</Stat>

<Stat float={'right'} mr={4}>
<Text fontSize='lg'>
      <StatArrow type={coin.change > 0 ? 'increase' : 'decrease'} />
      {coin.change }%
    </Text>
</Stat>
       
        
      </Box>
      </GridItem>
      
          )
        })}
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
