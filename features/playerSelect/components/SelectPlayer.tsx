import { Box, Button, Flex } from "@chakra-ui/react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Players } from "../types/players";

const SelectPlayer = () => {
  const [player, setPlayer] = useLocalStorage("Player", "");

  const select = (player: Players) => {
    setPlayer(JSON.stringify(player));
  };

  console.log(player);

  return (
    <Flex flexDir="column" gap={4} w="20%">
      <Button
        onClick={() => select(Players.PLAYER_1)}
        bg={player == "1" ? "green" : "gray"}
      >
        Player 1
      </Button>
      <Button
        onClick={() => select(Players.PLAYER_2)}
        bg={player == "2" ? "green" : "gray"}
      >
        Player 2
      </Button>
    </Flex>
  );
};

export default SelectPlayer;
