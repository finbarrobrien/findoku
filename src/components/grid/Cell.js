import React, { PropTypes } from 'react';
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
  highlight: css({
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'rgba(255, 0, 0, 1.0)',
  }),
  normal: css({
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'rgba(0, 0, 0, 1.0)',
  }),
};

const Cell = ({ rowNum, colNum, value, highlight, onCellClick }) => {
  return (
    <div className="Cell" { ...s.cell }
       { ...(highlight ? s.highlight : s.normal ) }
       onClick={() => onCellClick()}>
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
