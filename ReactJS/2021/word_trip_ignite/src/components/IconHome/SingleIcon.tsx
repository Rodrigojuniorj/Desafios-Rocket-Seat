import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

interface SingleIconProps {
  image: string;
  texto: string;
}

export function SingleIcon({ image, texto }: SingleIconProps){
  const [isMediaQuery] = useMediaQuery('(min-width: 768px)')
  return(
    <Flex 
      direction={["row","row","column"]}
      align="center"
      justify={["center","center","flex-start"]}
    >
      { isMediaQuery && (
        <Image
          src={image} 
          w={["21"]}
        />
      )}
      <Text
        color="gray.400"
        fontWeight="600"
        pt={["0","0","5"]}
        fontSize={["xl","2xl","lg"]}
      >
       { !isMediaQuery && (
        <Text as="span" fontSize="7xl" color="yellow.800" pr="3">.</Text>
       )} {texto}
      </Text>
    </Flex>

  )
}