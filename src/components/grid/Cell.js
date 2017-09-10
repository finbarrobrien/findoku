import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';

const s = {
  cell: css({
    flex: '0 0 auto',
    width: '45px',
    height: '45px',
    fontSize: '24px',
    lineHeight: '45px',
    textAlign: 'center',
    fontFamily: 'Verdana, Geneva, sans-serif',
  }),
  select: 'border border-dark bg-primary',
  selectedValue: 'border border-dark bg-info',
  highlight: 'border border-dark bg-secondary',
  normal: 'border border-dark bg-light',
};

const Cell = ({ row, col, value, activeCell, onCellClick }) => {
  const highlight = activeCell.row === row || activeCell.col === col;
  const select = activeCell.row === row && activeCell.col === col;
  const selectedValue = activeCell.value === value;
  return (
    <div className={ select ? s.select : (highlight ? s.highlight : ( selectedValue ? s.selectedValue : s.normal)) }
         { ...s.cell }
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
