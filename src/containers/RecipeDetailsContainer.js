// 3rd Party
import { connect } from "react-redux";

// Custom
import RecipesDetails from "../components/RecipeDetails";

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.recipes.find(recipe => recipe._id === ownProps.recipeId)
  };
};

export default connect(
  mapStateToProps,
  null
)(RecipesDetails);
