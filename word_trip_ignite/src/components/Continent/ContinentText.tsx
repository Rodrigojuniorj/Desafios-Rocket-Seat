import { Text } from "@chakra-ui/react";

interface ContinentTextProps {
  text: string;
}

export function ContinentText({ text }: ContinentTextProps) {
  return (
    <Text
      color="gray.400"
      maxWidth={800}
      fontSize={["xl","xl","xl","xl","2xl"]}
      lineHeight="36px"
      textAlign="justify"
    >
      {text}
    </Text>
  )
}