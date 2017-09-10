import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';
import Row from './Row';

const s = {
  grid: css({
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  }),
};

const Grid = ({ grid, notes }) => {
  const rows = [];
  for (let i = 0; i < grid.length; i += 1) {
    rows.push(<Row
      size={ grid.length }
      row={ i }
      key={ i }
      values={ grid[i] }
      notes={ notes[i] }/>);
  }
  return (
    <div className="Grid" { ...s.grid } >
      { rows }
    </div>
  );
}

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  notes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
}

export default Grid;
