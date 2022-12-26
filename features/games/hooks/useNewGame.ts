import { useMutation } from "@tanstack/react-query";

const useNewGame = () => {
  return useMutation<string>({
    mutationFn: async () => {
      const response = await fetch("/api/createGame", {
        method: "POST",
      });
      const json = await response.json();
      return json.gameId;
    },
  });
};

export default useNewGame;
