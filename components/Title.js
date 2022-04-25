import { Center , Heading } from "@chakra-ui/react"

const Title = ({title}) => {
    return (
        <Center>
        <Heading as='h3' ml={-8} size='xl' mt={3} color="#06113C">
         {title}
      </Heading>
      </Center>
    )
}

export default Title