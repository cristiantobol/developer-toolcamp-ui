// 3rd Party
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default function RecipeIngredients(props) {
  return (
    <div>
      <Typography variant="title">
        Ingredients
      </Typography>
      <List>
        {props.ingredients.map(ingredient => (
          <ListItem key={ingredient} divider>
            <ListItemText primary={ingredient} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
