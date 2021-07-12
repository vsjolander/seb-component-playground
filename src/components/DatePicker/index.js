import React, { Fragment, useState, useReducer } from "react";
import ReactDOM from "react-dom";
import { getDay, lastDayOfMonth, startOfMonth } from "date-fns";
import { DatePickerOverlay } from "./styled-components";
import DatePickerInputField from "./DatePickerInputField";
import DatePickerModal from "./DatePickerModal";
import moment from 'moment';
import calendarReducer from "./reducer";
import RcDatePicker from "./RcDatePicker";
import RcRangePicker from "./RcRangePicker";



const modalRoot = document.getElementById("modal-root");

const initialState = {
  browsingDate: startOfMonth(new Date()),
  selectedDate: new Date(),
  firstDayInBrowsingDateMonth: getDay(startOfMonth(new Date())),
  lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(new Date())),
};

const DatePicker = (props) => {
  initialState.selectedDate.setHours(0, 0, 0, 0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [state, dispatch] = useReducer(calendarReducer, initialState);
  const { footer, range } = props.config || false;

  const toggleIsOpen = () => {
    setIsOpen((state) => !state);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <DatePickerInputField
        label={props.label && props.label}
        toggleIsOpen={toggleIsOpen}
        setModalPosition={setModalPosition}
        state={state}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <div>
            <DatePickerOverlay onClick={() => setIsOpen(false)} />
            <DatePickerModal
              modalPosition={modalPosition}
              toggleIsOpen={toggleIsOpen}
              closeModal={closeModal}
              state={state}
              dispatch={dispatch}
              footer={footer}
              range={range}
            />
          </div>,
          modalRoot
        )}
    </Fragment>
  );
};

const config = {
  withActions: {
    footer: true,
  },
  range: {
    range: true
  }
};


const ViewDatePicker = () => {


  return (
  <Fragment>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-5">Date Picker</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <label className="sdv-field-label">Default V2</label>
          <RcDatePicker />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <label className="sdv-field-label">Range V2</label>
          <RcRangePicker />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <DatePicker label="Default" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <DatePicker label="With actions" config={config.withActions} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <DatePicker label="Range picker" config={config.range} />
        </div>
      </div>
    </div>
    <div></div>
  </Fragment>
)
};

export default ViewDatePicker;
