// 3rd Party
import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

// Styling
import './RecipeTile.css';

export default class RecipeTile extends React.Component {
  render() {
    return (
      <GridListTile className="recipe-tile">
        <img
            src={this.props.image}
            alt={this.props.title}
        />
        <GridListTileBar
          title={this.props.title}
          subtitle={"Difficulty: " + this.props.difficulty}
        />
      </GridListTile>
    );
  }
}
