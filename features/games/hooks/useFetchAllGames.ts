import { useQuery } from "@tanstack/react-query";

const useFetchAllGames = () => {
  return useQuery<string[]>(["fetchAllGames"], async () => {
    const response = await fetch(`/api/fetchAllGames`);
    if (response.ok) {
      const json = await response.json();
      return json.gameIds;
    }
    return null;
  });
};

export default useFetchAllGames;
