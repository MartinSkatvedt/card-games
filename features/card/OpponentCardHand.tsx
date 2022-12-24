import { Box } from "@chakra-ui/react";
import { CardType } from "./types/CardType";

type OpponentCardHandProps = {
  nCards: number;
};

const OpponentCardHand = (props: OpponentCardHandProps) => {
  const { nCards } = props;

  return <Box>CardHand</Box>;
};

export default OpponentCardHand;
