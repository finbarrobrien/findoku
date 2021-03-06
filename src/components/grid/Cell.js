import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clickCell } from '../../actions/actions';

const mapStateToProps = (state) => {
    return {
        grid: state.grid,
        activeCell: state.selectedCell,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCellClick: (selected) => {
            dispatch(clickCell(selected));
        },
    /*onEnterNumber: (selected) => {
     console.log(selected)
     if (/^[1-9]{1}$/.test(selected.value)) {
     console.log('dispatch it');
     dispatch(setCell(selected));
     }
     },*/
    };
};

const _Cell = ({ row, col, tabIdx, value, activeCell, grid, onCellClick }) => {
    const highlight = activeCell.row === row || activeCell.col === col;
    const select = activeCell.row === row && activeCell.col === col;
    const selectedValue = activeCell.row !== null && activeCell.col !== null ? grid[activeCell.row][activeCell.col] === value: false;

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
            tabIndex={ tabIdx }
            onClick={(ev) =>  { onCellClick({ row, col }); } }>
            { value }
        </div>
    );
};

_Cell.propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    value: PropTypes.number,
    activeCell: PropTypes.object,
    onCellClick: PropTypes.func,
    onEnterNumber: PropTypes.func
};

const Cell = connect(mapStateToProps, mapDispatchToProps)(_Cell);

export default Cell;
