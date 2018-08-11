// 3rd Party
import React from 'react';
import GridList from '@material-ui/core/GridList';

// Custom
import RecipeTile from './RecipeTile';

export default class RecipeGridList extends React.Component {
  render() {
    return (
      <GridList cellHeight={180} cols={4}>
        {this.props.recipes.map(tile => (
          <RecipeTile
            difficulty={tile.difficulty}
            image={tile.image}
            title={tile.title}
          />
        ))}
      </GridList>
    );
  }
}