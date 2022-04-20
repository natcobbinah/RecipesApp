import React from 'react';

import { SearchTerm } from '../feature/searchTerm/searchTerm';
import { AllRecipes } from '../feature/allRecipes/AllRecipes';
import { FavoriteRecipes } from '../feature/favoriteRecipes/favoriteRecipes';

export function App(){
  //props argx removed
  /*No longer prop drilling as we're using react-redux library and
    data is passed from the to level component Provider, and selector
    used to retrive state data */
  //const {state, dispatch} = props;

  //const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  //const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

  return (
    <main>
      <section>
        <SearchTerm
          //searchTerm={state.searchTerm}
          //dispatch={dispatch}
        />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes 
          //favoriteRecipes={visibleFavoriteRecipes} 
          //dispatch={dispatch}
          />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes
          //allRecipes={visibleAllRecipes} 
          //dispatch={dispatch}
        />
      </section>
    </main>
  )
}

/* Utility Helpers */

function getFilteredRecipes(recipes, searchTerm) {
  return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}