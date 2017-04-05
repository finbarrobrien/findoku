import React, { Component } from 'react';
import { css } from 'glamor';

const s = {
    cell: css({
      flex: '0 0 auto',
      border: '1px solid',
      borderRadius: '2px',
      borderColor: 'rgba(0, 0, 0, 0.5)',
      width: '25px',
      height: '25px',
    }),
};

class Cell extends Component {
    render() {
        console.log(s.cell);
        return (
            <div className="Cell" { ...s.cell }>
            </div>
        );
    }
}

export default Cell;
