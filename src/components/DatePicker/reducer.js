import { getDay, lastDayOfMonth, startOfMonth } from "date-fns";

import {
  SET_MONTH,
  NEXT_MONTH,
  PREVIOUS_MONTH,
  SET_YEAR,
  SELECT_DATE,
  SET_TODAY,
  PREVIOUS_MONTH_SELECT_DATE,
  NEXT_MONTH_SELECT_DATE,
} from "./consts";

const calendarReducer = (state, action) => {
  let stateDate, month, year, selectedDate;
  const { type, payload } = action;

  switch (type) {
    case SET_TODAY:
      stateDate = new Date()
      return {
        ...state,
        selectedDate: stateDate,
        browsingDate: stateDate.toISOString(),
        firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
        lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate))
      };
    case SELECT_DATE:
      console.log(new Date(payload))
      return {
        ...state,
        selectedDate: new Date(payload),
      };
    case SET_MONTH:
      stateDate = new Date(state.browsingDate);
      stateDate.setMonth(action.payload);
      return {
        ...state,
        browsingDate: stateDate.toISOString(),
        firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
        lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate)),
      };
    case NEXT_MONTH:
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
    case NEXT_MONTH_SELECT_DATE:
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
      selectedDate.setDate(action.payload);
      return {
        ...state,
        selectedDate,
        browsingDate: stateDate.toISOString(),
        firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
        lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate)),
      };
    case PREVIOUS_MONTH:
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
    case PREVIOUS_MONTH_SELECT_DATE:
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
      selectedDate.setDate(action.payload);
      return {
        ...state,
        selectedDate,
        browsingDate: stateDate.toISOString(),
        firstDayInBrowsingDateMonth: getDay(startOfMonth(stateDate)),
        lastDayInBrowsingDateMonth: getDay(lastDayOfMonth(stateDate)),
      };
    case SET_YEAR:
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
