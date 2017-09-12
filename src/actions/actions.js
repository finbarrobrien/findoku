/*
 * Action types
 */

const CLICK_CELL        = 'CLICK_CELL';
const CLICK_ADD_NOTE    = 'CLICK_ADD_NOTE';
const SET_CELL          = 'SET_CELL';
const NEW_GRID          = 'NEW_GRID';

/*
 * Action Creators
 */
const addNote = (number) => {
  return {
    type: CLICK_ADD_NOTE,
    number,
  };
};

const clickCell = (selected) => {
  return {
    type: CLICK_CELL,
    selected,
  };
};

const setCell = (value) => {
  console.log(value);
  return {
    type: SET_CELL,
    value,
  };
};

const initialise = (grid, notes) => {
  return {
    type: NEW_GRID,
    grid,
    notes,
  };
};

export { CLICK_CELL, CLICK_ADD_NOTE, SET_CELL, NEW_GRID, addNote, clickCell, setCell, initialise };
