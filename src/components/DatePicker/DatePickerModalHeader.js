import React from 'react';
import {DatePickerModalHeaderContainer, FlatButton} from './styled-components';
import { IconClose } from "../../icons";

const DatePickerModalHeader = ({ toggleIsOpen }) => {
    return (
      <DatePickerModalHeaderContainer>
        Date Picker Header
        <FlatButton onClick={() => toggleIsOpen()}>
          <IconClose />
        </FlatButton>
      </DatePickerModalHeaderContainer>
    );
  };

  export default DatePickerModalHeader;