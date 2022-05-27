import { Grid , GridItem , Stat , Box , StatLabel ,StatNumber, SimpleGrid } from "@chakra-ui/react"
import millify from "millify"

const GlobalStats = ({statistics}) => {
    return (
        <SimpleGrid columns={[1, 2, 2]} spacing='0px' >

 
    <Box ml={[8,8,14]} mt={2} width={250} height={100} >
      <Stat>
        <StatLabel>Total Coins</StatLabel>
        <StatNumber>{millify(statistics.totalCoins)}</StatNumber>
      </Stat>
    </Box>


  
    <Box ml={[8,1,-8]}  width={250} height={100} >
      <Stat>
        <StatLabel>Total Markets</StatLabel>
        <StatNumber>{millify(statistics.totalMarkets)}</StatNumber>
      </Stat>
    </Box>
  


    <Box ml={[8,8,14]} mt={2} width={250} height={100} >
      <Stat>
        <StatLabel>Total Exchanges</StatLabel>
        <StatNumber>{statistics.totalExchanges}</StatNumber>
      </Stat>
    </Box>
  

 
    <Box ml={[8,1,-8]} mt={2} width={250} height={100} >
      <Stat>
        <StatLabel>Total MarketCap</StatLabel>
        <StatNumber>{millify(statistics.totalMarketCap)}</StatNumber>
      </Stat>
    </Box>
  

  </SimpleGrid>
    )
}

export default GlobalStats