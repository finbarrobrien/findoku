/*
 * Action types
 */

const CLICK_CELL        = 'CLICK_CELL';
const CLICK_ADD_NOTE    = 'CLICK_ADD_NOTE';
const CLICK_ADD_NUMBER  = 'CLICK_ADD_NUMBER';
const NEW_GRID          = 'NEW_GRID';

/*
 * Action Creators
 */
const addNumber = (number) => {
  return {
    type: CLICK_ADD_NUMBER,
    number,
  };
};

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

const initialise = (grid, notes) => {
  return {
    type: NEW_GRID,
    grid,
    notes,
  };
};

export { CLICK_CELL, CLICK_ADD_NOTE, CLICK_ADD_NUMBER, NEW_GRID, addNote, addNumber, clickCell, initialise };
