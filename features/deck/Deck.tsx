import { Box } from "@chakra-ui/react";
import Image from "next/image";

type DeckProps = {};

const Deck = (props: DeckProps) => {
  return (
    <Box _hover={{ border: "1px solid red" }} w="fit-content">
      <Image alt="Deck" src="/cards/card_back.png" width="100" height="200" />
    </Box>
  );
};

export default Deck;
