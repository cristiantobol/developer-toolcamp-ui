// 3rd Party
import { connect } from "react-redux";

// Custom
import RecipesDetails from "../components/RecipeDetails";
import { getRecipe } from "../reducer/RecipesReducer";

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: getRecipe(state, ownProps.recipeId)
  };
};

export default connect(
  mapStateToProps,
  null
)(RecipesDetails);
