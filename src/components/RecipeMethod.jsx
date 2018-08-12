// 3rd Party
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default function RecipeMethod(props) {
  return (
    <div>
      <Typography variant="title">
        Method
      </Typography>
      <List>
        {props.steps.map((method, index) => (
          <ListItem key={method}>
            <ListItemText primary={(index + 1) + ". " + method} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
