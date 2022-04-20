import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData, selectFilteredAllRecipes} from './allRecipesSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import FavoriteButton from '../../components/favoriteButton.js';
import Recipe from "../../components/Recipe";
import { icons } from '../../images/icons/allIcons.js';

export const AllRecipes = () => {
  //props argx removed
  //const { allRecipes, dispatch } = props;

  const allRecipes = useSelector(selectFilteredAllRecipes);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])
  
  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={icons.favoriteIcon}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};


