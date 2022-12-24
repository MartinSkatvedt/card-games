import { Box, Flex } from "@chakra-ui/react";
import Card from "./Card";
import { CardType } from "./types/CardType";

type CardHandProps = {
  cards: CardType[];
};

const CardHand = (props: CardHandProps) => {
  const { cards } = props;

  const cardComponents = cards.map((card) => {
    return <Card cardType={card} key={card.category + card.value} />;
  });

  return (
    <Flex gap="8px" justifyContent="center" overflow="auto">
      {cardComponents}
    </Flex>
  );
};

export default CardHand;
