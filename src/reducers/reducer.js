import { CLICK_CELL, NEW_GRID } from '../actions/actions';
import BacktrackingSolver from '../sudoku/solver/BacktrackingSolver';
import { EmptyGrid, EmptyNotes } from '../sudoku/commons/CommonFunctions';

const initialState = {
  grid: BacktrackingSolver(EmptyGrid(9)), // store for grid
  notes: EmptyNotes(9), // store for notes
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
      return Object.assign({}, { ...state,
        selectedCell: {
          row: action.row,
          col: action.col,
        }
      });
    case NEW_GRID:
      return Object.assign({}, { ...state,
        grid: action.grid,
        notes: action.notes,
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
