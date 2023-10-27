# React_Basics_Project

Assignment : Recipe Checker

Instructions

Download the starter files here on our GitHub repo(opens in a new tab).

Inspect the data object in utils/data.js to get an idea of what data you will work with.

The data object is a converted JSON string that was retrieved from a recipe API called Edamam(opens in a new tab). It contains 20 recipes in the ‘hit’ key that you can use for the app.

To access data, such as recipe labels, you need to look into the recipe key, e.g. data.hits[0].recipe.label has the following value "Paleo Chocolate Covered Caramels". Use console.log() in RecipeListPage.jsx to play around with the data and see what you can retrieve.

In App.jsx, you want to keep track of a selected recipe item in a state and show a component (you can use a placeholder for now, or create a new component) if the user has selected one. Else show the that will contain an overview of all recipes.

In RecipeListPage.jsx, you can use the imported recipe data and display a list of all recipes. Show the following details for each recipe:

Recipe name

A picture of the recipe/meal

Diet label (if present)

Cautions (if present)

Meal type

Dish type

Each item shows the following health labels (if present):

Vegan

Vegetarian

NOTE: As the API does not provide ID’s for the recipes, you can use names/labels as keys in the list items.

Built a search function that filters based on the name and/or health labels (vegan/vegetarian/pescetarian/gluten-free/sesame-free/etc.).

Create the component and make it display more detailed information about a selected recipe:

Recipe name

A picture of the recipe/meal

Meal type

Dish type

Total cooking time

Diet label

All health labels

Cautions

Ingredients

Servings

Total nutrients (Energy in kcal, protein, fat, carbs, cholesterol, sodium)

The items in the list () should be clickable and, once selected show a more detailed component. The user can also click on a back button in to return to the recipes overview.

Style and make your app responsive using ChakraUI, which is already installed.

Check the requirements below to make sure you have implemented everything.




![Screen Shot 2023-10-26 at 20 08 04](https://github.com/jomeesters/React_Basics_Project/assets/112581270/1c85d356-cb1c-4733-8a15-a5dec85318e2)

https://thetasteindex.netlify.app
