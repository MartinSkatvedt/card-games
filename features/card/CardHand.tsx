import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Card from "./Card";

type CardHandProps = {
  cards: string[];
};

const CardHand = (props: CardHandProps) => {
  const { cards } = props;
  const [currentCard, setCurrentCard] = useState<string>("");

  const cardComponents = cards.map((card) => {
    return <Card cardId={card} key={card} selectCurrentFunc={setCurrentCard} />;
  });

  return (
    <Flex gap="8px" justifyContent="center" overflow="auto">
      {cardComponents}
    </Flex>
  );
};

export default CardHand;
