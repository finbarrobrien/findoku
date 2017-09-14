import { CLICK_CELL, NEW_GRID, SET_CELL, SWITCH_MODE } from '../actions/actions';
import BacktrackingSolver from '../sudoku/solver/BacktrackingSolver';
import { EmptyGrid, EmptyNotes } from '../sudoku/commons/CommonFunctions';

const initialState = {
  grid: BacktrackingSolver(EmptyGrid(9)), // store for grid
  notes: EmptyNotes(9), // store for notes
  makeNotes: false,
  selectedCell: { // currently selected cell
    row: null,
    col: null,
  },
  addNumbers: false, // adding numbers mode
  addNotes: false, // adding notes mode
};

// todo add more actions here, or add new reducer functions
const sudokuCellClick = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CLICK_CELL: // Handle a cell click to highlight a single cell
      return { ...state,
        selectedCell: {
          row: action.selected.row,
          col: action.selected.col,
        }
      };
    case SET_CELL:
      if (state.selectedCell.row === null || state.selectedCell.col === null) {
        return state;
      }
      const modGrid = state.grid.slice();
      modGrid[state.selectedCell.row][state.selectedCell.col] = action.value;
      console.log(state);
      console.log(modGrid);
      return { ...state,
        grid: modGrid,
      };
    case SWITCH_MODE:
      return {
        ...state,
        makeNotes: !state.makeNotes,
      };
    case NEW_GRID:
      return Object.assign({}, { ...state,
        grid: action.grid,
        notes: action.notes,
      });
    default:
      return state;
  }
};


export default sudokuCellClick;
