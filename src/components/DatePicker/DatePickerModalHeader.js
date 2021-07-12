import React from 'react';
import {DatePickerModalHeaderContainer, FlatButton} from './styled-components';
import { IconClose } from "../../icons";

const DatePickerModalHeader = ({ closeModal }) => {
    return (
      <DatePickerModalHeaderContainer>
        Date Picker Header
        <FlatButton onClick={() => closeModal()}>
          <IconClose />
        </FlatButton>
      </DatePickerModalHeaderContainer>
    );
  };

  export default DatePickerModalHeader;