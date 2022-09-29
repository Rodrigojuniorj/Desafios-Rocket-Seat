import { Flex, SimpleGrid } from "@chakra-ui/react";
import { CidadesSingle } from "./CidadesSingle";

export function Cidades() {
  return (
    <Flex
      px={["4", "10", "15", "20", "40"]}
      mt={["10","10","20"]}
    >
      <SimpleGrid
        flex="1" 
        gap={["10","10","10","10","20"]} 
        minChildWidth={["200px","250px","250px","320px"]}
      >
        <CidadesSingle />
        <CidadesSingle />
        <CidadesSingle />
        <CidadesSingle />
        <CidadesSingle />
      </SimpleGrid>
    </Flex>

  )
}