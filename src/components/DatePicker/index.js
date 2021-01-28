import React, { Fragment, useState, useReducer } from "react";
import ReactDOM from 'react-dom';
import {
  getDay,
  lastDayOfMonth,
  startOfMonth
} from "date-fns";
import {
  DatePickerOverlay
} from "./styled-components";
import DatePickerInputField from './DatePickerInputField';
import DatePickerModal from './DatePickerModal'
import calendarReducer from './reducer'


const modalRoot = document.getElementById('modal-root');


const initialState = {
  browsingDate: startOfMonth(new Date()),
  selectedDate: new Date(),
  firstDayInBrowsingDateMonth: getDay(startOfMonth(new Date())),
  lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(new Date())),
};

const DatePicker = () => {
  initialState.selectedDate.setHours(0,0,0,0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({x: 0, y: 0});
  const [state, dispatch] = useReducer(calendarReducer, initialState);

  const toggleIsOpen = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Fragment>
      <DatePickerInputField toggleIsOpen={toggleIsOpen} setModalPosition={setModalPosition} state={state} />
      {isOpen && ReactDOM.createPortal(
        <div>
          <DatePickerOverlay onClick={ () => setIsOpen(false) } />
          <DatePickerModal
            modalPosition={modalPosition}
            toggleIsOpen={toggleIsOpen}
            state={state}
            dispatch={dispatch}
          />
        </div>,
        modalRoot
      )}
    </Fragment>
  );
};

const ViewDatePicker = () => (
  <Fragment>
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <DatePicker />
      </div>
    </div>
  </div>
  <div></div>
  </Fragment>
);

export default ViewDatePicker;
