import { Box } from "@chakra-ui/react";
import HiddenCards from "./HiddenCards";
import OpenCards from "./OpenCards";

type TableCardsProps = {
  openCards: string[];
};

const TableCards = (props: TableCardsProps) => {
  const { openCards } = props;

  return (
    <Box display="flex">
      <HiddenCards />
      <OpenCards cards={openCards} />
    </Box>
  );
};

export default TableCards;
