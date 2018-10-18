import { RECEIVE_RECIPES } from "../actions/RecipesActions";

const initalState = {
  recipes: []
};

const recipesReducer = (state = initalState, action) => {
  var newState;
  switch (action.type) {
    case RECEIVE_RECIPES:
      newState = Object.assign({}, state, {
        recipes: action.recipes
      });
      break;
    default:
      newState = state;
  }
  return newState;
};

export default recipesReducer;
