import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteButton from '../../components/favoriteButton';
import Recipe from '../../components/Recipe';
import { icons } from '../../images/icons/allIcons';
//import { removeRecipe } from './favoriteRecipesSlice';
import { selectFilteredFavoriteRecipes , favoriteRecipesSlice} from './favoriteRecipesSlice';


const { removeRecipe } = favoriteRecipesSlice.actions;

export const FavoriteRecipes = () =>{
    //props argx removed

   // const {favoriteRecipes,dispatch} = props;
   const dispatch = useDispatch();
   const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
    
    const onRemoveRecipeHandler = (recipe) => {
      dispatch(removeRecipe(recipe));
    };
  
    return (
      <div id='favorite-recipes' className="recipes-container">
        {favoriteRecipes.map(createRecipeComponent)}
      </div>
    );
  
    // Helper Function
    function createRecipeComponent(recipe) {
      return (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onRemoveRecipeHandler(recipe)}
            icon={icons.unfavoriteIcon}
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      )
    }
    
  };