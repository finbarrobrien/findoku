/*
 * Action types
 */

const CLICK_CELL        = 'CLICK_CELL';
const CLICK_ADD_NOTE    = 'CLICK_ADD_NOTE';
const CLICK_ADD_NUMBER  = 'CLICK_ADD_NUMBER';

/*
 * Action Creators
 */
const addNumber = (number, row, col) => {
  return {
    type: CLICK_ADD_NUMBER,
    number,
    row,
    col,
  };
};

const addNote = (number, row, col) => {
  return {
    type: CLICK_ADD_NOTE,
    number,
    row,
    col,
  };
};

const clickCell = (row, col) => {
  return {
    type: CLICK_CELL,
    row,
    col,
  };
};

export { CLICK_CELL, CLICK_ADD_NOTE, CLICK_ADD_NUMBER, addNote, addNumber, clickCell };
