import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function CidadesSingle() {
  return (
    <Box
      maxW={['100%',"100%",256,256]}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
    >
      <Image w="100%" h={["220","250","173"]} src="https://elondres.com/wp-content/uploads/2014/07/elondres-liverpool2.jpg" alt="Reino Unido" />

      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          fontSize="xl"
          color='gray.400'
        >
          Londres
          <Text
            mt='1'
            fontSize="md"
            color='gray.300'
          >
            Reino Unido
          </Text>
        </Box>

        
      </Box>
    </Box>
  )
}