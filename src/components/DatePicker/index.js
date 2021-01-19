import React, { useState } from "react";
import {
  format,
  getDaysInMonth,
  getDay,
  lastDayOfMonth,
  startOfMonth,
  isEqual,
  isSunday,
  addMonths,
  subMonths,
  getDate,
} from "date-fns";
import { Dropdown } from "@sebgroup/react-components/dist/Dropdown";
import styled from "styled-components";
import { IconClose, IconLeft, IconRight } from "../../icons";
import {
  DatePickerModalContainer,
  DatePickerModalHeaderContainer,
  DatePickerModalFooterContainer,
  DatePickerModalBody,
  FlatButton,
  DateButtonWrapper,
  DateButtonContent,
  DatepickerCalendarGrid,
  DatePickerMonthLabel,
  WeekdayContainer,
  DatePickerOverlay
} from "./styled-components";
import { useReducer } from "react";
import { Fragment } from "react";

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "Febuary" },
  { value: "03", label: "Mars" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "Juli" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const years = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  { value: "2025", label: "2025" },
];

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DateButton = (props) => (
  <DateButtonWrapper {...props}>
    <DateButtonContent>{props.children}</DateButtonContent>
  </DateButtonWrapper>
);

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

const DatepickerModalFooter = ({ toggleIsOpen }) => {
  return <DatePickerModalFooterContainer></DatePickerModalFooterContainer>;
};

const SET_MONTH ="SET_MONTH";
const NEXT_MONTH ="NEXT_MONTH";
const PREVIOUS_MONTH ="PREVIOUS_MONTH";
const SET_YEAR ="SET_YEAR";
const SELECT_DATE ="SELECT_DATE";
const PREVIOUS_MONTH_SELECT_DATE ="PREVIOUS_MONTH_SELECT_DATE";
const NEXT_MONTH_SELECT_DATE = "NEXT_MONTH_SELECT_DATE";

const calendarReducer = (state, action) => {
  let stateDate, month, year, selectedDate;
    
  switch (action.type) {
    case "SELECT_DATE":
      const {payload} = action;
    return {
      ...state,
      selectedDate: new Date(payload)
    };
    case "SET_MONTH":
      stateDate = new Date(state.browsingDate);
      stateDate.setMonth(action.payload);
      return {
        ...state,
        browsingDate: stateDate.toISOString(),
        firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
        lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate)),
      };
    case "NEXT_MONTH":
      stateDate = new Date(state.browsingDate);
      month = stateDate.getMonth();
      year = stateDate.getFullYear();
      month++;
      if (month === 12) {
        month = 0;
        year++;
      }
      stateDate.setMonth(month);
      stateDate.setFullYear(year);
      return {
        ...state,
        browsingDate: stateDate.toISOString(),
        firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
        lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate)),
      };
    case "NEXT_MONTH_SELECT_DATE":
        stateDate = new Date(state.browsingDate);
        month = stateDate.getMonth();
        year = stateDate.getFullYear();
        month++;
        if (month === 12) {
          month = 0;
          year++;
        }
        stateDate.setMonth(month);
        stateDate.setFullYear(year);
        selectedDate = new Date(stateDate);
        selectedDate.setDate(action.payload)
        return {
          ...state,
          selectedDate,
          browsingDate: stateDate.toISOString(),
          firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
          lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate)),
        };
    case "PREVIOUS_MONTH":
      stateDate = new Date(state.browsingDate);
      month = stateDate.getMonth();
      year = stateDate.getFullYear();
      month--;

      if (month === -1) {
        month = 11;
        year--;
      }

      stateDate.setMonth(month);
      stateDate.setFullYear(year);
      return {
        ...state,
        browsingDate: stateDate.toISOString(),
        firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
        lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate)),
      };
    case "PREVIOUS_MONTH_SELECT_DATE":
      stateDate = new Date(state.browsingDate);
      month = stateDate.getMonth();
      year = stateDate.getFullYear();
      month--;

      if (month === -1) {
        month = 11;
        year--;
      }

      stateDate.setMonth(month);
      stateDate.setFullYear(year);
      
      selectedDate = new Date(stateDate);
      selectedDate.setDate(action.payload)
      return {
        ...state,
        selectedDate,
        browsingDate: stateDate.toISOString(),
        firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
        lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate)),
      };
    case "SET_YEAR":
      stateDate = new Date(state.browsingDate);
      stateDate.setFullYear(action.payload);
      return {
        ...state,
        browsingDate: stateDate.toISOString(),
        firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
        lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate)),
      };
    default:
      throw new Error();
  }
};

const initialState = {
  browsingDate: startOfMonth(new Date()),
  selectedDate: new Date(),
  firstDayInBrowsingDateMonth: getDay(startOfMonth(new Date())),
  lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(new Date())),
};

const getPreviousMonthDays = (dateString) => {
  const date = new Date(dateString);
  const prevMonth = date.getMonth() - 1;
  date.setMonth(prevMonth);
  return getDaysInMonth(date);
}

const isDateDisabled = (date) => {
  return false;
}

