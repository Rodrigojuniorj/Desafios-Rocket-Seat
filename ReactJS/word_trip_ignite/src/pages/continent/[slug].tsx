import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Cidades } from "../../components/Cidades";
import { Continent as ContinentContent } from "../../components/Continent";
import { Header } from "../../components/Header";

export default function Continent() {
  return(
    <Flex
      w="100vw"
      direction="column"
      mb="20"
    > 
      <Header />
      <Flex
        w="100vw"
        h={["200px","200px","500"]}
        bgImage="url(/bannerContinent/banner-europa.png)"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        justify={["center","flex-start"]}
        align={["center","end"]}
      >
        <Text
          pb={["0","10"]}
          pl={["0","40"]} 
          fontSize={["4xl","5xl"]}
          color="white"
          fontWeight="600"

        >
          Europa
        </Text>
      </Flex>
      <ContinentContent />
      <Text
        fontWeight="500"
        mt={["20","20","20","20","20","40"]}
        px={["4", "10", "15", "20", "40"]}
        fontSize={["3xl","3xl","4xl"]}
        color="gray.400"
      >
        Cidades +100
      </Text>
      <Cidades />
    </Flex>
  );
}
