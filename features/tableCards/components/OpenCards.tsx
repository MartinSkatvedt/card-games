import { Flex } from "@chakra-ui/react";
import CardHand from "../../card/CardHand";

type OpenCardsProps = {
  cards: string[];
};

const OpenCards = (props: OpenCardsProps) => {
  const { cards } = props;
  return (
    <Flex position="absolute">
      <CardHand cards={cards} />
    </Flex>
  );
};

export default OpenCards;
