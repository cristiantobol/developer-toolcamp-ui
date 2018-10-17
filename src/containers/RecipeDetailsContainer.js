import { connect } from "react-redux";

import RecipesDetails from "../components/RecipeDetails";
import { getRecipe } from "../reducer";

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: getRecipe(state, ownProps.recipeId)
  };
};

export default connect(
  mapStateToProps,
  null
)(RecipesDetails);
