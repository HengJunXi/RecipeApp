import {recipes, categories, ingredients} from './dataArrays';

export function getAllRecipes() {
  return recipes;
}

export function getAllCategories() {
  return categories;
}

export function getAllIngredients() {
  return ingredients;
}

export function getCategoryById(categoryId) {
  let category;
  categories.map((data) => {
    if (data.id === categoryId) {
      category = data;
    }
  });
  return category;
}

export function getIngredientName(ingredientID) {
  let name;
  ingredients.map((data) => {
    if (data.ingredientId === ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID) {
  let url;
  ingredients.map((data) => {
    if (data.ingredientId === ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map((data) => {
    if (data.id === categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipesByCategoryId(categoryId) {
  const recipesArray = [];
  recipes.map((data) => {
    if (data.categoryId === categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

// modifica
export function getRecipesByIngredientId(ingredientId) {
  const recipesArray = [];
  recipes.map((data) => {
    data.ingredients.map((index) => {
      if (index[0] === ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  recipes.map((data) => {
    if (data.categoryId === categoryId) {
      count++;
    }
  });
  return count;
}

export function getRecipeIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map((index) => {
    ingredients.map((data) => {
      if (data.ingredientId === index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  ingredients.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipesByIngredients = getRecipesByIngredientId(data.ingredientId);
      const unique = [...new Set(recipesByIngredients)];
      unique.map((item) => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];
  categories.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipesFromData = getRecipesByCategoryId(data.id); // return a vector of recipes
      recipesFromData.map((item) => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  recipes.map((data) => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

export function getRecipeByRecipeId(recipeId) {
  return recipes.find((recipe) => recipe.recipeId.toString() === recipeId);
}

export function getIngredientByIngredientId(ingredientId) {
  return ingredients.find(
    (ingredient) => ingredient.ingredientId.toString() === ingredientId,
  );
}
