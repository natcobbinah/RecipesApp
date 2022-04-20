import allRecipesData from "./allRecipesData";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";

const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    };
}

const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload;
        case 'favoriteRecipes/addRecipe':
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        case 'favoriteRecipes/removeRecipe':
            return [...allRecipes, action.payload]
        default:
            return allRecipes;
    }
}

//create allRecipeSelectors
const selectAllRecipes = (state) => {
    return state.allRecipes;
}

const selectFilteredAllRecipes = (state) => {
    let allRecipes = selectAllRecipes(state);
    let searchTerm = selectSearchTerm(state);
    return allRecipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
}


export { loadData, allRecipesReducer, selectAllRecipes, selectFilteredAllRecipes };