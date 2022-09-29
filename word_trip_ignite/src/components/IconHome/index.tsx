import { Flex, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { SingleIcon } from "./SingleIcon";

export function IconHome(){
  const [isMediaQuery] = useMediaQuery('(min-width: 768px)')

  return (
    <Flex
      w="100vw"
      fontSize={20}
      mt={["50","50","140"]}
      align="center"
      maxWidth={1800}
      justifyContent="space-between"
      px={["4", "10", "20 ", "20", "40"]}
    > 
     <SimpleGrid
        flex="1" 
        gap={["10","10","20"]} 
        textAlign="center"
        minChildWidth={["150px","150px","250px","220px","120px"]}
        alignItems="center"
      >
        <SingleIcon image="/icons/cocktail.png" texto="Vida noturna" />
        <SingleIcon image="/icons/surf.png" texto="Praia" />
        <SingleIcon image="/icons/building.png" texto="Moderno" />
        <SingleIcon image="/icons/museum.png" texto="Clássico" />
        <SingleIcon image="/icons/earth.png" texto="E mais..." />
      </SimpleGrid>
    </Flex>
  )
}