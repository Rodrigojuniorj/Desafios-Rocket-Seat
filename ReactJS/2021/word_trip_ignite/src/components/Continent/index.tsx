import { Flex } from "@chakra-ui/react";
import { ContinentText } from "./ContinentText";
import { Information } from "./Information";

export function Continent() {
  return(
    <Flex
      mt={"20"}
      w="100%"
      align="center"
      justify="center"
    >
      <Flex
        w="100%"
        direction={["column","column","column","column","row"]}
        px={["4", "10", "15", "20", "40"]}
      >
        <ContinentText 
        text="A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste" 
        />
        <Flex
          mt={["10","10","10","10","0"]}
          w="100%"
          justify={["space-between","space-between","space-between","space-between","space-evenly"]}
        >
          <Information />
        </Flex>
      </Flex>
      
    </Flex>
  )
}