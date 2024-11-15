const express = require('express');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3000;
let db;

(async () => {
  db = await open({
    filename: './BD4.3-HW2/database.sqlite',
    driver: sqlite3.Database,
  });
})();

/* 
Exercise 1: Fetch All Recipes by Cuisine

Create an endpoint /recipes/cuisine/:cuisine to return all recipes of a specific cuisine.

Create a function filterByCuisine to fetch recipes filtered by cuisine from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/recipes/cuisine/Italian>
*/

async function filterByCuisine(cuisine) {
  const query = 'SELECT * FROM recipes WHERE cuisine = ?';
  const response = await db.all(query, [cuisine]);
  return { recipes: response };
}

app.get('/recipes/cuisine/:cuisine', async (req, res) => {
  try {
    const cuisine = req.params.cuisine;
    const result = await filterByCuisine(cuisine);
    if (result?.recipes.length === 0) {
      return res
        .status(404)
        .json({ message: `No recipes found by cuisine: ${cuisine}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 2: Fetch All Recipes by Main Ingredient

Create an endpoint /recipes/main_ingredient/:main_ingredient to return all recipes with a specific main ingredient.

Create a function filterByMainIngredient to fetch recipes filtered by main ingredient from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/recipes/main_ingredient/Chicken>
*/

async function filterByMainIngredient(ingredient) {
  const query = 'SELECT * FROM recipes WHERE main_ingredient = ?';
  const response = await db.all(query, [ingredient]);
  return { recipes: response };
}

app.get('/recipes/main_ingredient/:main_ingredient', async (req, res) => {
  try {
    const ingredient = req.params.main_ingredient;
    const result = await filterByMainIngredient(ingredient);
    if (result?.recipes.length === 0) {
      return res
        .status(404)
        .json({ message: `No recipes found by ingredient: ${ingredient}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/*
Exercise 3: Fetch All Recipes by Preparation Time

Create an endpoint /recipes/preparation_time/:preparation_time to return all recipes with a preparation time less than or equal to a specific value.

Create a function filterByPreparationTime to fetch recipes filtered by preparation time from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/recipes/preparation_time/30>
*/

async function filterByPreparationTime(time) {
  const query = 'SELECT * FROM recipes WHERE preparation_time <= ?';
  const response = await db.all(query, [time]);
  return { recipes: response };
}

app.get('/recipes/preparation_time/:preparation_time', async (req, res) => {
  try {
    const time = req.params.preparation_time;
    const result = await filterByPreparationTime(time);
    if (result?.recipes.length === 0) {
      return res
        .status(404)
        .json({ message: `No recipes found by preparation_time: ${time}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 4: Fetch All Recipes by Difficulty

Create an endpoint /recipes/difficulty/:difficulty to return all recipes of a specific difficulty level.

Create a function filterByDifficulty to fetch recipes filtered by difficulty from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/recipes/difficulty/Easy>
*/

async function filterByDifficulty(difficulty) {
  const query = 'SELECT * FROM recipes WHERE difficulty = ?';
  const response = await db.all(query, [difficulty]);
  return { recipes: response };
}

app.get('/recipes/difficulty/:difficulty', async (req, res) => {
  try {
    const difficulty = req.params.difficulty;
    const result = await filterByDifficulty(difficulty);
    if (result?.recipes.length === 0) {
      return res
        .status(404)
        .json({ message: `No recipes found by difficulty: ${difficulty}` });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/* 
Exercise 5: Fetch All Recipes by Vegetarian Status

Create an endpoint /recipes/vegetarian/:vegetarian to return all recipes based on vegetarian status.

Create a function filterByVegetarian to fetch recipes filtered by vegetarian status from the database.

Wrap the function call in a try-catch block.

Ensure that errors are caught and return res.status(500).json({ error: error.message }) if anything goes wrong.

Return 404 error if no data is found.

API Call:

<http://localhost:3000/recipes/vegetarian/true>
*/

async function filterByVegetarian(vegetarian) {
  const query = 'SELECT * FROM recipes WHERE vegetarian = ?';
  const response = await db.all(query, [vegetarian]);
  return { recipes: response };
}

app.get('/recipes/vegetarian/:vegetarian', async (req, res) => {
  try {
    const vegetarian = req.params.vegetarian;
    const result = await filterByVegetarian(vegetarian);
    if (result?.recipes.length === 0) {
      return res.status(404).json({
        message: `No recipes found for vegetarianStatus: ${vegetarian}`,
      });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
