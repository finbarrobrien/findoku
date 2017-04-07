import React, {Component} from 'react';
import {css} from 'glamor';

const s = {
  cell: css({
    flex: '0 0 auto',
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    width: '45px',
    height: '45px',
    fontSize: '24px',
    lineHeight: '45px',
    textAlign: 'center',
    fontFamily: 'Verdana, Geneva, sans-serif',
  }),
};

export default class Cell extends Component {

  static propTypes = {
    rowNum: React.PropTypes.number.isRequired,
    colNum: React.PropTypes.number.isRequired,
    value: React.PropTypes.number,
  }

  /*defaultProps() {
   rowNum: 0;
   colNum: 0;
   };*/

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Cell" { ...s.cell }>
        { this.props.value }
      </div>
    );
  }
}
