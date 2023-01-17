import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

interface SlideSingleProps {
  continent: string;
  desciption?: string;
  image: string;
  url: string;
}

export function SlideSingle({ continent, desciption, image, url }: SlideSingleProps) {
  return (
    <Link href={`/continent/${url}`} passHref>
      <Box
        as="a"
        cursor="pointer"
        w="100%"
        h="100%"
      >
        <Flex
          h="100%"
          color="gray.200"
          fontWeight="700"
          bgImage={image}
          align="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          justifyContent="center"
          direction="column"
        >
          <Text fontSize="5xl">{continent}</Text>
          <Text fontSize="2xl" >{desciption}</Text>
        </Flex>

      </Box>
    </Link>
  )
}