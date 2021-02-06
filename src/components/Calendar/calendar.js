import React from 'react';
import './calendar.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarComponent = () => {
    return(
        <div className="calendar">
            <Calendar />
        </div>
    )
};