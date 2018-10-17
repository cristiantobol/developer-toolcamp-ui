import { FETCH_RECIPES, RECEIVE_RECIPES } from "../actions";

const initalState = {
  fetching: false,
  recipes: []
};

const recipesReducer = (state = initalState, action) => {
  var newState;
  switch (action.type) {
    case FETCH_RECIPES:
      newState = Object.assign({}, state, { fetching: true });
      break;
    case RECEIVE_RECIPES:
      newState = Object.assign({}, state, {
        fetching: false,
        recipes: action.recipes
      });
      break;
    default:
      newState = state;
  }
  return newState;
};

export default recipesReducer;
