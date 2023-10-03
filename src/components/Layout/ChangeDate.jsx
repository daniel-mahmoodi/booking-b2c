//gregorian calendar & locale
import { useState } from "react";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import PersianToEnglish from "./PersianToEnglish";
const ChangeDate = () => {
  const [state, setState] = useState({ format: "MM/DD/YYYY" });

  const convert = (date, format = state.format) => {
    let object = { date, format };

    setState({
      gregorian: new DateObject(object)
        .convert(gregorian, gregorian_fa)
        .format(),
      //  persian: new DateObject(object).format(),
      //  arabic: new DateObject(object).convert(arabic, arabic_fa).format(),
      //  indian: new DateObject(object).convert(indian, indian_fa).format(),
      jsDate: date.toDate(),
      ...object,
    });
  };

  const Span = ({ children }) => (
    <span style={{ fontWeight: "bold" }}>{children}</span>
  );
  console.log("state", state.gregorian);
  return (
    <div>
      <PersianToEnglish persianText={state.gregorian} />
      <div>
        <div>
          <Span>کلیک کنید: </Span>
          <DatePicker
            value={state.date}
            onChange={convert}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
        </div>
        <div>
          <Span>فرمت: </Span>
          <select
            value={state.format}
            onChange={(e) => convert(state.date, e.target.value)}
            className="select"
          >
            <option>MM/DD/YYYY</option>
            <option>DD-MM-YYYY</option>
            <option>YYYY,MM,DD</option>
            <option>dddd DD MMMM YYYY</option>
            <option>ddd MMM DD YYYY HH:mm:ss</option>
            <option>MMM/DD/YYYY hh:mm:ss a</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>
        <div>
          <Span>میلادی: </Span>
          <span>{state.gregorian}</span>
        </div>
        <div>
          <Span>تاریخ جاوااسکریپت: </Span>
          <span>{state.jsDate?.toString?.()}</span>
        </div>
      </div>
    </div>
  );
};
export default ChangeDate;
