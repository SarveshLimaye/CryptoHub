import { GridItem, Box , Text , Divider  , Center , Heading , Stat, StatLabel , StatArrow} from "@chakra-ui/react"
import Image from "next/image";
import millify from "millify";
const CoinCard = ({coin}) => {
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
     <StatLabel mt={3}>MarketCap</StatLabel>
      <Text fontSize='md'>{millify(coin.marketCap)}</Text>
</Stat>

<Stat float={'right'} mr={4}>
<Text fontSize='lg'>
      <StatArrow type={coin.change > 0 ? 'increase' : 'decrease'} />
      {coin.change} %
    </Text>
</Stat>
       
        
      </Box>
      </GridItem>
    )

}

export default CoinCard