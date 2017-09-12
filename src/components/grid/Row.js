import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';
import Cell from './Cell';
import Note from './Note';

const s = {
  row: css({
    display: 'flex',
    flexFlow: 'row nowrap',
    /*border: '1px solid',
    borderRadius: '2px',
    borderColor: 'rgba(0, 0, 0, 0.5)'*/
  }),
};

const Row = ({ size, row, values, notes }) => {
  const cells = [];
  for (let i = 0; i < size; i += 1) {
    if (!values[i] && notes[i].length) {
      cells.push(<Note
        row={ row }
        col={ i }
        key={ `Note ${row}, ${i}` }
        notes={ notes[i] }/>);
    } else {
      cells.push(<Cell
        row={ row }
        col={ i }
        tabIdx={ i + (row * size)}
        key={ `Cell ${row}, ${i}` }
        value={ values[i] }/>);
    }
  }
  return (
    <div className="Row" { ...s.row }>
      { cells }
    </div>
  );
}


Row.propTypes = {
  size: PropTypes.number,
  rowNum: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.number),
  notes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
}

export default Row;
