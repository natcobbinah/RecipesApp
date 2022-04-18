import { createStore , combineReducers} from 'redux';
import {allRecipesReducer} from '../feature/allRecipes/allRecipesSlice';
import {favoriteRecipesReducer} from '../feature/favoriteRecipes/favoriteRecipesSlice';
import {searchTermReducer} from '../feature/searchTerm/searchTermSlice';

let reducers = {
  allRecipes : allRecipesReducer,
  favoriteRecipes : favoriteRecipesReducer,
  searchTerm : searchTermReducer
}

let store = createStore(combineReducers(reducers));

export { store };


