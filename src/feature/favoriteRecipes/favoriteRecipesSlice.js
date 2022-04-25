import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import { createSlice } from "@reduxjs/toolkit";

//simplyfying [actionCreators & reducers] even further with redux toolKit
//enhanced approach with redux-toolKit
let options = {
    name: 'favoriteRecipes',
    initialState: [],
    reducers: {
        addRecipe: (state,action) => {
            //return [...state,action.payload]
            
            //utitlizing [Immer library in redux toolkit] where we can update state but
            //[Immer] takes responsibility to handle immutability for us
            state.push(action.payload);
        },
        removeRecipe: (state, action) => {
            return state.filter(recipe => recipe.id !== action.payload.id)
        }
    }
}
const favoriteRecipesSlice = createSlice(options);

//old approach with react-redux
/* const addRecipe = (recipe) => {
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
} */

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

//export {addRecipe, removeRecipe, favoriteRecipesReducer, selectFilteredFavoriteRecipes};
export {favoriteRecipesSlice, selectFilteredFavoriteRecipes};