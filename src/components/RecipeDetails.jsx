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

export default function RecipeDetails(props) {
  const { recipe } = props;

  return (
    <div>
      <Paper className="recipe-details" elevation={1}>
        <Typography variant="headline" component="h2">
          {recipe.title}
        </Typography>
        <img
          className="recipe-details__image"
          src={recipe.image}
          alt={recipe.title}
        />
        <RecipeMetaData
          dateAdded={recipe.dateAdded}
          difficulty={recipe.difficulty}
        />
      </Paper>
      <div className="recipe-details__method-ingredients-container">
        <Paper className="recipe-details__ingredients-container" elevation={1}>
          <RecipeIngredients ingredients={recipe.ingredients} />
        </Paper>
        <Paper className="recipe-details__method-container" elevation={1}>          
          <RecipeMethod steps={recipe.method} />
        </Paper>
      </div>
    </div>
  );
}
