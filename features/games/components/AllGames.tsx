import { Box, Divider, Flex, Heading, Link, Spinner } from "@chakra-ui/react";
import useFetchAllGames from "../hooks/useFetchAllGames";
import NextLink from "next/link";

const AllGames = () => {
  const { data, isLoading } = useFetchAllGames();

  if (!data || isLoading) {
    return <Spinner />;
  }

  const gameLinks = data.map((id) => {
    return (
      <Link as={NextLink} href={`/game/${id}`} key={id}>
        {id}
      </Link>
    );
  });

  return (
    <Box border="2px solid white" p={2} borderRadius="4px">
      <Heading as="h2" size="lg" mb="4px">
        All Games
      </Heading>
      <Divider />
      <Flex direction="column">{gameLinks}</Flex>
    </Box>
  );
};

export default AllGames;
