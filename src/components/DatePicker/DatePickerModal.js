import React, {useReducer} from 'react';
import {
    format,
    getDaysInMonth,
    isEqual,
    isSunday,
    addMonths,
    subMonths,
  } from "date-fns";
import { Dropdown } from "@sebgroup/react-components/dist/Dropdown";
import {
    DatePickerModalContainer,
    DatePickerModalBody,
    FlatButton,
    DatepickerCalendarGrid,
    DateButtonPlaceholder,
    WeekdayContainer
  } from "./styled-components";
  import DateButton from './DateButton'
  import DatePickerModalHeader from './DatePickerModalHeader'
  import DatePickerModalFooter from './DatePickerModalFooter'
  import {IconLeft, IconRight} from '../../icons'
  import {SELECT_DATE, PREVIOUS_MONTH, NEXT_MONTH} from './consts'

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

const getPreviousMonthDays = (dateString) => {
  const date = new Date(dateString);
  const prevMonth = date.getMonth() - 1;
  date.setMonth(prevMonth);
  return getDaysInMonth(date);
}

const DatePickerModal = ({ toggleIsOpen, selectedDate, modalPosition, state, dispatch }) => {
    const showFooter = false;
  
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
        return <DateButtonPlaceholder key={index} />
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
        return <DateButtonPlaceholder />
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
      <DatePickerModalContainer modalPosition={modalPosition}>
        <DatePickerModalHeader toggleIsOpen={toggleIsOpen} />
        <DatePickerModalBody>
            <div className="sdv-datepicker__controls">
              <FlatButton onClick={() => dispatch({type: PREVIOUS_MONTH})}>
                <IconLeft width="18" height="18" fill="#000000" />
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
                <IconRight width="18" height="18" fill="#000000" />
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
            
        </DatePickerModalBody>
        <DatePickerModalFooter />
      </DatePickerModalContainer>
    );
  };

  export default DatePickerModal;