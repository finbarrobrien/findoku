import React, { Component } from 'react';
import Cell from './components/grid/cell';
import Grid from './components/grid/grid';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Grid>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
          </Grid>
      </div>
    );
  }
}

export default App;
