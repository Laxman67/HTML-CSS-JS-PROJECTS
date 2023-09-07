const API_KEY = "275d58779ccf4e22af03e792e8819fff"; //Premium API Key
const recipeListEl = document.getElementById("recipe-list"); //List

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li"); //List Item
    recipeItemEl.classList.add("recipe-item");
    recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe image";

    recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerHTML = recipe.title;
    recipeIngredientsEL = document.createElement("p");
    recipeIngredientsEL.innerHTML = `
    <strong> Ingredients:</strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(",")}
    `;

    recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";
    recipeItemEl.appendChild(recipeImageEl);
    recipeListEl.appendChild(recipeItemEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEL);
    recipeItemEl.appendChild(recipeLinkEl);
  });
}

// Get Recipes Using Api
async function getReceipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();
  return data.recipes;
}

// Calling Master Function
async function init() {
  const recipes = await getReceipes();
  displayRecipes(recipes);
}

init();
