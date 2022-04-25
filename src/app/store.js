import { createStore , combineReducers} from 'redux';
import {allRecipiesSlice} from '../feature/allRecipes/allRecipesSlice';
import {favoriteRecipesSlice} from '../feature/favoriteRecipes/favoriteRecipesSlice';
import {searchTermSlice }  from '../feature/searchTerm/searchTermSlice';

let reducers = {
  allRecipes : allRecipiesSlice.reducer,
  favoriteRecipes : favoriteRecipesSlice.reducer,
  searchTerm : searchTermSlice.reducer
}

let store = createStore(combineReducers(reducers));

export { store };


