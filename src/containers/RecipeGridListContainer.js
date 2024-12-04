// 3rd Party
import { connect } from "react-redux";

// Custom
import RecipeGridList from "../components/RecipeGridList";
import { getRecipes } from "../reducer/RecipesReducer";

const mapStateToProps = state => {
  return {
    recipes: getRecipes(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(RecipeGridList);
