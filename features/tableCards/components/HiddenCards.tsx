import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const HiddenCards = () => {
  return (
    <Flex position="absolute" gap="8px">
      <Box _hover={{ border: "1px solid red" }} w="fit-content">
        <Image alt="Deck" src="/cards/card_back.png" width="100" height="200" />
      </Box>
      <Box _hover={{ border: "1px solid red" }} w="fit-content">
        <Image alt="Deck" src="/cards/card_back.png" width="100" height="200" />
      </Box>
      <Box _hover={{ border: "1px solid red" }} w="fit-content">
        <Image alt="Deck" src="/cards/card_back.png" width="100" height="200" />
      </Box>
    </Flex>
  );
};

export default HiddenCards;
