import React from 'react';
import {
    DateButtonWrapper,
    DateButtonContent
} from "./styled-components";

const DateButton = (props) => (
    <DateButtonWrapper {...props}>
      <DateButtonContent>{props.children}</DateButtonContent>
    </DateButtonWrapper>
);

export default DateButton;