const addRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/addRecipe',
        payload: recipe
    };
}

const removeRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/removeRecipe',
        payload: recipe
    };
}

const initialFavoriteRecipes = [];
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
    switch (action.type) {
        case 'favoriteRecipes/addRecipe':
            return [...favoriteRecipes, action.payload]
        case 'favoriteRecipes/removeRecipe':
            return favoriteRecipes.filter(recipe => {
                return recipe.id !== action.payload.id
            });
        default:
            return favoriteRecipes;
    }
}

export {addRecipe, removeRecipe, favoriteRecipesReducer};
