import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (

    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
        dateFormat={"dd/MM/yyyy"}
        // minDate={new Date()}
        isClearable
        scrollableMonthYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
};

export default DatePickerComponent;
