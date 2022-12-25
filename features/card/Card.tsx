import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { CardType } from "./types/CardType";

type CardProps = {
  cardType: CardType;
  selectCurrentFunc: (arg1: CardType) => void;
};

const Card = (props: CardProps) => {
  const { cardType, selectCurrentFunc } = props;

  let value = "";
  switch (cardType.value) {
    case 11:
      value = "jack";
      break;
    case 12:
      value = "queen";
      break;
    case 13:
      value = "king";
      break;
    case 14:
      value = "ace";
      break;
    default:
      value = String(cardType.value);
  }
  const imgString = "/cards/" + value + "_of_" + cardType.category + ".png";
  return (
    <Box
      _hover={{ border: "2px solid red" }}
      onClick={() => selectCurrentFunc(cardType)}
    >
      <Image src={imgString} alt={imgString} width="100" height="200" />
    </Box>
  );
};

export default Card;
