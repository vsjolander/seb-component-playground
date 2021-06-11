import React from 'react';
import { SET_TODAY } from './consts'; 
import {DatePickerModalFooterContainer, FlatButton} from './styled-components'

const DatePickerModalFooter = ({ dispatch }) => {
  return (
    <DatePickerModalFooterContainer>
      <div className="btn btn-link" onClick={() => {dispatch({type: "SET_TODAY"})}}>Today</div>
      <div className="btn btn-link">Other Action</div>
    </DatePickerModalFooterContainer>
  );
};

export default DatePickerModalFooter;