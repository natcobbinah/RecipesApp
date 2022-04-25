//import { createStore , combineReducers} from 'redux';
import {allRecipiesSlice} from '../feature/allRecipes/allRecipesSlice';
import {favoriteRecipesSlice} from '../feature/favoriteRecipes/favoriteRecipesSlice';
import {searchTermSlice }  from '../feature/searchTerm/searchTermSlice';
import {configureStore} from '@reduxjs/toolkit';

//the objectName is [reducer and not (reducers)] bcos 
//configureStore() requires an object of name strictly [reducer] as an argument
let reducer = {
  allRecipes : allRecipiesSlice.reducer,
  favoriteRecipes : favoriteRecipesSlice.reducer,
  searchTerm : searchTermSlice.reducer
}

//let store = createStore(combineReducers(reducers));
let store = configureStore({reducer});

export  {store}; 


