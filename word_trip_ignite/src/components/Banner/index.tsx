/* eslint-disable jsx-a11y/alt-text */
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["200px", "250px", "250px", "335px"]}
      bgImage="url(/background_home.png)"
      bgRepeat="no-repeat"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgSize="cover"
    >
      <Flex
        px={["4", "10", "15", "20", "36"]}
        w="100vw"
        align="center"
        justifyContent={["center", "space-between"]}
      >
        <div>
          <Heading color="gray.100" fontSize={["xl","2xl","4xl"]} fontWeight="600">5 Continentes, <br /> infinitas possibilidadaes</Heading>
          <Text color="gray.200" fontSize={["md","md","xl"]} mt="4">Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.</Text>
        </div>

        <div>
          <Image
            src='/Airplane.png'
            alt='Airplane'
            mt="120"
            display={["none", "none", "block"]}
            w={["300px", "300px", "300px", "430px"]}
          />
        </div>
      </Flex>
    </Flex>
  )
}