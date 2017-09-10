import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ row, col, value, activeCell, onCellClick }) => {
  const highlight = activeCell.row === row || activeCell.col === col;
  const select = activeCell.row === row && activeCell.col === col;
  const selectedValue = activeCell.value === value;

  const cellStyle = {
    flex: '0 0 auto',
    width: '45px',
    height: '45px',
    fontSize: '24px',
    lineHeight: '45px',
    textAlign: 'center',
    fontFamily: 'Verdana, Geneva, sans-serif',
    borderTop: row % 3 === 0 ? '2px solid #0d0d0d' : '1px solid grey',
    borderLeft: col % 3 === 0 ? '2px solid #0d0d0d' : '1px solid grey',
    borderBottom: row % 3 === 2 ? '2px solid #0d0d0d' : '1px solid grey',
    borderRight: col % 3 === 2 ? '2px solid #0d0d0d' : '1px solid grey',
    backgroundColor: select ? '#6666ff' : (highlight ? '#b3b3ff' : ( selectedValue ? '#4dff4d' : '#ffffff'))
  };
  return (
    <div
         style={ cellStyle }
       onClick={() => onCellClick({ row, col, value })}>
    { value }
  </div>
  );
};

Cell.propTypes = {
  rowNum: PropTypes.number.isRequired,
  colNum: PropTypes.number.isRequired,
  value: PropTypes.number,
  highlight: PropTypes.bool,
  onCellClick: PropTypes.func.isRequired
};

export default Cell;
