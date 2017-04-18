import React, {Component} from 'react';
import {css} from 'glamor';
import store from './store/store';
import NumberPicker from './components/number-picker/NumberPicker';

import { initialise } from './actions/actions';
import GridConnect from './components/containers/GridConnect';

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

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App" { ...s.app }>
        <GridConnect />
        <NumberPicker gridSize={ 9 } rowSize={ 3 }/>
      </div>
    );
  }
}

export default App;
