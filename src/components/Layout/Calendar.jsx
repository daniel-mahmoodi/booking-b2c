import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./CalendarStyle.module.css";
//gregorian calendar & locale
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import usePersianToEnglish from "./PersianToEnglish";
import { eventActions } from "../../store/event-slice";
import { useDispatch } from "react-redux";

const Calendar = ({ getDateFromCalendar }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ format: "YYYY-MM-DD" });

  const convertToGre = (date, format = state.format) => {
    dispatch(eventActions.toggleTicketLoading(false));
    dispatch(eventActions.toggleTicketComponent(false));
    let object = { date, format };
    setState({
      gregorian: new DateObject(object)
        .convert(gregorian, gregorian_fa)
        .format("YYYY-MM-DD"),
      jsDate: date.toDate(),
      ...object,
    });
  };

  //convertDate from persian text to english one
  const { date } = usePersianToEnglish(state.gregorian);

  useEffect(() => {
    getDateFromCalendar(date);
  }, [date]);

  return (
    <div className={classes.body}>
      <DatePicker
        inputClass={classes.customInput}
        value={state.date}
        onChange={convertToGre}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        placeholder="تاریخ ورود"
      />
    </div>
  );
};
export default Calendar;
