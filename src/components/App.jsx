// 3rd Party
import React from "react";
import request from "request-promise-native";

// Custom
import RecipeGridList from "./RecipeGridList";
import TitleBar from "./TitleBar";
import RecipeDetailsContainer from "../containers/RecipeDetailsContainer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeId: null,
      showDashboard: true
    };

    this.getRecipeData = this.getRecipeData.bind(this);
    this.handleDashBoard = this.handleDashBoard.bind(this);
    this.handleTileSelected = this.handleTileSelected.bind(this);

    this.getRecipeData();
  }

  getRecipeData() {
    const options = {
      uri: "http://localhost:9000/recipes",
      json: true
    };

    request(options)
      .then(recipes => {
        this.props.receiveRecipes(recipes);
      })
      .catch(err => {
        console.log(`Error getting recipes ${err}`);
      });
  }

  handleDashBoard() {
    this.setState({
      showDashboard: true,
      recipeId: null
    });
  }

  handleTileSelected(id) {
    this.setState({
      recipeId: id,
      showDashboard: false
    });
  }

  render() {
    return (
      <div>
        <TitleBar onTitleClick={this.handleDashBoard} />
        {this.state.showDashboard && (
          <RecipeGridList
            recipes={this.props.recipes}
            onRecipeClick={this.handleTileSelected}
          />
        )}
        {!this.state.showDashboard && (
          <RecipeDetailsContainer recipeId={this.state.recipeId} />
        )}
      </div>
    );
  }
}

export default App;
