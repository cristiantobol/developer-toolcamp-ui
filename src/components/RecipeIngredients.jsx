// 3rd Party
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default class RecipeIngredients extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="title">
          Ingredients
        </Typography>
        <List>
          {this.props.ingredients.map(ingredient => (
            <ListItem key={ingredient} divider>
              <ListItemText primary={ingredient} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
