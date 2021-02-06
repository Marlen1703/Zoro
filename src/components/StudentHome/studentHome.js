import React from 'react';
import './studentHome.scss';
import { useTranslation } from 'react-i18next';
import { CardCourse } from '../CardCourse/cardCourse';
import { CalendarComponent } from '../Calendar/calendar';
import { CardEvent } from '../CardEvent/cardEvent';

export const StudentHome = () => {

    const { t } = useTranslation();

    return(
        <div className="student-home">
            <div className="student-home-container">
                <div className="student-home-classes">
                    <h2>{t('student.today')}</h2>
                    <div className="student-home-classes-list">
                        <CardCourse />
                        <CardCourse />
                        <CardCourse />
                        <CardCourse />
                        <CardCourse />
                        <CardCourse />
                    </div>
                </div>
                <div className="student-home-ce">
                    <div className="student-home-ce-calendar">
                        <ul className="student-home-ce-calendar-menu">
                            <li className="student-home-ce-calendar-menu-selected">{t('student.courses')}</li>
                            <li>{t('student.tasks')}</li>
                            <li>{t('student.events')}</li>
                        </ul>
                        <CalendarComponent/>
                    </div>
                    <div className="student-home-ce-events">
                        <h3>{t('student.upcoming')}</h3>
                        <CardEvent />
                    </div>
                </div>
            </div>
        </div>
    )
};