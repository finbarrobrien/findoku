import React, {Component} from 'react';
import {css} from 'glamor';
import Grid from './components/grid/Grid';
import NumberPicker from './components/number-picker/NumberPicker';
import BacktrackingSolver from './sudoku/solver/BacktrackingSolver';
import { EmptyGrid, EmptyNotes, PrintGrid } from './sudoku/solver/commons/CommonFunctions';

const s = {
  app: css({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  }),
};

class App extends Component {

  _newGrid () {
    const grid = BacktrackingSolver(EmptyGrid(9));
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
      <div className="App" { ...s.app }>
        <Grid size={ 9 } grid={ grid } notes={ notes }/>
        <NumberPicker gridSize={ 9 } rowSize={ 3 }/>
      </div>
    );
  }
};

export default App;
