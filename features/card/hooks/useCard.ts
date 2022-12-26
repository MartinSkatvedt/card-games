import { useQuery } from "@tanstack/react-query";
import { CardApiType } from "../../../models/CardModel";

const useCard = (cardId: string) => {
  return useQuery<CardApiType>([cardId], async () => {
    const response = await fetch(`/api/fetchCard/${cardId}`);
    if (response.ok) {
      const json = await response.json();
      return json.cardData;
    }
    return null;
  });
};

export default useCard;
