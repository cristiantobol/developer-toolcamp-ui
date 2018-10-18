// 3rd Party
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Custom
import RecipeIngredients from './RecipeIngredients';
import RecipeMetaData from './RecipeMetaData';
import RecipeMethod from './RecipeMethod';
import Button from '@material-ui/core/Button';

import jsPDF from 'jspdf';

// Styling
import './RecipeDetails.css';

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {

    this.createPdf = (recipe) => {
      // Portrait export
      let doc = new jsPDF({
        orientation: 'portrait',
        unit: 'cm',
        format: [29.7, 42]
      })

      doc.text(this.props.recipe.title, 1, 1)
      doc.text(this.props.recipe.ingredients, 1, 2)
      doc.save(this.props.recipe.title + '-recipe.pdf')
    }

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
          <Button variant="outlined" onClick={() => { this.createPdf(this.props.recipe) }}>
            PDF
        </Button>

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
export default RecipeDetails;