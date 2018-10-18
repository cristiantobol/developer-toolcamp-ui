// 3rd Party
import { connect } from "react-redux";

// Custom
import App from "../components/App";
import { receiveRecipesAction } from "../actions/RecipesActions";

const mapDispatchToProps = dispatch => {
  return {
    receiveRecipes: recipes => dispatch(receiveRecipesAction(recipes)),
  };
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
