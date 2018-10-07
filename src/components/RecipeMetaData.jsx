// 3rd Party
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Styling
import './RecipeMetaData.css';

export default class RecipeMetaData extends React.Component {
  render() {
    return (
      <div className="recipe-meta-data">
        <List>
          <ListItem key="difficulty">
            <ListItemText primary={"Difficulty: " + this.props.difficulty} />
          </ListItem>
          <ListItem key="dateAdded">
            <ListItemText primary={"Added: " + this.props.dateAdded} />
          </ListItem>
        </List>
      </div>
    );
  }
}
