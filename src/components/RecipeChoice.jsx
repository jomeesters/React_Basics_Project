import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Center>
      <Box
        w={{ base: "100%", md: "80%", xl: "50%" }}
        h={"100%"}
        backgroundColor={"whiteAlpha.900"}
      >
        {/* Back Button to return to RecipeSearch */}
        <Flex>
          <IconButton
            m={4}
            justifyContent={"left"}
            aria-label="Back"
            size={{ base: "sm", md: "md" }}
            icon={<ArrowBackIcon boxSize={8} color={"blue.500"} />}
            backgroundColor={"whiteAlpha.50"}
            _hover={{ backgroundColor: "whiteAlpha.100" }}
            onClick={() => onClick(onClick)}
          />
        </Flex>
        {/* Recipe Image */}
        <Box w={"100%"} h={"180px"} mb={"4"}>
          <Image
            src={recipe.recipe.image}
            alt={recipe.label}
            boxSize={"100%"}
            objectFit={"cover"}
          />
        </Box>
        {/* Recipe Details*/}
        <SimpleGrid columns={2} spacing={1} mb={4}>
          {/* Left Column */}
          <Container textAlign={"left"} mx={(0, 4)}>
            {/* Meal Type */}
            <Text
              fontSize={"xs"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              color={"gray.500"}
            >
              {recipe.recipe.mealType}
            </Text>
            {/* Recipe Name */}
            <Heading
              fontFamily={"serif"}
              fontSize={"2xl"}
              fontWeight={"semibold"}
              mb={2}
            >
              {recipe.recipe.label}
            </Heading>
            {/* Cooking Time */}
            <Flex fontSize={"sm"}>
              <Text color={"blackAlpha.700"}>Total cooking time:</Text>
              <Text mx={1}>{recipe.recipe.totalTime}</Text>
              <Text>Minutes</Text>
            </Flex>
            {/* Nr. of Servings */}
            <Flex fontSize={"sm"} mb={2}>
              <Text color={"blackAlpha.700"}>Servings:</Text>
              <Text mx={1}>{recipe.recipe.yield}</Text>
            </Flex>
            {/* Ingredients */}
            <Text mb={1} fontSize={"sm"} fontWeight={"semibold"}>
              Ingredients:
            </Text>
            {recipe.recipe.ingredientLines.map((ingredient) => {
              return (
                <>
                  <Text fontSize={"sm"} color={"blackAlpha.700"}>
                    {ingredient}
                  </Text>
                </>
              );
            })}
          </Container>
          {/* Right Column */}
          <Container textAlign={"left"} mx={(4, 0)}>
            {/* Health Labels */}
            <Text
              fontSize={"sm"}
              color={"blackAlpha.800"}
              fontWeight={"semibold"}
            >
              Health Labels :
            </Text>
            <Flex wrap={"wrap"} gap={"2"} marginTop={2} mb={2}>
              {recipe.recipe.healthLabels.map((healthLabel) => {
                return (
                  <>
                    <Text
                      color={"black"}
                      fontSize={{ base: "2xs", md: "xs" }}
                      textTransform={"uppercase"}
                      as={"mark"}
                      bg={"yellow.300"}
                      px={1}
                    >
                      {healthLabel}
                    </Text>
                  </>
                );
              })}
            </Flex>
            {/* Diet Labels */}
            {recipe.recipe.dietLabels.length > 0 ? (
              <>
                <Text
                  fontSize={"sm"}
                  color={"blackAlpha.800"}
                  fontWeight={"semibold"}
                >
                  Diet :
                </Text>
                <Flex wrap={"wrap"} gap={2} marginTop={2} mb={2}>
                  {recipe.recipe.dietLabels.map((dietLabel) => {
                    return (
                      <>
                        <Text
                          color={"white"}
                          fontSize={{ base: "2xs", md: "xs" }}
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
              </>
            ) : null}
            {/* Cautions */}
            {recipe.recipe.cautions.length > 0 ? (
              <>
                <Text
                  fontSize={"sm"}
                  color={"blackAlpha.800"}
                  fontWeight={"semibold"}
                >
                  Cautions:
                </Text>
                <Flex wrap={"wrap"} gap={2} marginTop={2} mb={2}>
                  {recipe.recipe.cautions.map((caution) => {
                    return (
                      <>
                        <Text
                          color={"white"}
                          fontSize={{ base: "2xs", md: "xs" }}
                          textTransform={"uppercase"}
                          as={"mark"}
                          bg={"red.500"}
                          px={1}
                        >
                          {caution}
                        </Text>
                      </>
                    );
                  })}
                </Flex>
              </>
            ) : null}
            {/* Total Nutrients */}
            <Text fontSize={"sm"} fontWeight={"semibold"}>
              Total Nutrients:
            </Text>
            <Flex
              wrap={"wrap"}
              gap={2}
              mb={4}
              fontSize={"xs"}
              color={"blackAlpha.700"}
              marginTop={2}
            >
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}
                </Text>
                <Text>CALORIES</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.CHOCDF.quantity)}
                  {recipe.recipe.totalNutrients.CHOCDF.unit}
                </Text>
                <Text>CARBS</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.PROCNT.quantity)}
                  {recipe.recipe.totalNutrients.PROCNT.unit}
                </Text>
                <Text>PROTEIN</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.FAT.quantity)}
                  {recipe.recipe.totalNutrients.FAT.unit}
                </Text>
                <Text>FAT</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.FIBTG.quantity)}
                  {recipe.recipe.totalNutrients.CHOLE.unit}
                </Text>
                <Text>CHOLESTEROL</Text>
              </div>
              <div>
                <Text>
                  {Math.floor(recipe.recipe.totalNutrients.NA.quantity)}
                  {recipe.recipe.totalNutrients.NA.unit}
                </Text>
                <Text>SODIUM</Text>
              </div>
            </Flex>
          </Container>
        </SimpleGrid>
      </Box>
    </Center>
  );
};
