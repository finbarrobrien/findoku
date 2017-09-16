import React, {Component} from 'react';
import {css} from 'glamor';
import { connect } from 'react-redux';
import { setCell, switchMode } from '../../actions/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNumClick: (value) => {
      console.log(value)
      if (/^[1-9]{1}$/.test(value)) {
        console.log('dispatch it');
        dispatch(setCell(value));
      }
    },
    onClickNote: () => {
      console.log('note clicked');
      dispatch(switchMode())
    }
  };
};


const s = {
  numPicker: css({
    margin: '70px',
    width: 'auto',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    maxWidth: '227px',
    border: '1px solid',
    borderColor: 'rgba(0, 0, 0, 0.5)'
  }),
  button: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '45px',
    height: '45px',
    fontSize: '24px',
    lineHeight: '45px',
    border: '1px solid',
    borderColor: 'rgba(0, 0, 0, 0.5)'
  }),
};

const getNumpickerItems = ({ onNumClick, onClickNote }) => {
  const pickerButtons = [];

  for (let i = 1; i <= 9; i += 1) { // for each row
    pickerButtons.push(
      <div key={ i }
        tabIndex={ i }
        { ...s.button }
        onClick={ () => { onNumClick(i) } }>
        { i }
      </div>)
  }

  pickerButtons.push(
    <div
      { ...s.button }
      onClick={ onClickNote }>
      <img src="assets/svg/ic_edit_black_24px.svg" width="24" height="24"/>
    </div>
  );

  return pickerButtons;
};

const _NumberPicker = ({ onNumClick, onClickNote }) => {
  const items = getNumpickerItems({ onNumClick, onClickNote });

  return (
    <div { ...s.numPicker }>
      { items }
    </div>
  );
}


const NumberPicker = connect(null, mapDispatchToProps)(_NumberPicker);

export default NumberPicker;
