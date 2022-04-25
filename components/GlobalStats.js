import { Grid , GridItem , Stat , Box , StatLabel ,StatNumber } from "@chakra-ui/react"
import millify from "millify"

const GlobalStats = ({statistics}) => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={4} marginLeft={'140px'} marginTop={14} marginBottom={6}>

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
    )
}

export default GlobalStats