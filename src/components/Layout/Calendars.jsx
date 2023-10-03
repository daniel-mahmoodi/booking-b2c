import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import ChangeDate from "./ChangeDate";

export default function Calendar() {
  const [value, setValue] = useState();
console.log('calae',value?.toDate?.().toString());
  return (
    <>

    <ChangeDate/>
    
      <DatePicker
        value={value}
        onChange={setValue}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
      {value?.toDate?.().toString()}
    </>
  );
}
