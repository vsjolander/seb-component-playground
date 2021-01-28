import {
    getDay,
    lastDayOfMonth,
    startOfMonth
  } from "date-fns";

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

  export default calendarReducer;