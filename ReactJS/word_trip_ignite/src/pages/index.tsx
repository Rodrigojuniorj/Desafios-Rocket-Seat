import { Flex, Text} from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { IconHome } from '../components/IconHome'
import { Header } from '../components/Header'
import { Divider } from '../components/Header/Divider'
import { Slide } from '../components/Slide'

export default function Home() {
  return (
    <Flex
      direction="column"
      mb="200"
    > 
      <Header />
      <Banner />
      <IconHome />
      <Divider />
      <Flex
        mt="20"
        fontWeight="500"
        fontSize={["2xl","3xl","4xl"]}
        color="gray.400"
        justify="center"
        align="center"
        direction="column"
      >
      <Text>Vamos nessa?</Text>
      <Text>Então escolha seu continente</Text>
      <Flex
        mt="20"
        w="100vw"
        height="450"
      >
      <Slide /> 
      </Flex>
    </Flex>
  </Flex>    
  )
}