import React, { useState, useRef } from "react";
import {
  format,
  getDaysInMonth,
  isEqual,
  isSunday,
  addMonths,
  subMonths,
} from "date-fns";
import FocusTrap from 'focus-trap-react';
import {
  DatePickerModalContainer,
  DatePickerModalBody,
  FlatButton,
  DatepickerCalendarGrid,
  DateButtonPlaceholder,
  DatePickerModalBodyContent,
  WeekdayContainer,
  DatePickerSelect,
} from "./styled-components";
import DateButton from "./DateButton";
import DatePickerModalHeader from "./DatePickerModalHeader";
import DatePickerModalFooter from "./DatePickerModalFooter";
import { IconLeft, IconRight } from "../../icons";
import { SELECT_DATE, PREVIOUS_MONTH, NEXT_MONTH } from "./consts";

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
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

const getPreviousMonthDays = (dateString) => {
  const date = new Date(dateString);
  const prevMonth = date.getMonth() - 1;
  date.setMonth(prevMonth);
  return getDaysInMonth(date);
};

const DatePickerModal = ({
  toggleIsOpen,
  selectedDate,
  modalPosition,
  state,
  dispatch,
  footer = false,
  range = false
}) => {
  const showFooter = false;

  const daysInMonth = getDaysInMonth(new Date(state.browsingDate));

  const isActiveDate = (dateIsoString) =>
    isEqual(new Date(dateIsoString), new Date(state.selectedDate));

  const [activeTooltipIndex, setActiveTooltipIndex] = useState(null);

  const toolTipTimeout = useRef();

  const renderPreviousMonthDays = () => {
    let previousDaysArray;
    const previousMonthDays = getPreviousMonthDays(state.browsingDate);

    if (state.firstDayInBrowsingDateMonth === 0) {
      previousDaysArray = Array.from({ length: 6 });
    } else {
      previousDaysArray = Array.from({
        length: parseInt(state.firstDayInBrowsingDateMonth) - 1,
      });
    }

    return previousDaysArray
      .map((item, index) => {
        const buttonDate = subMonths(new Date(state.browsingDate), 1);
        buttonDate.setDate(previousMonthDays - index);
        return <DateButtonPlaceholder key={index} />;
      })
      .reverse();
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
      buttonDate.setDate(date);
      return <DateButtonPlaceholder />;
    });
  };

  const renderDays = () => {
    return Array.from({ length: daysInMonth }).map((item, index) => {
      const buttonDate = new Date(state.browsingDate);
      buttonDate.setDate(index + 1);
      const buttonDateString = buttonDate.toISOString();

      return (
        <DateButton
          key={`flat-button-${index}`}
          active={isActiveDate(buttonDateString)}
          date={buttonDateString}
          activeTooltip={activeTooltipIndex === index}
          index={index}
          setActiveTooltipIndex={setActiveTooltipIndex}
          toolTipTimeout={toolTipTimeout}
          onClick={() => {
            dispatch({ type: SELECT_DATE, payload: buttonDateString });
            setActiveTooltipIndex(null);
          }}
          disabled={(() => {
            if (isEqual(buttonDate, state.selectedDate)) return false;
            if (isSunday(buttonDate)) return true;
            return buttonDate.getDate() === 10;
          })()}
        >
          {index + 1}
        </DateButton>
      );
    });
  };

  return (
    <FocusTrap focusTrapOptions={{clickOutsideDeactivates: true, onDeactivate: toggleIsOpen}}>
      <DatePickerModalContainer modalPosition={modalPosition}>
        <DatePickerModalHeader toggleIsOpen={toggleIsOpen} />
        <DatePickerModalBody>
          <DatePickerModalBodyContent>
          <div className="sdv-datepicker__controls">
            <FlatButton onClick={() => dispatch({ type: PREVIOUS_MONTH })}>
              <IconLeft width="20" height="20" fill="#868686" />
            </FlatButton>
            <DatePickerSelect
              value={format(new Date(state.browsingDate), "MM")}
              onChange={(event) => {
                console.log(event.target.value);
                dispatch({
                  type: "SET_MONTH",
                  payload: parseInt(event.target.value) - 1,
                });
              }}
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </DatePickerSelect>
            <DatePickerSelect
              onChange={(event) => {
                dispatch({
                  type: "SET_YEAR",
                  payload: parseInt(event.target.value),
                });
              }}
            >
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </DatePickerSelect>
            <FlatButton onClick={() => dispatch({ type: NEXT_MONTH })}>
              <IconRight width="20" height="20" fill="#868686" />
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
          <DatepickerCalendarGrid>
            {renderPreviousMonthDays()}
            {renderDays()}
            {renderNextMonthDays()}
          </DatepickerCalendarGrid>
        
          </DatePickerModalBodyContent>
          { range && (
                      <DatePickerModalBodyContent>
                      <div className="sdv-datepicker__controls">
                        <FlatButton onClick={() => dispatch({ type: PREVIOUS_MONTH })}>
                          <IconLeft width="20" height="20" fill="#868686" />
                        </FlatButton>
                        <DatePickerSelect
                          value={format(new Date(state.browsingDate), "MM")}
                          onChange={(event) => {
                            console.log(event.target.value);
                            dispatch({
                              type: "SET_MONTH",
                              payload: parseInt(event.target.value) - 1,
                            });
                          }}
                        >
                          {months.map((month) => (
                            <option key={month.value} value={month.value}>
                              {month.label}
                            </option>
                          ))}
                        </DatePickerSelect>
                        <DatePickerSelect
                          onChange={(event) => {
                            dispatch({
                              type: "SET_YEAR",
                              payload: parseInt(event.target.value),
                            });
                          }}
                        >
                          {years.map((year) => (
                            <option key={year.value} value={year.value}>
                              {year.label}
                            </option>
                          ))}
                        </DatePickerSelect>
                        <FlatButton onClick={() => dispatch({ type: NEXT_MONTH })}>
                          <IconRight width="20" height="20" fill="#868686" />
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
                      <DatepickerCalendarGrid>
                        {renderPreviousMonthDays()}
                        {renderDays()}
                        {renderNextMonthDays()}
                      </DatepickerCalendarGrid>
                    
                      </DatePickerModalBodyContent>
                      
          )}
          </DatePickerModalBody>
        {footer && <DatePickerModalFooter dispatch={dispatch} />}
      </DatePickerModalContainer>
    </FocusTrap>
  );
};

export default DatePickerModal;
