// 3rd Party
import React from 'react';
import request from 'request-promise-native';

// Custom
import RecipeGridList from './RecipeGridList';
import TitleBar from './TitleBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };

    this.getRecipeData = this.getRecipeData.bind(this);

    this.getRecipeData();
  }

  getRecipeData() {
    const options = {
      uri: 'http://localhost:9000/recipes',
      json: true,
    };
  
    request(options)
      .then((recipes) => {this.setState({ recipes: recipes })})
      .catch((err) => {console.log(`Error getting recipes ${err}`);});
  }

  render() {
    return (
      <div>
        <TitleBar />
        <RecipeGridList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
