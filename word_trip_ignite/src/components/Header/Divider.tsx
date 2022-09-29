import { Flex } from "@chakra-ui/react";

export function Divider() {
  return (
    <Flex
      justify="center"
      align="center"
    >
      <Flex
        display="block"
        w="100"
        mt="20"
        borderBottom="4px"
        borderColor="gray.400" 
      >
        ---------------------
      </Flex>
    </Flex>
  )
}