import React, {useRef} from 'react';
import {format} from 'date-fns'
const DatePickerInputField = (props) => {
    console.log(props.state);
    const inputElement = useRef(null);

    return (
        <React.Fragment>
        <label htmlFor="input-field" className="sdv-field-label">
            {props.label && (typeof props.label == 'string') && props.label}
        </label>
        <input
            className="sdv-field"
            placeholder={props.placeholder && (typeof props.placeholder == 'string') && props.placeholder}
            value={format(props.state.selectedDate, 'yyyy-MM-dd')}
            onChange={() => {}}
            onClick={() => {
                props.toggleIsOpen()
                const rect = inputElement.current.getBoundingClientRect();
                props.setModalPosition({x: rect.x, y: rect.y + rect.height})
            }}
            ref={inputElement}
        />
      </React.Fragment>
    )
}

export default DatePickerInputField;