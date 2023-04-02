import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipesPage = () => {
  const [userRecipeChoice, setUserRecipeChoice] = useState();
  return (
    <Box backgroundColor={"gray.200"} textAlign={"center"} p={8}>
      {userRecipeChoice ? (
        <RecipeChoice recipe={userRecipeChoice} onClick={setUserRecipeChoice} />
      ) : (
        <>
          <Heading
            fontFamily={"serif"}
            fontWeight={"semibold"}
            fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}
            color={"gray.700"}
          >
            The Taste Index
          </Heading>
          <RecipeSearch onSearch={setUserRecipeChoice} />
        </>
      )}
    </Box>
  );
};
