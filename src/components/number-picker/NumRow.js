import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';
import NumCell from './NumCell';

const s = {
  row: css({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: '2px',
    borderColor: 'rgba(0, 0, 0, 0.5)'
  }),
};

export default class Row extends Component {

  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),
  }


  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const cells = [];
    this.props.values.forEach((v) => {
      cells.push(<NumCell
        key={ `NumCell-${v}` }
        value={ v }/>);
    });
    return (
      <div className="NumberPickerRow" { ...s.row }>
        { cells }
      </div>
    );
  }
}
