// 3rd Party
import { connect } from "react-redux";

// Custom
import App from "../components/App";
import { receiveRecipesAction } from "../actions/RecipesActions";
import { getRecipes } from "../reducer/RecipesReducer";

const mapDispatchToProps = dispatch => {
  return {
    receiveRecipes: recipes => dispatch(receiveRecipesAction(recipes)),
  };
};

const mapStateToProps = state => {
  return {
    recipes: getRecipes(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
