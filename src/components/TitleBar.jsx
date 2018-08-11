import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Styling
import './TitleBar.css';

export default class TitleBar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="title">
            Recipes
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
