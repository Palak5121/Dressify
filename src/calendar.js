import React from 'react';
import { format, addDays } from 'date-fns';

const SevenDayCalendar = () => {
  const startDate = new Date(); // Set your initial date
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = addDays(startDate, i);
    dates.push(currentDate);
  }

  return (
    <div className="seven-day-calendar">
      <div className="calendar-scroll">
        {dates.map((date, index) => (
          <div key={index} className="calendar-day">
            {format(date, 'MMMM d, yyyy')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SevenDayCalendar;
