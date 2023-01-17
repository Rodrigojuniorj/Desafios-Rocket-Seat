import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header( ) {
  return (
    <Flex
      as="header"
      w="100vw"
      h="20"
      mt="4"
      mx="auto"
      align="center"
      justifyContent="center"
    >
      <Logo />
    </Flex> 
  )
}