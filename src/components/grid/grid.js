import React, { Component } from 'react';
import { css } from 'glamor';

const s = {
    grid: css({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        /*border: '2px solid',
        borderRadius: '1px',
        borderColor: 'rgba(0, 0, 0, 0.5)',*/
    }),
};

class Grid extends Component {
    render() {
        return (
            <div className="Grid" { ...s.grid }>
                { this.props.children }
            </div>
        );
    }
}

export default Grid;
