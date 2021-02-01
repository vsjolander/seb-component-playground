import React, {useState, useRef} from 'react';
import {
    DateButtonWrapper,
    DateButtonContent
} from "./styled-components";
import Tooltip from '../Tooltip'

const DateButton = (props) => {
  return (
    <DateButtonWrapper {...props}>
      {props.disabled && props.activeTooltip && <Tooltip text={"This date is not available since it's a holiday"} onClick={() => {
        props.setActiveTooltipIndex(null)
        props.toolTipTimeout.current && clearTimeout(props.toolTipTimeout.current);
      }} />}
      <DateButtonContent onClick={() => {
        props.toolTipTimeout.current && clearTimeout(props.toolTipTimeout.current);
        props.disabled && props.setActiveTooltipIndex(props.index)
        props.toolTipTimeout.current = setTimeout(() => {props.setActiveTooltipIndex(null)}, 4000);

    }} >{props.children}</DateButtonContent>
    </DateButtonWrapper>
  )
}

export default DateButton;