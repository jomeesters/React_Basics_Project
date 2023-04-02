import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Card
      w={"260px"}
      h={"380px"}
      borderColor={"black"}
      borderStyle={"solid"}
      borderRadius={"md"}
      onClick={() => onClick(recipe)}
    >
      {/* Recipe Image */}
      <CardHeader height={"150"} p={0}>
        <Image
          src={recipe.recipe.image}
          alt={recipe.recipe.label}
          boxSize={"100%"}
          objectFit={"cover"}
          borderTopRadius={"md"}
        />
      </CardHeader>
      {/* Recipe Details*/}
      <CardBody p={5}>
        {/* Meal Type */}
        <Text fontSize={"xs"} color={"gray"} textTransform="uppercase">
          {recipe.recipe.mealType}
        </Text>
        {/* Recipe Name */}
        <Heading
          fontFamily={"serif"}
          fontSize={"xl"}
          fontWeight={"semibold"}
          mb={1}
        >
          {recipe.recipe.label}
        </Heading>
        {/* Recipe Health Labels */}
        {recipe.recipe.healthLabels.includes("Vegetarian") ||
        recipe.recipe.healthLabels.includes("Vegan") ? (
          <Flex justifyContent={"center"} wrap={"wrap"} gap={2} mb={2}>
            {recipe.recipe.healthLabels.map((healthLabel) => {
              if (healthLabel === "Vegetarian" || healthLabel === "Vegan") {
                return (
                  <>
                    <Text
                      fontSize={"2xs"}
                      textTransform={"uppercase"}
                      as={"mark"}
                      bg={"yellow.300"}
                      px={1}
                    >
                      {healthLabel}
                    </Text>
                  </>
                );
              }
              return null;
            })}
          </Flex>
        ) : null}
        {/* Recipe Diet Labels */}
        <Flex justifyContent={"center"} wrap={"wrap"} gap={2}>
          {recipe.recipe.dietLabels.map((dietLabel) => {
            return (
              <>
                <Text
                  color={"white"}
                  fontSize={"2xs"}
                  textTransform={"uppercase"}
                  as={"mark"}
                  bg={"whatsapp.600"}
                  px={1}
                >
                  {dietLabel}
                </Text>
              </>
            );
          })}
        </Flex>
        {/* Dish Type */}
        <Flex justifyContent={"center"} mt={2}>
          <Text fontSize={"sm"} color={"gray"}>
            Dish:{" "}
          </Text>
          <Text fontSize={"sm"} textTransform={"capitalize"} px={1}>
            {recipe.recipe.dishType}
          </Text>
        </Flex>
        {/* Cautions */}
        {recipe.recipe.cautions.length > 0 ? (
          <>
            <Text fontSize={"sm"} color={"gray"} mb={1}>
              Cautions:
            </Text>
            <Flex justifyContent={"center"} wrap={"wrap"} gap={2}>
              {recipe.recipe.cautions.map((caution) => (
                <Text
                  color={"white"}
                  key={caution}
                  fontSize={"2xs"}
                  textTransform={"uppercase"}
                  as={"mark"}
                  bg={"red.500"}
                  px={1}
                >
                  {caution}
                </Text>
              ))}
            </Flex>
          </>
        ) : null}
      </CardBody>
    </Card>
  );
};
