import React, {Component} from 'react';
import {css} from 'glamor';
import CellConnect from '../containers/CellConnect';
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

const Row = ({ size, rowNum, values, notes }) => {
  const cells = [];
  for (let i = 0; i < size; i += 1) {
    if (!values[i] && notes[i].length) {
      cells.push(<Note
        rowNum={ rowNum }
        colNum={ i }
        key={ `Note ${rowNum}, ${i}` }
        notes={ notes[i] }/>);
    } else {
      cells.push(<CellConnect
        rowNum={ rowNum }
        colNum={ i }
        key={ `Cell ${rowNum}, ${i}` }
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
  size: React.PropTypes.number,
  rowNum: React.PropTypes.number,
  values: React.PropTypes.arrayOf(React.PropTypes.number),
  notes: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.number)),
}

export default Row;
