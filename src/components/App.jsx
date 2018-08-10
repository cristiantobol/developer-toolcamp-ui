// 3rd Party
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Styling
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography color="inherit" variant="title">
              Recipes
            </Typography>
          </Toolbar>
        </AppBar>
        <GridList cellHeight={180} cols={4}>
          <GridListTile className="recipe-tile">
            <img
              src="https://www.onceuponachef.com/images/2017/12/NY-Cheesecake-575x434.jpg"
              alt="New York Cheesecake"
            />
            <GridListTileBar
              title="New York Cheesecake"
              subtitle="Difficulty: 2"
            />
          </GridListTile>
        </GridList>
      </div>
    );
  }
}

export default App;
