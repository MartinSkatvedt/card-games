import { Box, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import useCard from "./hooks/useCard";

type CardProps = {
  cardId: string;
  selectCurrentFunc?: (arg1: string) => void;
};

const Card = (props: CardProps) => {
  const { cardId, selectCurrentFunc } = props;
  const { data, isLoading } = useCard(cardId);

  if (!data || isLoading) {
    return (
      <Box>
        <Spinner />
      </Box>
    );
  }
  let value = "";
  switch (data.value) {
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
      value = String(data.value);
  }
  const imgString = "/cards/" + value + "_of_" + data.category + ".png";
  return (
    <Box
      _hover={{ border: "2px solid red" }}
      onClick={() => selectCurrentFunc && selectCurrentFunc(cardId)}
    >
      <Image src={imgString} alt={imgString} width="100" height="200" />
    </Box>
  );
};

export default Card;
