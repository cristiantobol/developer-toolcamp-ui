export const FETCH_RECIPES = "FETCH_RECIPES";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";

export function fetchRecipesAction() {
  return {
    type: FETCH_RECIPES
  };
}

export function receiveRecipesAction(recipes) {
  return {
    type: RECEIVE_RECIPES,
    recipes
  };
}
