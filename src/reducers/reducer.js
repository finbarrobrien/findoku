import { CLICK_CELL } from '../actions/actions';
import { combineReducers } from 'redux';

const initialState = {
  grid: [[]], // store for grid
  notes: [[[]]], // store for notes
  selectedCell: { // currently selected cell
    row: null,
    col: null,
  },
  addNumbers: false, // adding numbers mode
  addNotes: false, // adding notes mode
};

// todo add more actions here, or add new reducer functions
const sudokuCellClick = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_CELL: // Handle a cell click to highlight a single cell
      return Object.assign(...state, {
        selectedCell: {
          row: action.row,
          col: action.col,
        }
      });
    default:
      return state;
  }
};

/*const sudokuApp = combineReducers({
  sudokuCellClick,
  // todo include any other reducers here
});*/

export default sudokuCellClick;
