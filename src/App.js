import React, {Component} from 'react';
import {css} from 'glamor';
import NumberPicker from './components/number-picker/NumberPicker';
import Grid from './components/grid/Grid';


const s = {
  app: css({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  }),
};

const App = () => {
  return (
    <div className="App" { ...s.app }>
      <Grid />
      <NumberPicker gridSize={ 9 } rowSize={ 3 }/>
    </div>
  );
};

export default App;
