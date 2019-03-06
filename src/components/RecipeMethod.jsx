// 3rd Party
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default class RecipeMethod extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="title">
          Method
        </Typography>
        <List>
          {this.props.steps.map((method, index) => (
            <ListItem key={method}>
              <ListItemText primary={(index + 1) + ". " + method} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
