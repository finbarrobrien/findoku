import React, {Component} from 'react';
import Grid from './components/grid/grid';
import BacktrackingSolver from './sudoku/solver/BacktrackingSolver';
import { EmptyGrid, EmptyNotes, PrintGrid } from './sudoku/solver/commons/CommonFunctions';

class App extends Component {

  _newGrid () {
    const grid = BacktrackingSolver(EmptyGrid(9));
    PrintGrid(grid);
    return grid;
  }

  _newNotes () {
    const notes = EmptyNotes(9);
    return notes;
  }

  render() {
    const grid = this._newGrid();
    const notes = this._newNotes();
    return (
      <div className="App">
        <Grid size={ 9 } grid={ grid } notes={ notes }/>
      </div>
    );
  }
}

export default App;
