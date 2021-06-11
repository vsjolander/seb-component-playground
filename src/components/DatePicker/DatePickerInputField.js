import React, { useRef } from "react";
import { format } from "date-fns";
const DatePickerInputField = (props) => {
  console.log(props.state);
  const inputElement = useRef(null);

  return (
    <React.Fragment>
      {props.label && typeof props.label == "string" && (
        <label htmlFor="input-field" className="sdv-field-label">
          {props.label}
        </label>
      )}

      <div className="input-group mb-3">
        <input
          className="sdv-field form-control"
          type="text"
          placeholder={
            props.placeholder &&
            typeof props.placeholder == "string" &&
            props.placeholder
          }
          value={format(props.state.selectedDate, "yyyy-MM-dd")}
          onChange={() => {}}
          ref={inputElement}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              props.toggleIsOpen();
              const rect = inputElement.current.getBoundingClientRect();
              props.setModalPosition({ x: rect.x, y: rect.y + rect.height });
            }}
          >
            <i className="far fa-calendar-alt"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DatePickerInputField;
