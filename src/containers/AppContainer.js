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

export default connect(
  null,
  mapDispatchToProps
)(App);
