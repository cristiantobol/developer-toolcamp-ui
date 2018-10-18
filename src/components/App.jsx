// 3rd Party
import React from "react";
import request from "request-promise-native";
// Custom
import RecipeGridList from "./RecipeGridList";
import RecipeDetails from "./RecipeDetails";
import TitleBar from "./TitleBar";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      recipe: null,
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
        this.setState({ recipes: recipes });
      })
      .catch(err => {
        console.log(`Error getting recipes ${err}`);
      });
  }

  handleDashBoard() {
    this.setState({
      showDashboard: true,
      recipe: null
    });
  }

  handleTileSelected(id) {
    const recipe = this.state.recipes.find(recipe => recipe._id === id);
    this.setState({
      recipe: recipe,
      showDashboard: false
    });
  }

  render() {
    return (
      <div>
        <TitleBar onTitleClick={this.handleDashBoard} />
        {this.state.showDashboard && (
          <RecipeGridList
            recipes={this.state.recipes}
            onRecipeClick={this.handleTileSelected}
          />
        )}
        {!this.state.showDashboard && (
          <RecipeDetails recipe={this.state.recipe} />
        )}
      </div>
    );
  }
}

export default App;