const DatePickerModal = ({ toggleIsOpen, selectedDate }) => {
  const showFooter = false;
  initialState.selectedDate.setHours(0,0,0,0)

  const [state, dispatch] = useReducer(calendarReducer, initialState);

  const daysInMonth = getDaysInMonth(new Date(state.browsingDate));

  const isActiveDate = (dateIsoString) => isEqual(new Date(dateIsoString), new Date(state.selectedDate));

  const renderPreviousMonthDays = () => {
    let previousDaysArray;
    const previousMonthDays = getPreviousMonthDays(state.browsingDate)

    if (state.firstDayInBrowsingDateMonth === 0) {
      previousDaysArray = Array.from({ length: 6 });
    } else {
      previousDaysArray = Array.from({
        length: parseInt(state.firstDayInBrowsingDateMonth) - 1,
      });
    }

    return previousDaysArray.map((item, index) => {
      const buttonDate = subMonths(new Date(state.browsingDate), 1);
      buttonDate.setDate(previousMonthDays - index)
      return <DateButton 
        key={`flat-button-${index}`} 
        onClick={() => {
          dispatch({type: PREVIOUS_MONTH_SELECT_DATE, payload: previousMonthDays - index})
        }} 
        disabled={isSunday(buttonDate)}
        adjecentMonth>{previousMonthDays - index}</DateButton>
      }).reverse();
  };

  const renderNextMonthDays = () => {

    if (state.lastDayInBrowsingDateMonth === 0) {
      return;
    }

    const nextDaysArray = Array.from({
      length: 7 - parseInt(state.lastDayInBrowsingDateMonth),
    });

    return nextDaysArray.map((item, index) => {
      const buttonDate = addMonths(new Date(state.browsingDate), 1);
      const date = index + 1;
      buttonDate.setDate(date)
      return <DateButton 
                key={`flat-button-${index}`} 
                adjecentMonth
                disabled={isSunday(buttonDate)}
                onClick={() => {
                  dispatch({type: NEXT_MONTH_SELECT_DATE, payload: date})}}
            >{date}</DateButton>
    });
  };

  const renderDays = () => {
        return Array.from({ length: daysInMonth }).map((item, index) => {
          const buttonDate = new Date(state.browsingDate);
          buttonDate.setDate(index + 1);
          const buttonDateString = buttonDate.toISOString();
          
        return <DateButton
                  key={`flat-button-${index}`}
                  active={isActiveDate(buttonDateString)}
                  date={buttonDateString}
                  onClick={() => {
                    dispatch({type: SELECT_DATE, payload: buttonDateString})
                  }}
                  disabled={(() => {
                    if(isEqual(buttonDate, state.selectedDate)) return false;  
                    if(isSunday(buttonDate)) return true;  
                    return (buttonDate.getDate() === 10)
                  })()}
                >
                    {index + 1}
                </DateButton>
    });
  };

  return (
    <DatePickerModalContainer>
      <DatePickerModalHeader toggleIsOpen={toggleIsOpen} />
      <DatePickerModalBody>
          <div className="sdv-datepicker__controls">
            <FlatButton onClick={() => dispatch({type: PREVIOUS_MONTH})}>
              <IconLeft width="32" height="32" fill="#0092e1" />
            </FlatButton>
            <Dropdown
              list={months}
              selectedValue={{
                value: format(new Date(state.browsingDate), "MM"),
                label: format(new Date(state.browsingDate), "MMMM"),
              }}
              onChange={(value) => {
                dispatch({
                  type: "SET_MONTH",
                  payload: parseInt(value.value) - 1,
                });
              }}
            />
            <Dropdown
              list={years}
              selectedValue={{
                value: format(new Date(state.browsingDate), "yyyy"),
                label: format(new Date(state.browsingDate), "yyyy"),
              }}
              onChange={(value) => {
                dispatch({
                  type: "SET_YEAR",
                  payload: parseInt(value.value),
                });
              }}
            />
            <FlatButton onClick={() => dispatch({type: NEXT_MONTH})} >
              <IconRight width="32" height="32" fill="#0092e1" />
            </FlatButton>
          </div>
          <DatepickerCalendarGrid>
            <WeekdayContainer>Mon</WeekdayContainer>
            <WeekdayContainer>Tue</WeekdayContainer>
            <WeekdayContainer>Wed</WeekdayContainer>
            <WeekdayContainer>Thu</WeekdayContainer>
            <WeekdayContainer>Fri</WeekdayContainer>
            <WeekdayContainer>Sat</WeekdayContainer>
            <WeekdayContainer>Sun</WeekdayContainer>
          </DatepickerCalendarGrid>
          <DatePickerMonthLabel>
            {format(new Date(state.browsingDate), "MMMM")} {format(new Date(state.browsingDate), "yyyy")}
          </DatePickerMonthLabel>
          <DatepickerCalendarGrid>
            {renderPreviousMonthDays()}
            {renderDays()}
            {renderNextMonthDays()}
          </DatepickerCalendarGrid>
      </DatePickerModalBody>
      {showFooter && <DatepickerModalFooter />}
    </DatePickerModalContainer>
  );
};

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div>
      <label htmlFor="input-field" className="sdv-field-label">
        Field label
      </label>
      <input
        id="input-field"
        className="sdv-field"
        aria-label="Field label"
        placeholder="Input field"
        onClick={() => toggleIsOpen()}
      />
      {isOpen && (
        <Fragment>
          <DatePickerOverlay />
          <DatePickerModal
            toggleIsOpen={toggleIsOpen}
            selectedDate={selectedDate}
          />
        </Fragment>
      )}
    </div>
  );
};

const ViewDatePicker = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <DatePicker />
      </div>
    </div>
  </div>
);

export default ViewDatePicker;
