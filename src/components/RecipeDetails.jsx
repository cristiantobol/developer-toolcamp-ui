// 3rd Party
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Custom
import RecipeIngredients from './RecipeIngredients';
import RecipeMetaData from './RecipeMetaData';
import RecipeMethod from './RecipeMethod';

// Styling
import './RecipeDetails.css';

export default class RecipeDetails extends React.Component {
  render() {
    return (
      <div>
        <Paper className="recipe-details" elevation={1}>
          <Typography variant="headline" component="h2">
            {this.props.recipe.title}
          </Typography>
          <img
            className="recipe-details__image"
            src={this.props.recipe.image}
            alt={this.props.recipe.title}
          />
          <RecipeMetaData
            dateAdded={this.props.recipe.dateAdded}
            difficulty={this.props.recipe.difficulty}
          />
        </Paper>
        <div className="recipe-details__method-ingredients-container">
          <Paper className="recipe-details__ingredients-container" elevation={1}>
            <RecipeIngredients ingredients={this.props.recipe.ingredients} />
          </Paper>
          <Paper className="recipe-details__method-container" elevation={1}>
            <RecipeMethod steps={this.props.recipe.method} />
          </Paper>
        </div>
      </div>
    );
  }
}
