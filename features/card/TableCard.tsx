import Card from "./Card";

type TableCardProps = {
  deck: string[];
};

const TableCard = (props: TableCardProps) => {
  const { deck } = props;
  const currentUpper = deck[0];
  return <Card cardId={currentUpper} />;
};

export default TableCard;
