export const RECEIVE_RECIPES = "RECEIVE_RECIPES";

export function receiveRecipesAction(recipes) {
  return {
    type: RECEIVE_RECIPES,
    recipes
  };
}
