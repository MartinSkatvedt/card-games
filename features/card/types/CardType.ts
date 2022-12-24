export enum CardCategory {
  "SPADES" = "spades",
  "DIAMONDS" = "diamonds",
  "HEARTS" = "hearts",
  "CLUBS" = "clubs",
}
export type CardType = {
  value: number;
  category: CardCategory;
};
