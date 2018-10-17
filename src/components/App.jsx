// 3rd Party
import React from 'react';
import request from 'request-promise-native';

// Custom
import RecipeDetails from './RecipeDetails';
import RecipeGridList from './RecipeGridList';
import TitleBar from './TitleBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
      showDashboard: true,
    };

    this.getRecipeData = this.getRecipeData.bind(this);
    this.handleDashBoard = this.handleDashBoard.bind(this);
    this.handleTileSelected = this.handleTileSelected.bind(this);

    this.getRecipeData();
  }

  getRecipeData() {
    const options = {
      uri: 'http://localhost:9000/recipes',
      json: true,
    };
  
    this.props.fetchRecipes();
    request(options)
      .then((recipes) => {this.props.receiveRecipes(recipes)})
      .catch((err) => {console.log(`Error getting recipes ${err}`)});
  }

  handleDashBoard() {
    this.setState({
      showDashboard: true,
      recipe: null,
    });
  }

  handleTileSelected(id) {
    const recipe = this.props.recipes.find(tile => tile._id === id);
    this.setState({ 
      recipe: recipe,
      showDashboard: false,
    });
  }

  render() {
    return (
      <div>
        <TitleBar onTitleClick={this.handleDashBoard} />
        {this.state.showDashboard && <RecipeGridList recipes={this.props.recipes} onRecipeClick={this.handleTileSelected}/>}
        {!this.state.showDashboard && <RecipeDetails recipe={this.state.recipe} />}
      </div>
    );
  }
}

export default App;
