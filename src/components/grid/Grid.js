import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {css} from 'glamor';
import Row from './Row';



const mapStateToProps = (state) => {
  return {
    grid: state.grid,
    notes: state.notes,
    selected: state.selectedCell,
  };
};

const s = {
  grid: css({
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  }),
};

const _Grid = ({ grid, notes }) => {
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

_Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  notes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
}

const Grid = connect(mapStateToProps)(_Grid);

export default Grid;

