import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Card from "./Card";
import { CardType } from "./types/CardType";

type CardHandProps = {
  cards: CardType[];
};

const CardHand = (props: CardHandProps) => {
  const { cards } = props;
  const [currentCard, setCurrentCard] = useState<CardType>();

  const cardComponents = cards.map((card) => {
    return (
      <Card
        cardType={card}
        key={card.category + card.value}
        selectCurrentFunc={setCurrentCard}
      />
    );
  });

  return (
    <Flex gap="8px" justifyContent="center" overflow="auto">
      {cardComponents}
    </Flex>
  );
};

export default CardHand;
